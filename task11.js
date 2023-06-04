function validation() {
    var fnam = document.getElementById("fname");
    var lnam = document.getElementById("lname").value;
    var mail = document.getElementById("email").value;
    var pword = document.getElementById("password").value;
    var rpword = document.getElementById("reenterpassword").value;
    var ag = document.getElementById("age").value;
    var pnum = document.getElementById("number").value;
    var adress = document.getElementById("address").value;

    if (fnam.value == "") {
        document.getElementById("error1").style.visibility = "visible";
    }
    if (lnam == "") {
        document.getElementById("error2").style.visibility = "visible";
    }
    if (mail == "") {
        document.getElementById("error3").style.visibility = "visible";
    }
    if (pword == "") {
        document.getElementById("error4").style.visibility = "visible";
    }
    if (rpword == "") {
        document.getElementById("error5").style.visibility = "visible";
    }
    if (ag == "") {
        document.getElementById("error6").style.visibility = "visible";
    }
    if (pnum == "") {
        document.getElementById("error7").style.visibility = "visible";
    }
    if (adress == "") {
        document.getElementById("error8").style.visibility = "visible";
    }
    return false;
}