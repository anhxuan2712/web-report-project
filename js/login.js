
        document.getElementById("loginForm").addEventListener("submit", function(e){
            e.preventDefault();

            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value;

            if(username === ""){
                alert("Vui lòng nhập tên đăng nhập!");
                return;
            }


            alert("Đăng nhập thành công!");
            window.location.href = "index.html";
        });
