document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Gửi liên hệ thành công!");
    this.reset();
});