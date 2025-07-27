function generatePassword() {
  const length = document.getElementById("length").value || 8;
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("result").innerText = password;
}

function copyPassword() {
  const password = document.getElementById("result").innerText;

  if (!password) {
    alert("No password to copy!");
    return;
  }

  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      alert("Failed to copy password: " + err);
    });
}

