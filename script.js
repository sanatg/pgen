function generatePassword() {
  const length = 16;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+[]{}|;':\",./<>?`~";
  let password = "";

  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  return password;
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const passwordDisplay = document.getElementById('passwordDisplay');
  const newPassword = generatePassword();
  
  // GSAP animation
  gsap.fromTo(passwordDisplay, {scale: 0.8, opacity: 0}, {scale: 1, opacity: 1, duration: 0.5});
  
  passwordDisplay.textContent = newPassword;
});
