document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }

    alert("Đăng ký thành công!");
    window.location.href = "login.html";
});