$(document).ready(function() {
    const APIKEY = "63ef6f27478852088da683de";
    const username = sessionStorage.getItem('accountName')
    const email = sessionStorage.getItem('accountEmail')
    const password = sessionStorage.getItem('accountPassword')
    const id = sessionStorage.getItem('accountId')
    let currentAchievementsList = sessionStorage.getItem('achievements')
    updateAchievements(id, currentAchievementsList);
    
    function updateAchievements(id, currentAchievementsList) {
        var jsondata = {'Username': username, 'Email': email, 'Password': password, 'Achievements': {'achievements': currentAchievementsList}};
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://recalldatabaseagain-f314.restdb.io/rest/accountinformation/${id}`,
        "method": "PUT",
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
    }
    
});

