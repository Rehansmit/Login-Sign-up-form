
function singupForm(){
    window.location.href = "signup.html";
    
}

function signupForm() {
    var userName = document.getElementById("input_user_sp").value
    var userPassword = document.getElementById("input_Password_sp").value;
    var userRePassword = document.getElementById("input_re-Password").value;
    var cellNo = document.getElementById("input_cell").value
    
    if (userName === "") {
        alert("Enter a valid username");
        return;
    }
    
    if (userPassword === "") {
        alert("Enter a valid password");
        return;
    }
    
    if (userRePassword === "") {
        alert("Re-confirm your password");
        return;
    }
    
    if (userPassword !== userRePassword) {
        alert("Passwords do not match");
        return;
    }

  
    window.location.href = "index.html";
}



function loginForm() {
    
    var userName = document.getElementById("input_user").value;
    var userPassword = document.getElementById("input_Password").value;
    
    
    if (userName === "admin") {
        if(userPassword === "admin1")
            {window.location.href = "form.html";}

      else  {alert("please enter valid password")}
    }

    
    else {alert("please enter valid user Id")}
    
    }
            


