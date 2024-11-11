
// functin for sign up button

function singupForm(){
    window.location.href = "signup.html";
    
}


// functin for sign up form

function signupForm() {
    var userName = document.getElementById("input_user_sp").value;
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



// functin for login button


function loginForm() {

    var userName = document.getElementById("input_user_sp").value;
    var userPassword = document.getElementById("input_Password_sp").value;
    
    if (userName === document.getElementById("input_user")) {
        if(userPassword === document.getElementById("input_Password"))
            {window.location.href = "regform.html";}

      else  {alert("please enter valid password")}
    }

    
    else {alert("please enter valid user Id")}
    
    }
            


