//密碼保護
function checkPassword() {
    var password = document.getElementById("password-input").value;
    if (password === "aaron89") {  // 替换 "your_password" 为你设置的密码
        document.getElementById("password-content").style.display = "block";
        document.getElementById("password-form").style.display = "none";
    } else {
        alert("密码错误，请立即洽詢 Aaron Wong");
    }
}