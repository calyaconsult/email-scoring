# 📧 E-Mail Risk Assessment Checklist

A simple interactive checklist to **evaluate the security risk of e-mails**.  
The tool helps users detect **phishing** and **spam** by scoring different indicators like sender, content, context, and technical details.

---

## ✨ Features
- **15 questions** grouped into four categories:
  - Absenderüberprüfung (Sender check)
  - Inhaltsanalyse (Content analysis)
  - Kontext & Logik (Context & logic)
  - Technische Indikatoren (Technical indicators)
- Each answer scored **0–3 points**
- **Two scoring modes**:
  - **Weighted** (each question has a different impact, based on security relevance)
  - **Unweighted** (all questions count equally)
- Results scaled to **0–45 points**, with traffic-light risk levels:
  - 🔴 **Hohes Risiko** (0–15)
  - 🟡 **Mäßiges Risiko** (16–30)
  - 🟢 **Geringes Risiko** (31–45)
- **Buttons for testing & reset**:
  - *Bewertung berechnen* → calculate score
  - *Test* → fill all questions with random values (for demo/testing)
  - *Zurücksetzen* → clear all answers and results

---
## ⚠ Disclaimer 
**Important:** This software is provided for **instructional purposes only**.
Its main goal is to **illustrate the concept of scoring e-mails** based on certain criteria.
It is **not intended** for production-ready e-mail classification, spam detection, or phishing protection.
Users should **not rely on it for security-critical decisions.**

---
## 🚀 Demo
Clone the repository and open `index.html` in your browser:

```bash
git clone https://github.com/calyaconsult/email-scoring.git
cd email-scoring
xdg-open index.html # or open manually in browser
```
---

## 📜 License

MIT License — free to use, modify, and share.
