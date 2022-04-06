var login_username = "admin";
var login_password = "12345";

function load() {
    $(document).ready(function () {
        $(".login").show(); //show class login when you load the page
        $(".logout").hide(); //hide class logout when you load the page
    });
}

function authenticate_login() {
    var v1, v2;
    v1 = document.getElementById("username").value;
    //v1 = document.form1.firstname.value;
    v2 = document.getElementById("password").value;

    $(document).ready(function () {

        if ((v1 == login_username) && (v2 == login_password)) {
            alert('Welcome to our website');
            parent.frames.Menu_Frame.location.href = "Menu.htm";
            document.getElementById("username").innerHTML = "Welcome " + login_username + "<br>";
            $(".login").hide(); //hide class login
            $(".logout").show(); //show class logout
        }
        else {
            $(".login").show(); //show class login
            $(".logout").hide(); //hide class logout
            alert('Invalid User or Password Login (use admin and 12345)');
            document.getElementById("password").value = "";
            document.getElementById("password").focus();
            parent.frames.Menu_Frame.location.href = "./MenuT.htm";
        }
    });
}


function authenticate_logout() {
    alert('Thank you!');
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("username").focus();
    parent.frames.Menu_Frame.location.href = "MenuT.htm";
    parent.frames.Content_Frame.location.href = "./Pages/introduction.html";
    $(document).ready(function () {
        $(".login").show(); //show class login
        $(".logout").hide(); //hide class logout
    });
}