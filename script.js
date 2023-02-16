var currentPage = window.location.pathname
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbarMenu')
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});

const banner = document.getElementById('banner')
var clicks = 0
const forget = new Audio('/assets/sounds/forget.wav')
banner.addEventListener('click', function() {
    clicks += 1
    if (clicks == 5) {
        forget.play()
        alert('0_0...I think you thought too hard...whoops')
        clicks = 0
        var achievementUnlockedList = sessionStorage.getItem('achievements');
        if (achievementUnlockedList.includes('Brainfart')){
            return true
        } else {
            currentAchievementsList = JSON.parse(sessionStorage.getItem('achievements'));
            currentAchievementsList.push('Brainfart');
            sessionStorage.setItem('achievements', JSON.stringify(currentAchievementsList));
            alert('Achievement Unlocked: Brainfart')
            if (currentPage == '/account.html') {
                location.reload()
            }
        }
    }
})

var nickname = sessionStorage.getItem('accountName');
window.addEventListener('load', function() {
    console.log('HelloWorld')
    document.getElementById('navbarAccount').innerHTML = nickname;
    var achievementUnlockedList = sessionStorage.getItem('achievements');
    if (currentPage == '/account.html') {
        document.getElementById('achievementAccount').innerHTML = nickname;
        if (achievementUnlockedList.includes('Brainfart')) {
            document.getElementById('brainfart').innerHTML = 'Brainfart';
        } else {
            document.getElementById('brainfart').innerHTML = '???';
        }
        if (achievementUnlockedList.includes('Invoice')) {
            document.getElementById('invoice').innerHTML = 'Invoice';
        } else {
            document.getElementById('invoice').innerHTML = '???';
        }
        if (achievementUnlockedList.includes('Familiar Melodies')) {
            document.getElementById('familiarMelodies').innerHTML = 'Familiar Melodies';
        } else {
            document.getElementById('familiarMelodies').innerHTML = '???';
        }
    }
});

if (currentPage == '/encryption.html') {
    console.log('code page functional')
    const submitCode = document.getElementById('codeSubmission');
    submitCode.addEventListener(
        'click', function(e) {
            var x = document.forms["secretCode"]["slot1"].value.toLowerCase();
            if (x == "x") {
                x = document.forms['secretCode']['slot2'].value.toLowerCase();
                if (x == "e") {
                    x = document.forms['secretCode']['slot3'].value.toLowerCase();
                    if (x == 'n') {
                        x = document.forms['secretCode']['slot4'].value.toLowerCase();
                        if (x == 'a') {
                            alert("Code Valid...Initiating Restart...");
                            var ostPageUnlocked = true;
                            sessionStorage.setItem('ostPageUnlocked', ostPageUnlocked)
                            currentAchievementsList = JSON.parse(sessionStorage.getItem('achievements'));
                            currentAchievementsList.push('Familiar Melodies');
                            sessionStorage.setItem('achievements', JSON.stringify(currentAchievementsList));
                            alert('Achievement Unlocked: Familiar Melodies')
                            location.href = '/soundtrack.html'
                            return true;
                        } else {
                            alert('Invalid Code, please try again ' + sessionStorage.getItem('accountName'));
                            return false;
                        }
                    } else {
                        alert('Invalid Code, please try again ' + sessionStorage.getItem('accountName'));
                        return false;
                    }
                } else {
                    alert('Invalid Code, please try again ' + sessionStorage.getItem('accountName'));
                    return false;
                }
            } else {
                alert('Invalid Code, please try again ' + sessionStorage.getItem('accountName'));
                return false;
            }
        }
    )
}

window.addEventListener('load', function() {
    ost = document.getElementById('navbarOST')
    ostLogo = document.getElementById('musicIcon')
    ostCheck = sessionStorage.getItem('ostPageUnlocked');
    ostBroken = document.getElementById('navbarOSTBroke')
    if (ostCheck == 'true') {
        ostLogo.style.display = 'block'
        if (currentPage == '/messenger.html') {
            ostBroken.innerHTML = 'OST'
            ostBroken.href = 'soundtrack.html'
        } else {
            ost.innerHTML = 'OST'
            ost.href = 'soundtrack.html'
        }
    } else {
        ostLogo.style.display = 'none'
        if (currentPage == '/messenger.html') {
            ostBroken.innerHTML = '???'
            ostBroken.href = 'encryption.html'
        } else {
            ost.innerHTML = '???'
            ost.href = 'encryption.html'
            document.getElementById('navbarOST').style.marginLeft = '-20px';
        }
    }
})

