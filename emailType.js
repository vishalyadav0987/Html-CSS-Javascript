// email ke liye
function validateEmail() {
    var emailTextBox = document.getElementById("txtEmail");
    var email = emailTextBox.value;
    var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailTextBox.style.color = "white"
    emailTextBox.style.fontWeight = "bolder"
    if (emailRegEx.test(email)) {
        emailTextBox.style.backgroundColor = "white"
        emailTextBox.style.color = "black"
        emailTextBox.style.textTransform = "capitalize"
    }
    else {
        emailTextBox.style.backgroundColor = "red"
    }
}
// sUBMIT BUTTON SE TIME KE LIYE

// function getcurrentdateTime(){
//     document.getElementById("time").innerHTML=new Date();
//     document.getElementById("time").style.color="blue";
//     document.getElementById("time").style.fontWeight="bolder";
//     document.getElementById("time").style.fontFamily="cursive";
//     document.getElementById("time").style.fontSize="23px";
// }

// // SETINTERVAL TIME KKEL LIYE

// setInterval(getcurrentdateTime,1000);
// function getcurrentdateTime(){
//     document.getElementById("time1").innerHTML=new Date();
//     document.getElementById("time1").style.color="blue";
//     document.getElementById("time1").style.fontWeight="bolder";
//     document.getElementById("time1").style.fontFamily="cursive";
//     document.getElementById("time1").style.fontSize="23px";
// }

// STOP AND STARCLOCK KE LIYE

var intervalId;
function startClock(){
    intervalId=setInterval(getcurrentdateTime,1000);

}
// function stopClock(){
//     clearInterval(intervalId);
// }
function getcurrentdateTime(){
    document.getElementById("timediv").innerHTML=new Date();
    document.getElementById("timediv").style.color="blue"
    document.getElementById("timediv").style.fontWeight="bolder";
    document.getElementById("timediv").style.fontFamily="cursive";
    document.getElementById("timediv").style.fontSize="40px";
}
