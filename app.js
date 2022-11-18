const passwordLength = document.getElementById("password_length");
const slider = document.getElementById("slider");
const inputs = document.querySelectorAll('input[type="checkbox"]');
const generatePassword = document.getElementById("generate_password");
const password = document.getElementById("password");
const copyPassword = document.getElementById("copy_password");
const copied = document.getElementById("copied");

copied.style.display = "none";

const chars = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits: "0123456789",
  symbols: "!~#@$%&"
};

slider.addEventListener("input", () => {
  passwordLength.innerHTML = slider.value;
});

generatePassword.addEventListener("click", () => {
  let candidates = "";
  inputs.forEach(input => {
    if (input.checked) {
      candidates += chars[input.name];
    }
  });
  let newPassword = "";
  for (let i = 0; i < passwordLength.innerHTML; i++) {
    newPassword += candidates[Math.floor(Math.random() * candidates.length)];
  }
  password.innerHTML = newPassword;
});

const handleAlertNotification = () => {
  const alert = document.getElementById("alert");
  copyPassword.style.display = "none";
  copied.style.display = "block";
  alert.classList.add("active");
  setTimeout(() => {
    alert.classList.remove("active");
    copied.style.display = "none";
    copyPassword.style.display = "block";
  }, 4000);
};

copyPassword.addEventListener("click", () => {
  let text = password;
  console.log(text);
  const cb = navigator.clipboard;
  cb.writeText(text.innerHTML).then(() => handleAlertNotification());
});
