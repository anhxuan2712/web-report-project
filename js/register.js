document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();
    let password = document.getElementById("password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;
    if(password !== ConfirmPassword){
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }
    alert("Đăng ký thành công!");
    window.location.href = "login.html";
});