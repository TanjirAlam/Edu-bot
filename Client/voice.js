// Add voice to text functionality to both mic icons
function setupVoiceToText(inputSelector, micSelector) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser doesn't support Speech Recognition.");
      return;
    }
  
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
  
    const input = document.querySelector(inputSelector);
    const mic = document.querySelector(micSelector);
  
    mic.addEventListener('click', () => {
      recognition.start();
      mic.classList.add("listening");
    });
  
    recognition.addEventListener('result', (event) => {
      const transcript = event.results[0][0].transcript;
      input.value = transcript;
    });
  
    recognition.addEventListener('end', () => {
      mic.classList.remove("listening");
    });
  }
  
  // Call this for both doubt and practice input sections
  window.addEventListener('DOMContentLoaded', () => {
    setupVoiceToText(".doubt-input input", ".doubt-input .mic-icon");
    setupVoiceToText("#practiceSearchInput", ".practice-input .mic-icon");
  
    // Timer Fix - stop timer on submit
    const submitBtn = document.getElementById("submitTestBtn");
    const timerEl = document.getElementById("timer");
    let timerInterval;
  
    function startTimer(duration) {
      let time = duration;
      timerInterval = setInterval(() => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        timerEl.textContent = `${minutes}:${seconds}`;
        if (--time < 0) {
          clearInterval(timerInterval);
          timerEl.textContent = "Time's up!";
        }
      }, 1000);
    }
  
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        clearInterval(timerInterval);
        timerEl.textContent = "Submitted";
      });
    }
  
    // Example: start timer with 5 mins
    startTimer(300);
  });
  