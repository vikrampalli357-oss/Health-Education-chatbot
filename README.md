# HealthEduBot - AI Health Education Chatbot 🩺

**HealthEduBot** is an AI-powered health education web application designed to provide clear, reliable, easy-to-understand general health information. It helps users learn about health, wellness, diseases, nutrition, fitness, hygiene, and basic first aid.

---

## 🌟 Key Features

- **Structured Response Format**: Formats all educational outputs into 6 structured sections:
  1. 📌 **What it is**
  2. 🩺 **Common symptoms**
  3. 🔍 **Possible causes**
  4. 🌿 **Prevention / Healthy habits**
  5. 🚨 **When to seek medical help**
  6. ⚠️ **Important Disclaimer**
- **Emergency Safeguard Detection**: Real-time detection of red-flag symptoms (*chest pain, severe difficulty breathing, stroke signs, severe bleeding*) with immediate warnings to contact local emergency hotlines (**911 / 112 / 999**).
- **Non-Diagnostic & Non-Prescribing Policy**: Strictly refrains from declaring definitive diagnoses or prescribing medications.
- **Interactive UI**: Modern Emerald Teal & Dark/Light mode user interface.
- **Text-to-Speech (TTS)**: Built-in Speech Synthesis to listen to responses read aloud.
- **Topic Explorer**: Browse and search pre-formatted medical & wellness topics.
- **Export Transcript**: Save health conversations as Markdown files.

---

## 🚀 Quick Start / Local Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vikrampalli357-oss/Health-Education-chatbot.git
   cd Health-Education-chatbot
   ```

2. **Run the Application**:
   Using Node.js (Zero external dependencies required):
   ```bash
   node server.js
   ```

3. **Open in Browser**:
   Navigate to `http://127.0.0.1:3000/` in your web browser.

---

## 📁 Repository Structure

```
├── index.html        # Main HTML web interface
├── styles.css        # Custom CSS styling (Light/Dark themes, responsive design)
├── app.js            # HealthEduBot persona engine, emergency detector, TTS, storage
├── server.js         # Zero-dependency Node.js HTTP server
├── package.json      # Project configuration
└── README.md         # Project documentation
```

---

## ⚠️ Disclaimer

HealthEduBot provides general health educational information only and is **not** a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified doctor or healthcare professional for personalized medical care.
