/**
 * CollegeAssist AI - RAG Knowledge Engine & Assistant
 * Adheres strictly to CollegeAssist AI System Prompt & RAG Rules.
 */

// Official College Knowledge Base (Document Chunks)
const COLLEGE_KNOWLEDGE_BASE = [
  {
    id: "adm_01",
    docName: "Admission Guidelines 2026–27",
    page: 2,
    date: "2026-03-01",
    category: "Admissions",
    keywords: ["admission", "documents", "eligibility", "apply", "application", "certificate", "requirements"],
    content: "Required Documents for Admission 2026–27: All prospective undergraduate and postgraduate candidates must submit: 1. Class 10 Marks Sheet & Passing Certificate, 2. Class 12 (or equivalent) Marks Sheet, 3. Transfer Certificate (TC) & Migration Certificate, 4. 4 Passport-size photographs, 5. Government-issued ID (Aadhaar / Passport / Voter ID), 6. Entrance Exam Scorecard (where applicable).",
    answer: "According to the official admission guidelines, students are required to submit their Class 10 & 12 certificates, Transfer Certificate, passport-size photographs, government-issued ID, and entrance scorecard.",
    details: [
      "Class 10 & Class 12 Original Marks Sheets and Passing Certificates.",
      "Transfer Certificate (TC) and Migration Certificate from previous institution.",
      "4 recent passport-size colored photographs.",
      "Valid Government-issued Identification (Aadhaar Card, Passport, or Voter ID).",
      "Entrance Exam Scorecard (JEE / GATE / State Entrance as applicable)."
    ]
  },
  {
    id: "adm_02",
    docName: "Admission Notice - Deadline Extension",
    page: 1,
    date: "2026-05-15", // Newer notice overriding older June 15 notice
    category: "Admissions",
    keywords: ["admission deadline", "last date", "closing date", "admissions close", "when do admissions close"],
    content: "Notice Ref #ADM/2026/08: The deadline for submitting undergraduate online applications has been extended to June 30, 2026 (overriding the previously announced date of June 15).",
    answer: "Admissions for the upcoming academic session close on June 30, 2026.",
    details: [
      "Online portal closing date: June 30, 2026.",
      "Note: This reflects the latest official notice (Ref #ADM/2026/08), which extended the earlier June 15 deadline."
    ]
  },
  {
    id: "fee_01",
    docName: "Fee Structure & Regulations 2026–27",
    page: 3,
    date: "2026-01-10",
    category: "Fees",
    keywords: ["tuition fee", "fee structure", "fees", "cost", "examination fee", "semester fee", "hostel fee"],
    content: "Approved College Fee Structure 2026–27: 1. B.Tech Tuition Fee: $1,200 (₹45,000) per semester. 2. Examination Fee: $50 (₹2,500) per semester. 3. Hostel Fee (Occupancy + Mess): $600 (₹28,000) per semester. 4. Library & Lab Security Deposit (Refundable): $100 (₹5,000) one-time at admission.",
    answer: "The fee structure for the 2026–27 academic year includes tuition, examination, hostel, and lab/library security deposits.",
    details: [
      "B.Tech Tuition Fee: ₹45,000 per semester.",
      "Examination Fee: ₹2,500 per semester.",
      "Hostel Fee (including mess charges): ₹28,000 per semester.",
      "Refundable Library & Laboratory Deposit: ₹5,000 (one-time upon admission)."
    ]
  },
  {
    id: "acad_01",
    docName: "Academic Calendar 2026–27",
    page: 4,
    date: "2026-02-01",
    category: "Academic",
    keywords: ["academic calendar", "semester start", "midterm", "end sem", "holiday", "schedule", "working days"],
    content: "Academic Calendar 2026–27: Fall Semester commences on August 1, 2026. Mid-semester internal evaluations: October 12–17, 2026. End-semester final examinations begin on December 1, 2026. Winter break: December 20, 2026 to January 5, 2027.",
    answer: "According to the Academic Calendar 2026–27, the Fall semester begins on August 1, 2026, with end-semester exams scheduled for December 1, 2026.",
    details: [
      "Semester Commencement: August 1, 2026.",
      "Mid-Semester Internal Examinations: October 12–17, 2026.",
      "End-Semester Final Examinations: December 1, 2026.",
      "Winter Vacation: December 20, 2026 – January 5, 2027."
    ]
  },
  {
    id: "exam_01",
    docName: "Examination Regulations & Rules 2026",
    page: 5,
    date: "2026-01-20",
    category: "Examinations",
    keywords: ["exam rules", "hall ticket", "attendance eligibility", "passing marks", "malpractice", "rules"],
    content: "College Examination Regulations: 1. Minimum 75% attendance in each course is required to be eligible for hall ticket issuance. 2. Students must carry their official College ID Card and printed Hall Ticket to the examination hall. 3. Electronic gadgets (mobile phones, smartwatches, programmable calculators) are strictly prohibited. 4. Passing mark is 40% in theory and 50% in practical evaluations.",
    answer: "Students must maintain a minimum of 75% attendance to receive their hall ticket and carry their official college ID during exams.",
    details: [
      "Attendance Requirement: Minimum 75% attendance in each subject is mandatory.",
      "Hall Ticket & ID: Printed Hall Ticket and College Student ID Card required at every exam session.",
      "Prohibited Items: Mobile phones, smartwatches, and unauthorized electronics strictly forbidden.",
      "Passing Threshold: Minimum 40% in theory exams and 50% in practical evaluations."
    ]
  },
  {
    id: "hostel_01",
    docName: "Hostel Information & Rules Handbook",
    page: 2,
    date: "2026-02-15",
    category: "Hostels",
    keywords: ["hostel", "room", "curfew", "mess", "facility", "hostel rules", "warden"],
    content: "Hostel Regulations: 1. Night Curfew Timing: 9:30 PM for all resident students. 2. Mess timing: Breakfast 7:30–9:00 AM, Lunch 12:30–2:00 PM, Dinner 7:30–9:00 PM. 3. Wi-Fi high-speed internet available 24/7 in study lounges. 4. Visitors are permitted only in the ground-floor visitor lounge between 4:00 PM and 7:00 PM.",
    answer: "Hostel residents must adhere to the 9:30 PM night curfew and follow designated mess and visitor hours.",
    details: [
      "Night Curfew: 9:30 PM for all undergraduate hostels.",
      "Mess Hours: Breakfast (7:30–9:00 AM), Lunch (12:30–2:00 PM), Dinner (7:30–9:00 PM).",
      "Visitor Policy: Allowed only in the visitor lounge from 4:00 PM to 7:00 PM.",
      "Facilities: 24/7 high-speed Wi-Fi, study room access, and laundry service."
    ]
  },
  {
    id: "place_01",
    docName: "Placement Cell Guidelines 2026",
    page: 3,
    date: "2026-04-05",
    category: "Placements",
    keywords: ["placement", "jobs", "companies", "cgpa", "training", "recruitment", "internship", "campus placement"],
    content: "Training & Placement Cell Rules: 1. Minimum 6.5 CGPA with no active backlogs required for Phase-1 campus recruitment drives. 2. Student registration on the placement portal is mandatory prior to resume submission. 3. Attendance at pre-placement talks (PPT) is compulsory for registered candidates. 4. Highest package recorded last season: $42,000 (₹32 LPA); Average package: $9,500 (₹7.2 LPA).",
    answer: "Eligibility for Phase-1 campus placement requires a minimum 6.5 CGPA with no active backlogs.",
    details: [
      "Eligibility Criteria: 6.5 CGPA minimum and zero active backlogs.",
      "Mandatory Registration: Must register on Placement Portal before applying to companies.",
      "Placement Statistics: Highest salary package ₹32 LPA; Average salary package ₹7.2 LPA.",
      "Top Recruiting Sectors: Software engineering, data analytics, core engineering, and consulting."
    ]
  }
];

// Ambiguous Keywords List (triggers clarifying questions)
const AMBIGUOUS_TRIGGERS = [
  { keyword: "exams", clarification: "Sure. Are you asking about the exam timetable, examination rules, registration eligibility, or results?" },
  { keyword: "exam", clarification: "Sure. Are you asking about the examination timetable, attendance rules, hall ticket issuance, or passing marks?" },
  { keyword: "fees", clarification: "I can help with fees. Are you looking for tuition fees, examination fees, hostel fees, or security deposits?" },
  { keyword: "fee", clarification: "I can help with fees. Are you looking for tuition fees, examination fees, hostel fees, or security deposits?" },
  { keyword: "hostel", clarification: "Are you inquiring about hostel room fees, night curfew timings, mess hours, or visitor rules?" },
  { keyword: "admission", clarification: "Are you asking about required admission documents, application procedures, eligibility criteria, or important deadlines?" }
];

// Standard Missing Info Fallback Text
const UNKNOWN_INFO_FALLBACK = "I couldn't find this information in the available college documents. Please check with the relevant college department or official notice.";

// State Management
let customKnowledgeBase = [...COLLEGE_KNOWLEDGE_BASE];
let chatHistory = [];
let currentTheme = localStorage.getItem("theme") || "light";

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderKnowledgeBaseSidebar();
  setupEventListeners();
  loadSavedChat();
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const iconBtn = document.getElementById("themeToggleBtn");
  if (iconBtn) {
    iconBtn.innerHTML = currentTheme === "light" ? "🌙" : "☀️";
  }
}

// Render Documents in Sidebar
function renderKnowledgeBaseSidebar() {
  const container = document.getElementById("docListContainer");
  if (!container) return;

  container.innerHTML = customKnowledgeBase.map(doc => `
    <div class="doc-item" onclick="inspectDoc('${doc.id}')">
      <div class="doc-info">
        <span class="doc-icon">📄</span>
        <div>
          <div class="doc-name">${doc.docName}</div>
          <div class="doc-pages">Page ${doc.page} • ${doc.category}</div>
        </div>
      </div>
      <span class="badge-rag">RAG</span>
    </div>
  `).join("");
}

// Event Listeners
function setupEventListeners() {
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const themeBtn = document.getElementById("themeToggleBtn");
  const exportBtn = document.getElementById("exportChatBtn");
  const clearBtn = document.getElementById("clearChatBtn");
  const openDocsBtn = document.getElementById("openDocsBtn");
  const closeDocsBtn = document.getElementById("closeDocsBtn");

  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  
  if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    });
  }

  if (sendBtn) sendBtn.addEventListener("click", handleSendMessage);
  if (exportBtn) exportBtn.addEventListener("click", exportChatTranscript);
  if (clearBtn) clearBtn.addEventListener("click", clearChatHistory);

  if (openDocsBtn) {
    openDocsBtn.addEventListener("click", () => {
      document.getElementById("docsModal").classList.add("active");
      renderModalChunkView();
    });
  }

  if (closeDocsBtn) {
    closeDocsBtn.addEventListener("click", () => {
      document.getElementById("docsModal").classList.remove("active");
    });
  }
}

function fillPrompt(text) {
  const input = document.getElementById("chatInput");
  if (input) {
    input.value = text;
    input.focus();
  }
}

// Inspect specific document in modal
function inspectDoc(docId) {
  const doc = customKnowledgeBase.find(d => d.id === docId);
  if (!doc) return;
  alert(`📄 [RAG Document Chunk]\nDocument: ${doc.docName} (Page ${doc.page})\nCategory: ${doc.category}\nDate: ${doc.date}\n\nContent:\n${doc.content}`);
}

// Handle User Message
function handleSendMessage() {
  const input = document.getElementById("chatInput");
  if (!input) return;
  const query = input.value.trim();
  if (!query) return;

  input.value = "";
  addUserMessage(query);
  processRAGQuery(query);
}

// Add User Message to UI
function addUserMessage(text) {
  const welcomeCard = document.getElementById("welcomeCard");
  if (welcomeCard) welcomeCard.style.display = "none";

  const chatContainer = document.getElementById("chatMessages");
  const msgRow = document.createElement("div");
  msgRow.className = "message-row user";
  msgRow.innerHTML = `
    <div class="avatar user-avatar">🎓</div>
    <div class="message-bubble">${escapeHtml(text)}</div>
  `;
  chatContainer.appendChild(msgRow);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  chatHistory.push({ role: "user", text, timestamp: new Date().toISOString() });
  saveChatToLocalStorage();
}

// Process RAG Query
function processRAGQuery(query) {
  const lowerQuery = query.toLowerCase().trim();
  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();

    // 1. Ambiguity check for single word or vague queries
    const words = lowerQuery.split(/\s+/);
    if (words.length <= 2) {
      const ambMatch = AMBIGUOUS_TRIGGERS.find(a => lowerQuery.includes(a.keyword));
      if (ambMatch) {
        renderAmbiguityClarification(ambMatch.clarification);
        return;
      }
    }

    // 2. Vector / Keyword Ranking Retrieval over RAG Knowledge Base
    const matches = customKnowledgeBase.map(doc => {
      let score = 0;
      doc.keywords.forEach(kw => {
        if (lowerQuery.includes(kw)) score += 3;
      });
      // Word overlap score
      words.forEach(w => {
        if (w.length > 3 && doc.content.toLowerCase().includes(w)) score += 1;
      });
      return { doc, score };
    }).filter(m => m.score > 0)
      .sort((a, b) => b.score - a.score);

    if (matches.length === 0) {
      renderUnknownFallback();
      return;
    }

    // Pick top matched document
    // If multiple documents match, prefer newest date if version available
    let topMatch = matches[0].doc;
    if (matches.length > 1 && matches[1].score === matches[0].score) {
      if (new Date(matches[1].doc.date) > new Date(matches[0].doc.date)) {
        topMatch = matches[1].doc;
      }
    }

    renderRAGStructuredResponse(topMatch);
  }, 700);
}

// Ambiguity Clarification Response
function renderAmbiguityClarification(questionText) {
  const chatContainer = document.getElementById("chatMessages");
  const msgRow = document.createElement("div");
  msgRow.className = "message-row bot";
  
  msgRow.innerHTML = `
    <div class="avatar bot-avatar">🏛️</div>
    <div class="message-bubble">
      <div style="font-weight: 600; margin-bottom: 6px;">CollegeAssist AI Clarification:</div>
      <p>${questionText}</p>
    </div>
  `;

  chatContainer.appendChild(msgRow);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  chatHistory.push({ role: "bot", text: questionText, timestamp: new Date().toISOString() });
  saveChatToLocalStorage();
}

// Unknown Information Fallback (Strict rule)
function renderUnknownFallback() {
  const chatContainer = document.getElementById("chatMessages");
  const msgRow = document.createElement("div");
  msgRow.className = "message-row bot";

  msgRow.innerHTML = `
    <div class="avatar bot-avatar">🏛️</div>
    <div class="message-bubble">
      <div class="rag-response-format">
        <div class="rag-section fallback-section">
          <div class="rag-section-title">
            <span>ℹ️</span> Document Search Result:
          </div>
          <div class="rag-section-content">
            ${UNKNOWN_INFO_FALLBACK}
          </div>
        </div>
      </div>
    </div>
  `;

  chatContainer.appendChild(msgRow);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  chatHistory.push({ role: "bot", text: UNKNOWN_INFO_FALLBACK, timestamp: new Date().toISOString() });
  saveChatToLocalStorage();
}

// Render RAG Structured Response (Answer, Details, Source)
function renderRAGStructuredResponse(doc) {
  const chatContainer = document.getElementById("chatMessages");
  const msgRow = document.createElement("div");
  msgRow.className = "message-row bot";

  const msgId = "msg-" + Date.now();

  msgRow.innerHTML = `
    <div class="avatar bot-avatar">🏛️</div>
    <div class="message-bubble" id="${msgId}">
      <div class="rag-response-format">
        
        <!-- Answer -->
        <div class="rag-section">
          <div class="rag-section-title">
            <span>💡</span> Answer:
          </div>
          <div class="rag-section-content">
            ${doc.answer}
          </div>
        </div>

        <!-- Details -->
        <div class="rag-section">
          <div class="rag-section-title">
            <span>📋</span> Details:
          </div>
          <div class="rag-section-content">
            <ul>
              ${doc.details.map(d => `<li>${d}</li>`).join("")}
            </ul>
          </div>
        </div>

        <!-- Source -->
        <div class="rag-section source-section">
          <div class="rag-section-title">
            <span>📄</span> Source:
          </div>
          <div class="rag-section-content">
            <span class="source-badge-tag">
              📌 ${doc.docName}, Page ${doc.page} (Updated: ${doc.date})
            </span>
          </div>
        </div>

      </div>

      <!-- Action Buttons -->
      <div class="message-actions">
        <button class="msg-action-btn" onclick="speakMessage('${msgId}')">
          🔊 Read Aloud
        </button>
        <button class="msg-action-btn" onclick="copyMessageText('${msgId}')">
          📋 Copy Text
        </button>
      </div>
    </div>
  `;

  chatContainer.appendChild(msgRow);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  chatHistory.push({
    role: "bot",
    doc,
    timestamp: new Date().toISOString()
  });
  saveChatToLocalStorage();
}

// Typing Indicator
function showTypingIndicator() {
  const chatContainer = document.getElementById("chatMessages");
  const indicator = document.createElement("div");
  indicator.id = "typingIndicator";
  indicator.className = "message-row bot";
  indicator.innerHTML = `
    <div class="avatar bot-avatar">🏛️</div>
    <div class="message-bubble" style="padding: 10px 16px;">
      <div class="typing-dots">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  chatContainer.appendChild(indicator);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById("typingIndicator");
  if (indicator) indicator.remove();
}

// Document Uploading Ingestion in Modal
function renderModalChunkView() {
  const container = document.getElementById("modalChunkContainer");
  if (!container) return;

  container.innerHTML = customKnowledgeBase.map(d => `
    <div class="chunk-card">
      <div class="chunk-meta">
        <span>📄 ${d.docName} (Page ${d.page})</span>
        <span class="badge-rag">${d.category}</span>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-muted);">${d.content}</div>
    </div>
  `).join("");
}

function handleCustomDocUpload() {
  const title = prompt("Enter Document Title (e.g. Library Rules 2026):");
  if (!title) return;
  const content = prompt("Enter Document Content text:");
  if (!content) return;

  const newDoc = {
    id: "custom_" + Date.now(),
    docName: title,
    page: 1,
    date: new Date().toISOString().split("T")[0],
    category: "Custom Notice",
    keywords: title.toLowerCase().split(/\s+/).concat(["notice", "rules"]),
    content: content,
    answer: `According to ${title}, ${content.slice(0, 100)}...`,
    details: [content]
  };

  customKnowledgeBase.unshift(newDoc);
  renderKnowledgeBaseSidebar();
  renderModalChunkView();
  alert(`Document "${title}" successfully ingested into RAG knowledge base!`);
}

// Text-to-Speech
function speakMessage(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const textToRead = el.innerText.replace(/Read Aloud|Copy Text/g, "");
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
}

function copyMessageText(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const cleanText = el.innerText.replace(/Read Aloud|Copy Text/g, "");
  navigator.clipboard.writeText(cleanText).then(() => alert("Copied to clipboard!"));
}

// Local Storage
function saveChatToLocalStorage() {
  try {
    localStorage.setItem("collegeassist_chat_history", JSON.stringify(chatHistory));
  } catch (e) {}
}

function loadSavedChat() {
  try {
    const saved = localStorage.getItem("collegeassist_chat_history");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const welcomeCard = document.getElementById("welcomeCard");
        if (welcomeCard) welcomeCard.style.display = "none";
        
        parsed.forEach(item => {
          if (item.role === "user") {
            const chatContainer = document.getElementById("chatMessages");
            const msgRow = document.createElement("div");
            msgRow.className = "message-row user";
            msgRow.innerHTML = `
              <div class="avatar user-avatar">🎓</div>
              <div class="message-bubble">${escapeHtml(item.text)}</div>
            `;
            chatContainer.appendChild(msgRow);
          } else if (item.role === "bot" && item.doc) {
            renderRAGStructuredResponse(item.doc);
          }
        });
      }
    }
  } catch (e) {}
}

function clearChatHistory() {
  if (confirm("Clear CollegeAssist AI conversation history?")) {
    chatHistory = [];
    localStorage.removeItem("collegeassist_chat_history");
    location.reload();
  }
}

function exportChatTranscript() {
  if (chatHistory.length === 0) {
    alert("No chat transcript to export.");
    return;
  }

  let markdown = `# CollegeAssist AI - RAG Conversation Transcript\n`;
  markdown += `Generated: ${new Date().toLocaleString()}\n\n---\n\n`;

  chatHistory.forEach(item => {
    if (item.role === "user") {
      markdown += `### Student / User:\n${item.text}\n\n`;
    } else if (item.role === "bot" && item.doc) {
      markdown += `### CollegeAssist AI:\n**Answer:**\n${item.doc.answer}\n\n**Details:**\n${item.doc.details.map(d=>`- ${d}`).join("\n")}\n\n**Source:** ${item.doc.docName}, Page ${item.doc.page}\n\n---\n\n`;
    }
  });

  const blob = new Blob([markdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `CollegeAssist_RAG_Transcript_${Date.now()}.md`;
  a.click();
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}
