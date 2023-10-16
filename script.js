// =================== Xử lý đóng mở Popup Login, Sign up ===================

// Lấy tham chiếu đến modal và nút mở modal
const loginModal = document.getElementById("login");
const signupModal = document.getElementById("signup");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const closeLoginModal = document.getElementById("closeModalBtn");
const closeModalSignupBtn = document.getElementById("closeModalSignupBtn");

// Khi người dùng nhấn nút login, sign up mở modal, hiển thị modal
loginBtn.addEventListener("click", function () {
    loginModal.style.display = "flex";
});

signupBtn.addEventListener("click", function () {
    signupModal.style.display = "flex";
});

// Khi người dùng nhấn vào nút đóng modal hoặc nút ngoài modal, ẩn modal
closeLoginModal.addEventListener("click", function () {
    loginModal.style.display = "none";
});

closeModalSignupBtn.addEventListener("click", function () {
    signupModal.style.display = "none";
});

// Khi người dùng nhấn ra ngoài modal, cũng ẩn modal
window.addEventListener("click", function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }

    if (event.target == signupModal) {
        console.log({ loginModal });
        signupModal.style.display = "none";
    }
});
