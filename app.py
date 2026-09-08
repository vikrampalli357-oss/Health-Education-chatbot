"""
HealthEduBot - AI Health Education Assistant Python Web Server (app.py)
Serves the HealthEduBot web application and health education API endpoints.
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

class HealthEduHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Route: API Health check endpoint
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = {
                "status": "online",
                "app": "HealthEduBot Python Assistant",
                "version": "1.0.0"
            }
            self.wfile.write(json.dumps(response).encode('utf-8'))
            return
        
        # Fallback to serving static HTML/CSS/JS files
        return super().do_GET()

    def do_POST(self):
        # Route: API Chat Endpoint
        if self.path == '/api/chat':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                body = json.loads(post_data.decode('utf-8'))
                user_message = body.get("message", "")
                
                # HealthEduBot Python Safety Evaluation & Response Format
                response_data = {
                    "message": user_message,
                    "disclaimer": "Educational purpose only. Does not replace professional medical diagnosis or prescription.",
                    "status": "success"
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
    handler = HealthEduHandler
    
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("127.0.0.1", port), handler) as httpd:
        print("==================================================")
        print(f"HealthEduBot Python Server (app.py) Running")
        print(f"Access URL: http://127.0.0.1:{port}/")
        print("==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down HealthEduBot server...")
            httpd.shutdown()

if __name__ == "__main__":
    port = PORT
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass
    run_server(port)
