  // -------- Login Popup Handlers -------- //

function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openSignup() {
  document.getElementById("signupPopup").style.display = "flex";
}

function closeSignup() {
  document.getElementById("signupPopup").style.display = "none";
}

// ✅ Login handler
function submitLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Logged in as:", email);

  closePopup();

  // ✅ Redirect to the main content/dashboard page
  window.location.href = "index1.html"; // Replace with your actual page
}

// ✅ Signup handler
function submitSignup(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  console.log("Signed up:", name, email);

  closeSignup();

  // ✅ Redirect to welcome/dashboard page
  window.location.href = "index1.html"; // Replace with your actual page
}

// new part
// function openPopup() {
//   document.getElementById('popup').style.display = 'flex';
// }

// function closePopup() {
//   document.getElementById('popup').style.display = 'none';
// }

// function openSignup() {
//   document.getElementById('signupPopup').style.display = 'flex';
// }

// function closeSignup() {
//   document.getElementById('signupPopup').style.display = 'none';
// }

// function submitSignup(event) {
//   event.preventDefault();

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('signupEmail').value;
//   const password = document.getElementById('signupPassword').value;

//   const joinDate = new Date().toLocaleDateString('en-US', {
//     month: 'short', year: 'numeric'
//   });

//   localStorage.setItem('userName', name);
//   localStorage.setItem('userEmail', email);
//   localStorage.setItem('userPassword', password);
//   localStorage.setItem('joinDate', joinDate);

//   closeSignup();
//   window.location.href = 'profile.html'; // Navigate to profile page
// }

// function submitLogin(event) {
//   event.preventDefault();

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   const storedEmail = localStorage.getItem('userEmail');
//   const storedPassword = localStorage.getItem('userPassword');

//   if (email === storedEmail && password === storedPassword) {
//     window.location.href = 'profile.html';
//   } else {
//     alert('Invalid credentials');
//   }
// }