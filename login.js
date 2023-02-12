let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("formTitle");
let submitButton = document.getElementById("submitButton")
var formStatus = "signUp"


signInBtn.onclick = function(){
  nameField.style.maxHeight = "0";
  title.innerHTML = "Welcome Back"
  signInBtn.classList.add("disable");
  signUpBtn.classList.remove("disable")
  formStatus = "signIn"
}

signUpBtn.onclick = function(){
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Identify Yourself"
  signInBtn.classList.remove("disable");
  signUpBtn.classList.add("disable")
  formStatus = "signUp"
}





$(document).ready(function () {
    const APIKEY = "63e24b93478852088da67e53";

    $(".submitButton").on("click", function (e) {
      e.preventDefault();
  
      let accountName = $("#username").val();
      let accountEmail = $("#email").val();
      let accountPassword = $("#password").val();
  
      let jsondata = {
        "Username": accountName,
        "Email": accountEmail,
        "Password": accountPassword
      };
      if (formStatus == "signUp"){
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://recalldatabase-728b.restdb.io/rest/accountinformation",
          "method": "POST",
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata)
        }
        
        $.ajax(settings).done(function (response) {
          console.log(response);
        });
      } else {
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://recalldatabase-728b.restdb.io/rest/accountinformation",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          }
        }
        
        $.ajax(settings).done(function (response) {
          console.log(response);
        });
      }
        
    })
    
})


