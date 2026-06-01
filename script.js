function checkPassword() {
  const password = document.getElementById("password").value;
  const strengthText = document.getElementById("strengthText");
  const strengthBar = document.getElementById("strengthBar");
  const feedback = document.getElementById("feedback");

  let score = 0;
  let messages = [];

  feedback.innerHTML = "";

  if (password.length >= 8) {
    score++;
  } else {
    messages.push("Use at least 8 characters.");
  }

  if (/[A-Z]/.test(password)) {
    score++;
  } else {
    messages.push("Add at least one uppercase letter.");
  }

  if (/[a-z]/.test(password)) {
    score++;
  } else {
    messages.push("Add at least one lowercase letter.");
  }

  if (/[0-9]/.test(password)) {
    score++;
  } else {
    messages.push("Add at least one number.");
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    score++;
  } else {
    messages.push("Add at least one special character.");
  }

  if (score <= 2) {
    strengthText.textContent = "Strength: Weak";
    strengthBar.style.width = "30%";
    strengthBar.style.background = "red";
  } else if (score === 3 || score === 4) {
    strengthText.textContent = "Strength: Medium";
    strengthBar.style.width = "65%";
    strengthBar.style.background = "orange";
  } else {
    strengthText.textContent = "Strength: Strong";
    strengthBar.style.width = "100%";
    strengthBar.style.background = "green";
  }

  if (messages.length === 0) {
    messages.push("Great password! This is strong.");
  }

  messages.forEach(function(message) {
    const li = document.createElement("li");
    li.textContent = message;
    feedback.appendChild(li);
  });
}