/**
 * HealthEduBot - AI-Powered Health Education Assistant
 * Adheres strictly to HealthEduBot System Prompt Rules & Response Specifications.
 */

// Health Education Knowledge Repository
const HEALTH_KNOWLEDGE = [
  {
    id: "diabetes",
    keywords: ["diabetes", "sugar", "blood sugar", "glucose", "insulin", "type 1", "type 2", "hyperglycemia"],
    title: "Diabetes Mellitus",
    category: "Chronic Conditions",
    icon: "🩸",
    whatItIs: "Diabetes is a chronic metabolic condition in which blood glucose (blood sugar) levels become too high because the body either does not produce enough insulin, cannot use insulin effectively, or both.",
    symptoms: [
      "Increased thirst (polydipsia) and frequent urination (polyuria)",
      "Unexplained weight loss and constant hunger",
      "Fatigue and extreme tiredness",
      "Blurred vision",
      "Slow-healing cuts or frequent infections",
      "Tingling or numbness in hands or feet"
    ],
    causes: [
      "Type 1: Autoimmune response destroying insulin-producing beta cells in the pancreas.",
      "Type 2: Insulin resistance linked to genetics, lifestyle, physical inactivity, and excess weight.",
      "Gestational Diabetes: Hormonal changes during pregnancy causing temporary insulin resistance."
    ],
    prevention: [
      "Maintain a balanced diet rich in whole grains, fiber, lean proteins, and low in refined sugars.",
      "Engage in regular physical exercise (at least 150 minutes of moderate activity weekly).",
      "Maintain a healthy body weight and monitor blood pressure and lipid levels.",
      "Avoid tobacco smoking and limit excessive alcohol intake."
    ],
    seekHelp: [
      "Experiencing symptoms of extremely high blood sugar (confusion, rapid breathing, fruity breath odor).",
      "Experiencing low blood sugar episodes (shakiness, cold sweat, dizziness).",
      "Have persistent unhealed sores or leg pain.",
      "Desire routine screening for diabetes risk factors."
    ]
  },
  {
    id: "hypertension",
    keywords: ["hypertension", "high blood pressure", "bp", "systolic", "diastolic", "pressure"],
    title: "Hypertension (High Blood Pressure)",
    category: "Cardiovascular Health",
    icon: "❤️",
    whatItIs: "Hypertension is a common medical condition where the long-term force of blood against your artery walls is consistently too high, putting increased strain on your heart and blood vessels.",
    symptoms: [
      "Often called a 'silent killer' because it usually has no obvious symptoms.",
      "In severe cases: Headaches, shortness of breath, nosebleeds, or dizziness may occur."
    ],
    causes: [
      "Primary (essential) hypertension: Develops gradually over time with no single identifiable cause.",
      "Secondary hypertension: Caused by underlying conditions like kidney disease, thyroid disorders, or medication side effects.",
      "Contributing factors include high sodium diet, stress, obesity, lack of exercise, and family history."
    ],
    prevention: [
      "Adopt a heart-healthy diet (such as the DASH diet) low in sodium and rich in potassium.",
      "Maintain regular physical aerobic exercise.",
      "Manage stress through mindfulness, adequate sleep, and relaxation techniques.",
      "Limit alcohol consumption and refrain from smoking."
    ],
    seekHelp: [
      "Severe headache accompanied by chest pain, vision changes, or confusion (seek emergency care).",
      "Routine blood pressure readings consistently exceed 130/80 mmHg.",
      "Side effects experienced from blood pressure management routine."
    ]
  },
  {
    id: "sleep_hygiene",
    keywords: ["sleep", "insomnia", "tired", "rest", "circadian", "sleep hygiene", "sleeping"],
    title: "Sleep Hygiene & Quality Rest",
    category: "Wellness & Lifestyle",
    icon: "🌙",
    whatItIs: "Sleep hygiene refers to safe, evidence-based behavioral practices and environmental habits that foster consistent, high-quality, restorative sleep necessary for physical and cognitive health.",
    symptoms: [
      "Difficulty falling asleep or staying asleep through the night",
      "Waking up feeling unrefreshed or exhausted during the day",
      "Daytime drowsiness, brain fog, or irritability"
    ],
    causes: [
      "Irregular sleep schedule and shift work",
      "Excessive exposure to blue light from screens before bedtime",
      "Caffeine, heavy meals, or alcohol close to bedtime",
      "High stress levels, anxiety, or noisy environment"
    ],
    prevention: [
      "Maintain a consistent sleep and wake-up schedule, even on weekends.",
      "Create a dark, quiet, cool, and comfortable bedroom environment.",
      "Avoid screens (phones, tablets, TV) for 30–60 minutes before bed.",
      "Limit caffeine intake in the afternoon and evening hours."
    ],
    seekHelp: [
      "Chronic insomnia lasting longer than 3–4 weeks.",
      "Loud snoring accompanied by gasping or pauses in breathing during sleep (possible sleep apnea).",
      "Excessive daytime sleepiness interfering with safe driving or daily activities."
    ]
  },
  {
    id: "first_aid_burns",
    keywords: ["burn", "burns", "scald", "heat burn", "fire", "hot water", "first aid burn"],
    title: "First Aid for Minor Thermal Burns",
    category: "Basic First Aid",
    icon: "🩹",
    whatItIs: "First aid for minor burns involves immediate basic care for first-degree and mild second-degree burns affecting only the outer layer of skin (epidermis).",
    symptoms: [
      "Redness and localized mild swelling",
      "Pain or tenderness at the burn site",
      "Small fluid-filled blisters (in minor second-degree burns)"
    ],
    causes: [
      "Contact with hot liquids or steam (scalding)",
      "Direct contact with hot objects (irons, stoves, pots)",
      "Sunburn or mild electrical contact"
    ],
    prevention: [
      "Cool the burn immediately under cool running tap water for 10–15 minutes. (Do NOT use ice).",
      "Apply a clean, non-stick sterile bandage or dry cloth lightly over the area.",
      "Do NOT pop blisters or apply butter, oil, or toothpaste to the wound.",
      "Keep the area clean and hydrated with pure aloe vera or petroleum jelly if skin is intact."
    ],
    seekHelp: [
      "Burn covers a large area (larger than the palm of your hand) or involves the face, hands, feet, major joints, or groin.",
      "Burn is charred black, white, or leathery (3rd-degree burn - emergency).",
      "Signs of infection develop: increased redness, swelling, pus, or fever."
    ]
  },
  {
    id: "nutrition_basics",
    keywords: ["nutrition", "diet", "food", "vitamins", "minerals", "calories", "protein", "eating"],
    title: "Balanced Nutrition & Healthy Eating",
    category: "Nutrition",
    icon: "🥗",
    whatItIs: "Balanced nutrition involves consuming a diverse variety of nutrient-dense foods to provide the body with essential macronutrients (carbohydrates, proteins, fats) and micronutrients (vitamins and minerals).",
    symptoms: [
      "Poor nutrition can cause fatigue, weak immunity, hair thinning, digestive distress, or low mood."
    ],
    causes: [
      "Diets high in ultra-processed foods, added sugars, and saturated fats.",
      "Lack of fresh vegetables, fruits, whole grains, and lean protein sources."
    ],
    prevention: [
      "Fill half your plate with colorful vegetables and fruits.",
      "Choose whole grains (brown rice, oats, quinoa) over refined grains.",
      "Include lean protein sources (beans, lentils, fish, poultry, tofu).",
      "Stay hydrated by drinking plenty of water throughout the day."
    ],
    seekHelp: [
      "Experiencing unexplained severe weight loss or weight gain.",
      "Digestive issues lasting several weeks.",
      "Need personalized dietary plans for medical conditions like renal or celiac disease."
    ]
  },
  {
    id: "headache",
    keywords: ["headache", "migraine", "tension headache", "head pain", "temples"],
    title: "Headaches & Tension Relief",
    category: "Common Ailments",
    icon: "🧠",
    whatItIs: "Headaches involve pain or discomfort in the head or scalp region. Most common headaches are primary headaches, such as tension headaches or migraines.",
    symptoms: [
      "Dull, aching pain around the forehead or back of head (tension headache)",
      "Throbbing pain on one or both sides of the head (migraine)",
      "Sensitivity to light, sound, or nausea during severe episodes"
    ],
    causes: [
      "Dehydration, hunger, or muscle tension in the neck and shoulders.",
      "Lack of sleep, eye strain from screens, or stress.",
      "Hormonal fluctuations or environmental triggers (bright light, loud noise)."
    ],
    prevention: [
      "Stay well-hydrated throughout the day.",
      "Practice good screen ergonomics and take regular eye breaks (20-20-20 rule).",
      "Maintain a regular sleep schedule and eat consistent meals.",
      "Apply cool or warm compresses to the forehead or neck area."
    ],
    seekHelp: [
      "Sudden, extremely severe headache ('thunderclap headache') - Seek immediate emergency medical care.",
      "Headache following a head injury or accompanied by fever, stiff neck, confusion, or weakness.",
      "Headaches that progressively worsen over days or change in character."
    ]
  },
  {
    id: "cold_vs_flu",
    keywords: ["cold", "flu", "influenza", "fever", "runny nose", "cough", "sneezing", "virus"],
    title: "Common Cold vs. Influenza (Flu)",
    category: "Infectious Diseases",
    icon: "🤧",
    whatItIs: "Both common colds and the flu are contagious respiratory illnesses caused by viruses, but flu is caused by influenza viruses and is generally more intense.",
    symptoms: [
      "Cold: Gradual onset, runny/stuffy nose, mild sore throat, sneezing, mild cough.",
      "Flu: Abrupt onset, high fever, severe body aches, chills, extreme fatigue, dry cough."
    ],
    causes: [
      "Rhino viruses and other respiratory viruses cause common colds.",
      "Influenza A and B viruses cause seasonal flu.",
      "Spreads through airborne droplets or contact with contaminated surfaces."
    ],
    prevention: [
      "Wash hands frequently with soap and water for at least 20 seconds.",
      "Get an annual seasonal flu vaccination.",
      "Cover coughs and sneezes with an elbow or tissue.",
      "Stay home when feeling unwell to prevent spreading illness to others."
    ],
    seekHelp: [
      "Difficulty breathing or shortness of breath.",
      "Persistent high fever that does not respond to cooling measures.",
      "Symptoms that improve but then return with worse fever and cough.",
      "Symptoms in high-risk individuals (infants, elderly, immunocompromised)."
    ]
  }
];

// Emergency Red-Flag Keywords
const EMERGENCY_KEYWORDS = [
  "chest pain", "severe chest pressure", "shortness of breath", "can't breathe", "cannot breathe",
  "difficulty breathing", "unconscious", "passed out", "fainted", "severe bleeding", "heavy bleeding",
  "stroke", "facial drooping", "arm weakness", "slurred speech", "seizure", "seizures", "convulsions",
  "choking", "poison", "poisoning", "suicide", "self-harm", "anaphylaxis", "severe allergic reaction"
];

// Medication Prescription Trigger Keywords
const PRESCRIPTION_KEYWORDS = [
  "prescribe", "what antibiotic", "what medication should i take", "dose", "dosage", 
  "what medicine to take", "give me a prescription", "how many pills"
];

// Diagnosis Seeking Trigger Keywords
const DIAGNOSIS_KEYWORDS = [
  "diagnose me", "do i have cancer", "tell me if i have", "do i definitely have", "is this definitely"
];

// State variables
let chatHistory = [];
let currentTheme = localStorage.getItem("theme") || "light";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderPresetTopics();
  renderTopicExplorer();
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
    iconBtn.setAttribute("title", currentTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode");
  }
}

// Preset Topics in Sidebar
function renderPresetTopics() {
  const container = document.getElementById("presetTopicsContainer");
  if (!container) return;

  container.innerHTML = HEALTH_KNOWLEDGE.map(topic => `
    <button class="topic-btn" onclick="selectTopic('${topic.id}')">
      <span class="topic-icon">${topic.icon}</span>
      <span>${topic.title}</span>
    </button>
  `).join("");
}

// Topic Explorer Modal List
function renderTopicExplorer(filter = "") {
  const container = document.getElementById("topicGridContainer");
  if (!container) return;

  const filtered = HEALTH_KNOWLEDGE.filter(t => 
    t.title.toLowerCase().includes(filter.toLowerCase()) || 
    t.category.toLowerCase().includes(filter.toLowerCase()) ||
    t.whatItIs.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No health topics found matching "${filter}".</p>`;
    return;
  }

  container.innerHTML = filtered.map(t => `
    <div class="topic-card-item" onclick="selectTopic('${t.id}')">
      <div class="topic-card-tag">${t.category}</div>
      <div style="font-weight: 700; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
        <span>${t.icon}</span> ${t.title}
      </div>
      <div style="font-size: 0.8rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
        ${t.whatItIs}
      </div>
    </div>
  `).join("");
}

// Setup Event Listeners
function setupEventListeners() {
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const themeBtn = document.getElementById("themeToggleBtn");
  const exportBtn = document.getElementById("exportChatBtn");
  const clearBtn = document.getElementById("clearChatBtn");
  const explorerBtn = document.getElementById("openExplorerBtn");
  const closeExplorerBtn = document.getElementById("closeExplorerBtn");
  const searchInput = document.getElementById("topicSearchInput");

  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  
  if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
      checkEmergencyInput(chatInput.value);
    });

    chatInput.addEventListener("input", () => {
      checkEmergencyInput(chatInput.value);
    });
  }

  if (sendBtn) sendBtn.addEventListener("click", handleSendMessage);
  if (exportBtn) exportBtn.addEventListener("click", exportChatTranscript);
  if (clearBtn) clearBtn.addEventListener("click", clearChatHistory);
  
  if (explorerBtn) {
    explorerBtn.addEventListener("click", () => {
      document.getElementById("explorerModal").classList.add("active");
    });
  }

  if (closeExplorerBtn) {
    closeExplorerBtn.addEventListener("click", () => {
      document.getElementById("explorerModal").classList.remove("active");
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => renderTopicExplorer(e.target.value));
  }
}

// Check live emergency typing keywords
function checkEmergencyInput(text) {
  const lower = text.toLowerCase();
  const isEmergency = EMERGENCY_KEYWORDS.some(kw => lower.includes(kw));
  const banner = document.getElementById("emergencyBanner");
  if (banner) {
    if (isEmergency) {
      banner.classList.add("active");
    } else if (lower.trim() === "") {
      banner.classList.remove("active");
    }
  }
}

function dismissEmergencyBanner() {
  const banner = document.getElementById("emergencyBanner");
  if (banner) banner.classList.remove("active");
}

// Topic Selection
function selectTopic(topicId) {
  const topic = HEALTH_KNOWLEDGE.find(t => t.id === topicId);
  if (!topic) return;

  const modal = document.getElementById("explorerModal");
  if (modal) modal.classList.remove("active");

  const query = `What is ${topic.title.toLowerCase()}?`;
  addUserMessage(query);
  generateStructuredBotResponse(query, topic);
}

function fillPrompt(text) {
  const input = document.getElementById("chatInput");
  if (input) {
    input.value = text;
    input.focus();
    checkEmergencyInput(text);
  }
}

// Handle User Input Submission
function handleSendMessage() {
  const input = document.getElementById("chatInput");
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) return;

  input.value = "";
  addUserMessage(userText);
  processUserInput(userText);
}

// Add User Message to UI
function addUserMessage(text) {
  const welcomeCard = document.getElementById("welcomeCard");
  if (welcomeCard) welcomeCard.style.display = "none";

  const chatContainer = document.getElementById("chatMessages");
  const msgRow = document.createElement("div");
  msgRow.className = "message-row user";
  msgRow.innerHTML = `
    <div class="avatar user-avatar">👤</div>
    <div class="message-bubble">${escapeHtml(text)}</div>
  `;
  chatContainer.appendChild(msgRow);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  chatHistory.push({ role: "user", text, timestamp: new Date().toISOString() });
  saveChatToLocalStorage();
}

// Process User Query adhering to System Prompt Rules
function processUserInput(userText) {
  const lowerText = userText.toLowerCase();
  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();

    // 1. Check Emergency First
    const hasEmergency = EMERGENCY_KEYWORDS.some(kw => lowerText.includes(kw));
    if (hasEmergency) {
      triggerEmergencyResponse(userText);
      return;
    }

    // 2. Check Prescription / Medication request
    const isPrescriptionReq = PRESCRIPTION_KEYWORDS.some(kw => lowerText.includes(kw));
    if (isPrescriptionReq) {
      triggerPrescriptionSafetyResponse(userText);
      return;
    }

    // 3. Check Diagnosis seeking request
    const isDiagnosisReq = DIAGNOSIS_KEYWORDS.some(kw => lowerText.includes(kw));
    if (isDiagnosisReq) {
      triggerDiagnosisSafetyResponse(userText);
      return;
    }

    // 4. Topic Matching or General Educational Response
    const matchedTopic = HEALTH_KNOWLEDGE.find(t => 
      t.keywords.some(kw => lowerText.includes(kw))
    );

    if (matchedTopic) {
      generateStructuredBotResponse(userText, matchedTopic);
    } else {
      generateGeneralHealthResponse(userText);
    }
  }, 750);
}

// Emergency Response Generator
function triggerEmergencyResponse(userText) {
  const responseData = {
    title: "EMERGENCY MEDICAL WARNING",
    isEmergency: true,
    whatItIs: "Based on the symptoms mentioned (such as chest pain, breathing difficulty, or severe distress), this may indicate a critical medical emergency.",
    symptoms: [
      "Severe chest pain or pressure spreading to arms, neck, or jaw",
      "Sudden difficulty breathing or inability to catch breath",
      "Sudden weakness, numbness, or loss of speech/consciousness",
      "Severe uncontrolled bleeding or traumatic injury"
    ],
    causes: [
      "Emergency symptoms require immediate medical evaluation by emergency physicians to determine the cause (e.g., cardiac event, respiratory distress, acute stroke)."
    ],
    prevention: [
      "Do NOT wait or attempt self-treatment.",
      "Call your local emergency services (e.g., 911, 112, or 999) immediately.",
      "If you are alone, unlock the front door and inform a family member or neighbor."
    ],
    seekHelp: [
      "IMMEDIATE EMERGENCY CARE REQUIRED. Contact emergency medical services without delay."
    ]
  };

  renderBotStructuredMessage(responseData);
  
  // Also show top banner
  const banner = document.getElementById("emergencyBanner");
  if (banner) banner.classList.add("active");
}

// Prescription Safety Refusal Generator
function triggerPrescriptionSafetyResponse(userText) {
  const responseData = {
    title: "Medication & Prescription Information Notice",
    whatItIs: "HealthEduBot provides general health educational information only and CANNOT prescribe medications, recommend dosages, or change prescribed treatments.",
    symptoms: [
      "Prescription medications (such as antibiotics, blood pressure drugs, or pain relievers) require individual medical evaluation."
    ],
    causes: [
      "Medication suitability depends on your exact diagnosis, medical history, allergies, kidney/liver function, and potential drug interactions."
    ],
    prevention: [
      "Always consult a licensed pharmacist or prescribing physician before starting, stopping, or altering any medication.",
      "Keep an updated list of all medications and supplements you take.",
      "Store medications safely as directed on package labels."
    ],
    seekHelp: [
      "Speak with a doctor or registered pharmacist to receive prescription recommendations tailored to your medical history."
    ]
  };

  renderBotStructuredMessage(responseData);
}

// Diagnosis Safety Refusal Generator
function triggerDiagnosisSafetyResponse(userText) {
  const responseData = {
    title: "Medical Assessment & Diagnosis Guidelines",
    whatItIs: "HealthEduBot is an educational tool and does NOT diagnose diseases or give definitive medical diagnoses based on reported symptoms.",
    symptoms: [
      "Many symptoms can overlap across multiple benign or significant health conditions."
    ],
    causes: [
      "A proper diagnosis requires clinical examination, physical assessment, lab tests, or diagnostic imaging performed by a qualified doctor."
    ],
    prevention: [
      "Keep a log of when your symptoms started, their severity, and what makes them better or worse.",
      "Prepare questions to discuss during your doctor's appointment."
    ],
    seekHelp: [
      "Schedule a consultation with a qualified primary care physician or specialist for personalized medical diagnosis."
    ]
  };

  renderBotStructuredMessage(responseData);
}

// Generate Structured Bot Response using matched topic
function generateStructuredBotResponse(userText, topic) {
  renderBotStructuredMessage(topic);
}

// General Health Educational Fallback (Synthesizer adhering strictly to prompt structure)
function generateGeneralHealthResponse(userText) {
  const topicTitle = userText.charAt(0).toUpperCase() + userText.slice(1);
  const responseData = {
    title: topicTitle,
    whatItIs: `HealthEduBot general education overview for: "${escapeHtml(userText)}". This refers to a general wellness or body query topic.`,
    symptoms: [
      "Symptoms can vary significantly depending on individual baseline health, age, and underlying factors.",
      "Common indicators may include mild discomfort, fatigue, or localized changes."
    ],
    causes: [
      "There are several possible causes for these health observations, ranging from minor lifestyle factors (diet, hydration, stress) to specific medical conditions.",
      "A healthcare professional can evaluate these factors properly."
    ],
    prevention: [
      "Maintain safe, evidence-based healthy habits: balanced nutrition, adequate sleep (7–9 hours), regular physical exercise, and stress management.",
      "Stay hydrated and maintain routine health checkups with your doctor."
    ],
    seekHelp: [
      "Consult a qualified doctor if symptoms are persistent, severe, or interfere with daily activities.",
      "Seek emergency care if symptoms occur suddenly with severe pain, high fever, or breathing difficulty."
    ]
  };

  renderBotStructuredMessage(responseData);
}

// Render Structured Message to UI adhering to Recommended Response Structure
function renderBotStructuredMessage(data) {
  const chatContainer = document.getElementById("chatMessages");
  const msgRow = document.createElement("div");
  msgRow.className = "message-row bot";

  const msgId = "msg-" + Date.now();

  const isEmergency = data.isEmergency;

  msgRow.innerHTML = `
    <div class="avatar bot-avatar">🩺</div>
    <div class="message-bubble" id="${msgId}">
      <div class="structured-response">
        
        <!-- What it is -->
        <div class="response-section ${isEmergency ? 'emergency-sec' : ''}">
          <div class="section-header">
            <span>📌</span> What it is:
          </div>
          <div class="section-body">${data.whatItIs}</div>
        </div>

        <!-- Common symptoms -->
        <div class="response-section">
          <div class="section-header">
            <span>🩺</span> Common symptoms:
          </div>
          <div class="section-body">
            <ul>
              ${data.symptoms.map(s => `<li>${s}</li>`).join("")}
            </ul>
          </div>
        </div>

        <!-- Possible causes -->
        <div class="response-section">
          <div class="section-header">
            <span>🔍</span> Possible causes:
          </div>
          <div class="section-body">
            <ul>
              ${data.causes.map(c => `<li>${c}</li>`).join("")}
            </ul>
          </div>
        </div>

        <!-- Prevention / Healthy habits -->
        <div class="response-section">
          <div class="section-header">
            <span>🌿</span> Prevention / Healthy habits:
          </div>
          <div class="section-body">
            <ul>
              ${data.prevention.map(p => `<li>${p}</li>`).join("")}
            </ul>
          </div>
        </div>

        <!-- When to seek medical help -->
        <div class="response-section ${isEmergency ? 'emergency-sec' : 'warning-sec'}">
          <div class="section-header">
            <span>🚨</span> When to seek medical help:
          </div>
          <div class="section-body">
            <ul>
              ${data.seekHelp.map(h => `<li>${h}</li>`).join("")}
            </ul>
          </div>
        </div>

        <!-- Important Disclaimer -->
        <div class="disclaimer-box">
          <span class="disclaimer-icon">⚠️</span>
          <div>
            <strong>Important:</strong> This chatbot provides general health education and cannot diagnose or treat medical conditions. Always consult a qualified doctor or healthcare professional for personalized medical advice.
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
    data,
    timestamp: new Date().toISOString()
  });
  saveChatToLocalStorage();
}

// Typing Indicator UI
function showTypingIndicator() {
  const chatContainer = document.getElementById("chatMessages");
  const indicator = document.createElement("div");
  indicator.id = "typingIndicator";
  indicator.className = "message-row bot";
  indicator.innerHTML = `
    <div class="avatar bot-avatar">🩺</div>
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

// Speech Synthesis (Text-to-Speech)
function speakMessage(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // stop current reading
    const textToRead = el.innerText.replace(/Read Aloud|Copy Text/g, "");
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Speech Synthesis is not supported in your browser.");
  }
}

// Copy Message Text
function copyMessageText(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const cleanText = el.innerText.replace(/Read Aloud|Copy Text/g, "");
  navigator.clipboard.writeText(cleanText).then(() => {
    alert("Response copied to clipboard!");
  });
}

// Local Storage & Chat Persistence
function saveChatToLocalStorage() {
  try {
    localStorage.setItem("healthedu_chat_history", JSON.stringify(chatHistory));
  } catch (e) {
    console.error("Failed to save chat to local storage", e);
  }
}

function loadSavedChat() {
  try {
    const saved = localStorage.getItem("healthedu_chat_history");
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
              <div class="avatar user-avatar">👤</div>
              <div class="message-bubble">${escapeHtml(item.text)}</div>
            `;
            chatContainer.appendChild(msgRow);
          } else if (item.role === "bot" && item.data) {
            renderBotStructuredMessage(item.data);
          }
        });
      }
    }
  } catch (e) {
    console.error("Failed to load chat history", e);
  }
}

function clearChatHistory() {
  if (confirm("Are you sure you want to clear your health conversation history?")) {
    chatHistory = [];
    localStorage.removeItem("healthedu_chat_history");
    const chatContainer = document.getElementById("chatMessages");
    chatContainer.innerHTML = `
      <div class="welcome-card" id="welcomeCard">
        <h2 class="welcome-title">Welcome to HealthEduBot 🩺</h2>
        <p class="welcome-desc">Your trusted AI health education assistant. Ask about conditions, wellness, nutrition, first aid, or common symptoms.</p>
        <div class="disclaimer-pill">
          <span>⚠️</span> Educational purpose only. Not a substitute for professional medical diagnosis or treatment.
        </div>
        <div class="quick-prompts-grid">
          <div class="prompt-card" onclick="fillPrompt('What is diabetes?')">
            <span class="prompt-card-icon">🩸</span>
            <span class="prompt-card-title">What is diabetes?</span>
            <span class="prompt-card-subtitle">Symptoms, causes & prevention</span>
          </div>
          <div class="prompt-card" onclick="fillPrompt('How to improve sleep hygiene?')">
            <span class="prompt-card-icon">🌙</span>
            <span class="prompt-card-title">Sleep Hygiene</span>
            <span class="prompt-card-subtitle">Habits for restful sleep</span>
          </div>
          <div class="prompt-card" onclick="fillPrompt('First aid for minor thermal burns')">
            <span class="prompt-card-icon">🩹</span>
            <span class="prompt-card-title">First Aid for Burns</span>
            <span class="prompt-card-subtitle">Immediate burn care</span>
          </div>
          <div class="prompt-card" onclick="fillPrompt('Common Cold vs Flu symptoms')">
            <span class="prompt-card-icon">🤧</span>
            <span class="prompt-card-title">Cold vs. Flu</span>
            <span class="prompt-card-subtitle">Key differences & advice</span>
          </div>
        </div>
      </div>
    `;
    dismissEmergencyBanner();
  }
}

// Export Chat Transcript to File Download
function exportChatTranscript() {
  if (chatHistory.length === 0) {
    alert("No chat messages to export.");
    return;
  }

  let markdown = `# HealthEduBot - Educational Health Conversation Transcript\n`;
  markdown += `Date: ${new Date().toLocaleString()}\n`;
  markdown += `Disclaimer: Information provided is for educational purposes only and does not replace medical advice.\n\n---\n\n`;

  chatHistory.forEach(item => {
    if (item.role === "user") {
      markdown += `### User:\n${item.text}\n\n`;
    } else if (item.role === "bot" && item.data) {
      const d = item.data;
      markdown += `### HealthEduBot:\n`;
      markdown += `**What it is:**\n${d.whatItIs}\n\n`;
      markdown += `**Common symptoms:**\n${d.symptoms.map(s => `- ${s}`).join("\n")}\n\n`;
      markdown += `**Possible causes:**\n${d.causes.map(c => `- ${c}`).join("\n")}\n\n`;
      markdown += `**Prevention / Healthy habits:**\n${d.prevention.map(p => `- ${p}`).join("\n")}\n\n`;
      markdown += `**When to seek medical help:**\n${d.seekHelp.map(h => `- ${h}`).join("\n")}\n\n`;
      markdown += `*Important: Educational information only. Consult a doctor for personalized care.*\n\n---\n\n`;
    }
  });

  const blob = new Blob([markdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `HealthEduBot_Summary_${Date.now()}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

// Utility: HTML Escaping
function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}
