const popup = document.getElementById('popup');

    function openPopup() {
      popup.style.display = 'flex';
    }

    function closePopup() {
      popup.style.display = 'none';
    }

    function submitLogin(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      console.log("Login details:", { email, password });

      // Add your real login logic here...

      alert('Logged in as: ' + email);
      closePopup();
    }

    const signupPopup = document.getElementById('signupPopup');

    function openSignup() {
      signupPopup.style.display = 'flex';
    }

    function closeSignup() {
      signupPopup.style.display = 'none';
    }

    function submitSignup(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;

      console.log("Signup Info:", { name, email, password });

      // Add signup logic here...

      alert('Account created for: ' + name);
      closeSignup();
    }
// const links = document.querySelectorAll("a.click");
// Select all anchor tags with class "click"

  // Smooth scroll on tab click
  document.querySelectorAll('.click').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  // profile dropdown
  function toggleDropdown(event) {
    event.stopPropagation();
    document.getElementById("profileDropdown").classList.toggle("show");
  }

  // Close dropdown when clicking outside
  window.addEventListener("click", () => {
    document.getElementById("profileDropdown").classList.remove("show");
  });
document.addEventListener("DOMContentLoaded", () => {

  // TO-DO INTERACTION (Optional extension, add elements if needed)
  // const taskList = document.querySelector(".task-card ol");
  // const addTaskInput = document.getElementById("task-input");
  // const addTaskBtn = document.getElementById("add-task-btn");

  // if (taskList && addTaskBtn && addTaskInput) {
  //   addTaskBtn.addEventListener("click", () => {
  //     const newTask = addTaskInput.value.trim();
  //     if (newTask) {
  //       const li = document.createElement("li");
  //       li.textContent = newTask;
  //       taskList.appendChild(li);
  //       addTaskInput.value = "";
  //     }
  //   });
  // }

  // check box for task
  document.getElementById("add-task-btn").addEventListener("click", function () {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
  
      // Add checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.marginRight = "10px";
  
      // Add label
      const label = document.createElement("span");
      label.textContent = taskText;
  
      // Append checkbox and label directly into li so it maintains number
      listItem.appendChild(checkbox);
      listItem.appendChild(label);
  
      // Add strikethrough behavior
      checkbox.addEventListener("change", () => {
        label.style.textDecoration = checkbox.checked ? "line-through" : "none";
      });
  
      // Add list item to the ol
      document.getElementById("todo-list").appendChild(listItem);
      taskInput.value = "";
    }
  });

  // HOMEWORK UPLOAD BUTTON
  const uploadBtn = document.querySelector(".upload-btn");
  if (uploadBtn) {
    uploadBtn.addEventListener("click", () => {
      alert("Homework uploaded successfully!");
    });
  }

  // DOUBT INPUT HANDLER
  const doubtInput = document.querySelector(".doubt-input input");
  const doubtSearchIcon = document.querySelector(".search-icon");
  const solutionBox = document.querySelector(".solution-box");

  if (doubtSearchIcon && doubtInput && solutionBox) {
    doubtSearchIcon.addEventListener("click", () => {
      const question = doubtInput.value.trim();
      if (question) {
        const para = document.createElement("p");
        para.textContent = `Q: ${question} → A: Your answer will appear soon.`;
        solutionBox.appendChild(para);
        doubtInput.value = "";
      }
    });
  }

  // PRACTICE QUESTION ATTEMPT MARKING
  // const practiceBox = document.querySelector(".practice-box ul");
  // if (practiceBox) {
  //   practiceBox.addEventListener("click", (e) => {
  //     if (e.target.tagName === "LI") {
  //       e.target.style.textDecoration = "line-through";
  //       e.target.style.color = "gray";
  //     }
  //   });
  // }
  document.addEventListener("DOMContentLoaded", function () {
    const practiceInput = document.querySelector(".practice-input input");
    const practiceSearchIcon = document.querySelector(".search-icon");
    const practiceBox = document.querySelector(".practice-box");
  
    if (practiceSearchIcon && practiceInput && practiceBox) {
      practiceSearchIcon.addEventListener("click", () => {
        const question = practiceInput.value.trim();
        if (question) {
          const para = document.createElement("p");
          para.textContent = `Q: ${question} → A: Your question will appear soon.`;
          practiceBox.appendChild(para);
          practiceInput.value = "";
        }
      });
    }
  });
  

  // WEEKLY TEST - Submit Button
  const submitTestBtn = document.querySelector(".submit-btn");
  const questionBox = document.querySelector(".question-box");
  const submitTest = document.querySelector(".submitTest");

  if (submitTestBtn && questionBox) {
    submitTestBtn.addEventListener("click", () => {
      clearInterval(countdown); // <-- This stops the timer!
      alert("Test submitted successfully!");
      questionBox.innerHTML += `<p><b>✔ Your answers have been saved.</b></p>`;
    });
    
  }

});
let countdown; // To store the interval
const examDuration = 30 * 60; // 30 minutes in seconds

document.getElementById('startTestBtn').addEventListener('click', function () {
  // Show message
  const msg = document.getElementById('examMessage');
  msg.textContent = '✅ Your exam has started';
  msg.style.display = 'block';

  // Show exam section
  document.getElementById('weeklyExamSection').style.display = 'block';

  // Show timer
  const timerDisplay = document.getElementById('timer');
  timerDisplay.style.display = 'block';

  // Hide the test info section
  document.querySelectorAll('.info-row')[0].style.display = 'none';

  // Start the timer
  let timeLeft = examDuration;

  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Time Left: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      autoSubmitTest();
    } else {
      timeLeft--;
    }
  }

  updateTimer(); // Initial call
  countdown = setInterval(updateTimer, 1000);

  function stopTimer() {
    clearInterval(countdown);
  }
  // function stopTimer() {
  //   clearInterval(countdown);
  // }
  
  // document.getElementById('examMessage').style.display = 'block';
  //   document.getElementById('timer').style.display = 'none';
});

const leaveBtn = document.getElementById('leaveBtn');
const leavePopup = document.getElementById('leavePopup');
const confirmLeave = document.getElementById('confirmLeave');
const cancelLeave = document.getElementById('cancelLeave');
const weeklyExamSection = document.getElementById('weeklyExamSection');

leaveBtn.addEventListener('click', () => {
  leavePopup.style.display = 'flex';
});

cancelLeave.addEventListener('click', () => {
  leavePopup.style.display = 'none';
});

confirmLeave.addEventListener('click', () => {
  leavePopup.style.display = 'none';
  weeklyExamSection.style.display = 'none';
  alert('You have left the test.');
});

// end leave button

function autoSubmitTest() {
document.getElementById('examMessage').textContent = '⏰ Time up! Your test has been auto-submitted.';
document.getElementById('timer').style.color = 'gray';

// Optionally disable all buttons
const buttons = document.querySelectorAll('.option-btn, .submit-btn');
buttons.forEach(btn => btn.disabled = true);
}