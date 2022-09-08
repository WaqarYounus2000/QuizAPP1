

function loginIN() {
    var useremail = document.getElementById("emailID");
    var userpassword = document.getElementById("passwordID");

    var emailstored = localStorage.getItem("Email");
    var passwordstored = localStorage.getItem("password");

    if (useremail.value == "") {
        document.getElementById("emailID").style.border = "1px solid red";
        document.getElementById("alertID1").style.display = "flex";
        
    }
    
    else if (userpassword.value == "") {
        document.getElementById("passwordID").style.border = "1px solid red";
        document.getElementById("alertID2").style.display = "flex";
    

    }



    else if (useremail.value == emailstored && userpassword.value == passwordstored) {
        window.location.href = "testpage.html";
    }
    else {
        document.getElementById("containerID2").style.display = "flex";
        document.getElementById("logincardID").style.display = "none";
        document.getElementById("modalclosebuttonID2").onclick = function () {
            document.getElementById("containerID2").style.display = "none";
            document.getElementById("logincardID").style.display = "flex";
            Loginnewaccount();
        }
        console.log("not found")
        console.log(emailstored)
        console.log(passwordstored)
    }

}

function SignUP() {
    var useremail = document.getElementById("emailID").value;
    var userpassword = document.getElementById("passwordID").value;
    // useremail = "";
    // userpassword="";

    if (useremail == "") {
        document.getElementById("emailID").style.border = "1px solid red";
        document.getElementById("alertID1").style.display = "flex";
        return;
    }
    else if (userpassword == "") {
        document.getElementById("passwordID").style.border = "1px solid red";
        document.getElementById("alertID2").style.display = "flex";
        return;

    }
    localStorage.setItem("Email", document.getElementById("emailID").value);
    localStorage.setItem("password", document.getElementById("passwordID").value);
    document.getElementById("signupbuttonID").innerHTML = "";
    document.getElementById("laoderID").style.display = "block";
    
    
    setTimeout(function () {
        userpassword == ""
        useremail == ""
        document.getElementById("laoderID").style.display = "none";
        document.getElementById("containerID").style.display = "flex";
        document.getElementById("logincardID").style.display = "none";
        document.getElementById("signupbuttonID").innerHTML = "Sign Up";
        

    }, 2000)
    document.getElementById("modalclosebuttonID").onclick = function () {
        document.getElementById("containerID").style.display = "none";
        document.getElementById("logincardID").style.display = "flex";
        Loginnewaccount();
    }





}

var useremail = document.getElementById("emailID");
var userpassword = document.getElementById("passwordID");

useremail.addEventListener("focusin", myFocusFunction1)
userpassword.addEventListener("focusin", myFocusFunction2)

function myFocusFunction1() {
    document.getElementById("emailID").style.border = "none";
    document.getElementById("alertID1").style.display = "none";
}
function myFocusFunction2() {
    document.getElementById("passwordID").style.border = "none";
    document.getElementById("alertID2").style.display = "none";
}


function CreateNewAccount() {
    var useremail = document.getElementById("emailID");
    var userpassword = document.getElementById("passwordID");
    document.getElementById("createAccountID").style.display = "none";
    document.getElementById("logINID").style.display = "block";
    document.getElementById("cardtitleID").innerHTML = "Sign Up here";
    useremail = "";
    userpassword = "";
    document.getElementById("signupbuttonID").style.display = "block";
    document.getElementById("loginbuttonID").style.display = "none";

}



function Loginnewaccount() {
    document.getElementById("emailID").value = "";
    document.getElementById("passwordID").value = "";
    document.getElementById("cardtitleID").innerHTML = "Login here";
    document.getElementById("logINID").style.display = "none";
    document.getElementById("createAccountID").style.display = "block";
    document.getElementById("signupbuttonID").style.display = "none";
    document.getElementById("loginbuttonID").style.display = "block";

}

var createAccountID = document.getElementById("createAccountID");
createAccountID.addEventListener('click', CreateNewAccount);

var createAccountID = document.getElementById("logINID");
createAccountID.addEventListener('click', Loginnewaccount);



















var useremail = document.getElementById("emailID");
useremail.onfocus = function () {

    userpassword.style.border = "none";
}















