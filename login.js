$(window).on("load",function(){
  $('.loadAnimation').fadeOut(2000);
});

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
        "Password": accountPassword,
        "Achievements": []
      };
      if (formStatus == "signUp"){
        if (accountName.length > 15){
          
        }
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
        var nickname;
        $.ajax(settings).done(function (response) {
          for (account of response) {
            if (jsondata.Email == account.Email) {
              if (jsondata.Password == account.Password) {
                console.log('match')
                var match = true
                var nickname = account.Username;
                location.href = '/index.html'
              } else {
                console.log('no match')
                var match = false
              }
            } else {
              console.log('no match')
              var match = false
            }
          }
          return nickname
        });
      }
    })
    
})


