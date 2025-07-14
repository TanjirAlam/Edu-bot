const practiceQuestionsData = {
  math: [
    "Q. What is 2 + 2?",
    "Q. Solve for x: 3x = 15",
    "Q. What is the square root of 81?"
  ],
  science: [
    "Q. What is Newton's Second Law?",
    "Q. Define photosynthesis.",
    "Q. What are the three states of matter?"
  ],
  history: [
    "Q. Who was the first President of the USA?",
    "Q. What was the cause of World War I?",
    "Q. Describe the French Revolution."
  ],
  english: [
    "Q. Define a noun.",
    "Q. What is a metaphor?",
    "Q. Give an example of an idiom."
  ]
};

document.getElementById("searchIcon").addEventListener("click", function () {
  const input = document.getElementById("practiceSearchInput").value.toLowerCase();
  const list = document.getElementById("practiceQuestionsList");
  list.innerHTML = ""; // Clear old questions

  let found = false;
  for (const topic in practiceQuestionsData) {
    if (topic.includes(input)) {
      found = true;
      practiceQuestionsData[topic].forEach(q => {
        const li = document.createElement("li");
        li.textContent = q;
        list.appendChild(li);
      });
    }
  }

  if (!found && input.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = "No questions found for this topic.";
    list.appendChild(li);
  }
});


// For update user profile
function submitSignup(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('signupEmail').value;

  // Save user data to localStorage
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("joinDate", new Date().toLocaleDateString());

  // Redirect to profile page
  window.location.href = "profile.html";
}

function submitLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;

  // Just for demo purpose
  localStorage.setItem("userEmail", email);

  window.location.href = "profile.html";
}
