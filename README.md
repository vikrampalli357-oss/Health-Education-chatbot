# CollegeAssist AI - Intelligent Campus Assistant with RAG 🏛️

**CollegeAssist AI** is an AI-powered college assistant application that provides accurate, source-cited information from official college documents using **Retrieval-Augmented Generation (RAG)**.

---

## 🌟 Key Features & RAG Rules

- **Document Knowledge Base**: Indexed official documents including:
  - `Admission Guidelines 2026–27`
  - `Academic Calendar 2026–27`
  - `Fee Structure & Regulations 2026–27`
  - `Examination Regulations 2026`
  - `Hostel Rules & Facilities Handbook`
  - `Placement Cell Guidelines 2026`
- **Structured Response Format**:
  ```text
  Answer: Direct answer derived from retrieved context.
  Details: Bullet points with specific details.
  Source: Document Name, Page X (e.g., Source: Admission Guidelines 2026–27, Page 2)
  ```
- **Unknown Information Fallback**: If information is missing from official documents, responds:  
  `"I couldn't find this information in the available college documents. Please check with the relevant college department or official notice."`
- **Ambiguity Clarification**: Automatically detects vague prompts (e.g. *"Tell me about exams"*) and prompts for clarification.
- **Latest Notice Priority**: Automatically resolves conflicts by preferring newer dated official notices over older drafts.
- **Custom Document Ingestion**: Ingest custom college notices or text into the live RAG index.

---

## 🚀 Quick Start / Running Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vikrampalli357-oss/Health-Education-chatbot.git
   cd Health-Education-chatbot
   ```

2. **Run the Application**:
   ```bash
   python app.py
   ```

3. **Open in Web Browser**:
   Navigate to **`http://127.0.0.1:3000/`**

---

## ⚠️ Privacy & Safety Rules

- Never requests or stores sensitive credentials (passwords, OTPs, card details).
- Zero hallucination policy: Only provides information backed by indexed college documents.
