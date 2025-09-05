  function calculateRisk() {
    const form = document.getElementById("riskForm");
    const result = document.getElementById("scoreResult");

    let total = 0;
    let allAnswered = true;

    const questions = form.querySelectorAll(".question");

    // Which scoring mode?
    const scoringMode = document.querySelector('input[name="scoringMode"]:checked').value;

    for (const q of questions) {
      const selected = q.querySelector("input[type=radio]:checked");
      if (!selected) {
        allAnswered = false;
        break;
      }

      const value = parseInt(selected.value, 10);

      if (scoringMode === "weighted") {
        const weight = parseFloat(q.querySelector(".weight").dataset.weight);
        total += value * weight;
      } else {
        // unweighted: just sum raw values
        total += value;
      }
    }

    if (!allAnswered) {
      result.textContent = "Bitte beantworten Sie alle Fragen.";
      result.style.color = "red";
      return;
    }

    let rawScore;

    if (scoringMode === "weighted") {
      const maxPossible = Array.from(questions).reduce((sum, q) => {
        const w = parseFloat(q.querySelector(".weight").dataset.weight);
        return sum + w * 3;
      }, 0);

      rawScore = Math.round((total / maxPossible) * 45);
    } else {
      const maxPossible = questions.length * 3;
      rawScore = Math.round((total / maxPossible) * 45);
    }

    let riskLevel, color, advice;
    if (rawScore <= 15) {
      riskLevel = "HOHES RISIKO 🔴";
      color = "red";
      advice = "Wahrscheinlich Spam/Phishing. Nicht interagieren. Sofort löschen oder melden.";
    } else if (rawScore <= 30) {
      riskLevel = "MÄSSIGES RISIKO 🟡";
      color = "orange";
      advice = "Vorsicht! Identität unabhängig prüfen. Keine Links/Anhänge öffnen, bevor geklärt.";
    } else {
      riskLevel = "GERINGES RISIKO 🟢";
      color = "green";
      advice = "Wirkt legitim. Dennoch wachsam bleiben, ungewöhnliche Anfragen prüfen.";
    }

    result.innerHTML = `
      <strong>Gesamtpunktzahl (${scoringMode === "weighted" ? "gewichtet" : "ungewichtet"}):</strong> ${rawScore} von 45<br>
      <strong>Risikostufe:</strong> <span style="color:${color};">${riskLevel}</span><br>
      <em>${advice}</em>
    `;
  }
  function fillRandom() {
    const form = document.getElementById("riskForm");
    const questions = form.querySelectorAll(".question");

    for (const q of questions) {
      const options = q.querySelectorAll("input[type=radio]");
      const randomIndex = Math.floor(Math.random() * options.length);
      options[randomIndex].checked = true;
    }

    // Optionally: auto-calculate after filling
    calculateRisk();
  }
  function resetForm() {
    const form = document.getElementById("riskForm");
    form.reset(); // built-in reset clears all radios

    const result = document.getElementById("scoreResult");
    result.textContent = ""; // clear the output
  }
