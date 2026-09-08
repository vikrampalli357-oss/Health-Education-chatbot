"""
CollegeAssist AI - RAG Knowledge Engine & Assistant Python Web Server (app.py)
Serves the CollegeAssist AI web application and RAG API endpoints.
Uses Python built-in http.server (Zero external package dependencies required).
"""

import http.server
import socketserver
import os
import sys
import json
import urllib.parse

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CollegeAssistHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # API Health Check Endpoint
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = {
                "status": "online",
                "app": "CollegeAssist AI with RAG",
                "version": "2.0.0",
                "rag_documents": 7
            }
            self.wfile.write(json.dumps(response).encode('utf-8'))
            return
        
        # Fallback to serving static HTML/CSS/JS files
        return super().do_GET()

    def do_POST(self):
        # API RAG Query Endpoint
        if self.path == '/api/rag/query':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                body = json.loads(post_data.decode('utf-8'))
                query = body.get("query", "")
                
                # Response payload following CollegeAssist AI RAG rules
                response_data = {
                    "query": query,
                    "status": "success",
                    "rag_enabled": True,
                    "system": "CollegeAssist AI Engine"
                }

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps(response_data).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return
        
        return super().do_POST()

def run_server(port=PORT):
    os.chdir(DIRECTORY)
    handler = CollegeAssistHandler
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("127.0.0.1", port), handler) as httpd:
        print("==================================================")
        print(f"CollegeAssist AI Server (app.py) Running")
        print(f"Access URL: http://127.0.0.1:{port}/")
        print("==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down CollegeAssist AI server...")
            httpd.shutdown()

if __name__ == "__main__":
    port = PORT
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass
    run_server(port)
