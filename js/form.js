const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");

window.addEventListener("DOMContentLoaded", () => {
    usernameInput.value = localStorage.getItem("username") || "";
    passwordInput.value = localStorage.getItem("password") || "";
});

saveBtn.addEventListener("click", () => {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);
});
