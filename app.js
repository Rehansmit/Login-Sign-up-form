function loginForm() {
    
    var userName = document.getElementById("input_user").value;
    var userPassword = document.getElementById("input_Password").value;

    
    if (userName === "admin") {
        if (userPassword === "admin1") {
            
            window.location.href = "form.html";
        } else {
            alert("Enter valid password");
        }
    } else {
        alert("Enter valid user name");
    }
}
