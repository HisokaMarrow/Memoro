let voicesLoaded = false;
window.speechSynthesis.onvoiceschanged = () => {
  voicesLoaded = true;
};

function speak(text) {
  const enableVoice = document.getElementById("enableVoice").checked;
  if (!enableVoice || !voicesLoaded) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.8;
  speechSynthesis.speak(utterance);
}

let currentSequence = [];
let displayInterval;
let currentIndex = 0;

function startGame() {
  const delay = parseFloat(document.getElementById("delay").value) * 1000;
  const maxRange = parseInt(document.getElementById("max").value);
  const totalTime = parseInt(document.getElementById("duration").value);
  const includeLeadingZero = document.getElementById("includeLeadingZero").checked;
  const speakIndividually = document.getElementById("speakIndividually").checked;

  const count = Math.floor(totalTime * 1000 / delay);
  currentSequence = [];

  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * (maxRange + 1));
    currentSequence.push(includeLeadingZero && num < 10 ? "0" + num : num.toString());
  }

  document.getElementById("startButton").style.display = "none";
  document.getElementById("resultSection").style.display = "none";

  currentIndex = 0;
  displayInterval = setInterval(() => {
    if (currentIndex < currentSequence.length) {
      document.getElementById("output").innerText = currentSequence[currentIndex];
      if (document.getElementById("enableVoice").checked) {
        speakIndividually
          ? speak(currentSequence[currentIndex].split("").join(" "))
          : speak(currentSequence[currentIndex]);
      }
      currentIndex++;
    } else {
      clearInterval(displayInterval);
      setTimeout(showInputField, 500);
    }
  }, delay);
}

function showInputField() {
  document.getElementById("output").innerText = "";
  document.getElementById("resultSection").style.display = "block";
}

function checkAnswer() {
  const userInput = document.getElementById("userInput").value.trim().split(/\s+/);
  const correct = currentSequence.join(" ") === userInput.join(" ");
  alert(correct ? "Correct!" : "Wrong!\nCorrect: " + currentSequence.join(" "));
}

function restartGame() {
  document.getElementById("userInput").value = "";
  document.getElementById("startButton").style.display = "block";
  document.getElementById("resultSection").style.display = "none";
}

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("checkButton").addEventListener("click", checkAnswer);
document.getElementById("restartButton").addEventListener("click", restartGame);