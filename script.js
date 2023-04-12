function generatePassword() {
  const length = 18;
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
  passwordDisplay.textContent = newPassword;
});