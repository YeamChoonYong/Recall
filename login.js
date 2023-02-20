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
    const APIKEY = "63ef6f27478852088da683de";

    $(".submitButton").on("click", function (e) {
      e.preventDefault();
  
      let accountName = $("#username").val();
      let accountEmail = $("#email").val();
      let accountPassword = $("#password").val();
      let accountAchievements = {'achievements' : []}
      let jsondata = {
        "Username": accountName,
        "Email": accountEmail,
        "Password": accountPassword,
        "Achievements": accountAchievements,
      };
      if (formStatus == "signUp"){
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://recalldatabaseagain-f314.restdb.io/rest/accountinformation",
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
          sessionStorage.setItem ('accountId', response._id)
          sessionStorage.setItem ('accountName', accountName);
          sessionStorage.setItem ('accountEmail', accountEmail);
          sessionStorage.setItem ('accountPassword', accountPassword);
          accountAchievements = JSON.stringify(accountAchievements);
          accountAchievements = JSON.parse(accountAchievements);
          console.log(accountAchievements);
          sessionStorage.setItem ('achievements', JSON.stringify(accountAchievements.achievements));
          location.href = 'home.html'
        });
      } else {
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://recalldatabaseagain-f314.restdb.io/rest/accountinformation",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          }
        }
        $.ajax(settings).done(function (response) {
          for (account of response) {
            if (jsondata.Email == account.Email) {
              if (jsondata.Password == account.Password) {
                console.log('match')
                var match = true
                sessionStorage.setItem ('accountId', account._id)
                sessionStorage.setItem ('accountName', account.Username);
                sessionStorage.setItem ('accountEmail', account.Email);
                sessionStorage.setItem ('accountPassword', account.Password);
                accountAchievements = JSON.stringify(accountAchievements);
                accountAchievements = JSON.parse(accountAchievements);
                console.log(accountAchievements);
                sessionStorage.setItem ('achievements', JSON.stringify(accountAchievements.achievements));
                location.href = 'home.html'
              } else {
                console.log('no match')
                var match = false
              }
            } else {
              console.log('no match')
              var match = false
            }
          }
        });
      }
    })
    
})


