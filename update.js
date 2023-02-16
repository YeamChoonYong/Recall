$(document).ready(function() {
    const APIKEY = "63e24b93478852088da67e53";
    getAccounts()
    // const username = sessionStorage.getItem('accountName')
    const username = 'Test2'
    console.log(username)
    // let currentAchievementsList = JSON.parse(sessionStorage.getItem('achievements'))
    
    function getAccounts(all = true) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://recalldatabase-728b.restdb.io/rest/accountinformation",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
        }

        $.ajax(settings).done(function (response) {
            for (account of response) {
                if (username == account.Username) {
                    console.log('true')
                    id = account._id
                    sessionStorage.setItem('id', id)
                    let currentAchievementsList = ['Brainfart', 'Weird Transmissions', 'Invoice', 'Familiar Melodies', 'Your Real Name']
                    console.log(currentAchievementsList)
                    updateAchievements(id, currentAchievementsList);
                } else {
                    console.log('false')
                }
            }
        });
    }
    function updateAchievements(id, currentAchievementsList) {
        var jsondata = {'Achievements': {'achievements': currentAchievementsList}};
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://recalldatabase-728b.restdb.io/rest/accountinformation/${id}`,
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

