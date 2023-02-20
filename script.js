var currentPage = window.location.pathname
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbarMenu')
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});

const banner = document.getElementById('banner')
bannerImage = document.getElementById('bannerImage')
var clicks = 0
const forget = new Audio('Assets/sounds/forget.wav')
banner.addEventListener('click', function() {
    clicks += 1
    if (clicks == 5) {
        forget.play()
        bannerImage.src = 'Assets/images/logo/bannerbroken.jpg'
        function oops() {
            alert('0_0...I think you thought too hard...whoops')
            var achievementUnlockedList = sessionStorage.getItem('achievements');
            if (achievementUnlockedList.includes('Brainfart')){
                return true
            } else {
                currentAchievementsList = JSON.parse(sessionStorage.getItem('achievements'));
                currentAchievementsList.push('Brainfart');
                sessionStorage.setItem('achievements', JSON.stringify(currentAchievementsList));
                alert('Achievement Unlocked: Brainfart')
                if (currentPage == 'account.html') {
                    location.reload()
                }
            }
        }
        setTimeout(oops, 1000);
        clicks = 0
        var achievementUnlockedList = sessionStorage.getItem('achievements');
    }
})

var nickname = sessionStorage.getItem('accountName');
window.addEventListener('load', function() {
    console.log('HelloWorld')
    document.getElementById('navbarAccount').innerHTML = nickname;
    var achievementUnlockedList = sessionStorage.getItem('achievements');
    if (currentPage == 'account.html') {
        document.getElementById('achievementAccount').innerHTML = nickname;
        if (achievementUnlockedList.includes('Brainfart')) {
            document.getElementById('brainfartImage').src = 'Assets/images/achievementone.png';
        } else {
            document.getElementById('brainfartImage').src = 'Assets/images/achievement.jpg';
        }
        if (achievementUnlockedList.includes('Invoice')) {
            document.getElementById('invoiceImage').src = 'Assets/images/achievementtwo.png';
        } else {
            document.getElementById('invoiceImage').src = 'Assets/images/achievement.jpg';
        }
        if (achievementUnlockedList.includes('Familiar Melodies')) {
            document.getElementById('familiarMelodiesImage').src = 'Assets/images/achievementthree.png';
        } else {
            document.getElementById('familiarMelodiesImage').src = 'Assets/images/achievement.jpg';
        }
    }
});

if (currentPage == 'encryption.html') {
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
                            location.href = 'soundtrack.html'
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
        if ((currentPage == 'messenger.html')||(currentPage == 'logone.html')||(currentPage == 'logtwo.html')||(currentPage == 'logthree.html')||(currentPage == 'logfour.html')) {
            ostBroken.innerHTML = 'OST'
            ostBroken.href = 'soundtrack.html'
        } else {
            ost.innerHTML = 'OST'
            ost.href = 'soundtrack.html'
        }
    } else {
        ostLogo.style.display = 'none'
        if ((currentPage == 'messenger.html')||(currentPage == 'logone.html')||(currentPage == 'logtwo.html')||(currentPage == 'logthree.html')||(currentPage == 'logfour.html')) {
            ostBroken.innerHTML = '???'
            ostBroken.href = 'encryption.html'
        } else {
            ost.innerHTML = '???'
            ost.href = 'encryption.html'
            document.getElementById('navbarOST').style.marginLeft = '-20px';
        }
    }
})

window.addEventListener('load', function() {
    if (currentPage == 'logone.html') {
        mysteriousLogsUnlocked = sessionStorage.getItem('mysteriousLogsUnlocked')
        if (mysteriousLogsUnlocked == 'true') {
            sessionStorage.setItem('log1Unlocked', true)
            return false
        } else {
            alert('Oh...well this looks interesting...')
            alert('Maybe if you look around more...you could find more stuff')
            sessionStorage.setItem('mysteriousLogsUnlocked', true)
            sessionStorage.setItem('log1Unlocked', true)
            return true
        }
    }

    if (currentPage == 'logtwo.html') {
        mysteriousLogsUnlocked = sessionStorage.getItem('mysteriousLogsUnlocked')
        if (mysteriousLogsUnlocked == 'true') {
            sessionStorage.setItem('log2Unlocked', true)
            return false
        } else {
            alert('Oh...well this looks interesting...')
            alert('Maybe if you look around more...you could find more stuff')
            sessionStorage.setItem('mysteriousLogsUnlocked', true)
            sessionStorage.setItem('log2Unlocked', true)
            return true
        }
    }

    if (currentPage == 'logthree.html') {
        mysteriousLogsUnlocked = sessionStorage.getItem('mysteriousLogsUnlocked')
        if (mysteriousLogsUnlocked == 'true') {
            sessionStorage.setItem('log3Unlocked', true)
            return false
        } else {
            alert('Oh...well this looks interesting...')
            alert('Maybe if you look around more...you could find more stuff')
            sessionStorage.setItem('mysteriousLogsUnlocked', true)
            sessionStorage.setItem('log3Unlocked', true)
            return true
        }
    }
})

window.addEventListener('load', function() {
    mysteriousLogs = document.getElementById('navbarMysteriousLogs')
    mysteriousLogsLogo = document.getElementById('logIcon')
    mysteriousLogsCheck = sessionStorage.getItem('mysteriousLogsUnlocked')
    mysteriousLogsBroken = document.getElementById('navbarMysteriousLogsBroke')
    if (mysteriousLogsCheck == 'true') {
        mysteriousLogsLogo.style.display = 'block'
        if ((currentPage == 'messenger.html')||(currentPage == 'logone.html')||(currentPage == 'logtwo.html')||(currentPage == 'logthree.html')||(currentPage == 'logfour.html')) {
            mysteriousLogsBroken.innerHTML = 'Logs'
            mysteriousLogsBroken.href = 'mysteriouslogs.html'
        } else {
            mysteriousLogs.innerHTML = 'Logs'
            mysteriousLogs.href = 'mysteriouslogs.html'
        }
    } else {
        mysteriousLogsLogo.style.display = 'none'
        if ((currentPage == 'messenger.html')||(currentPage == 'logone.html')||(currentPage == 'logtwo.html')||(currentPage == 'logthree.html')||(currentPage == 'logfour.html')) {
            mysteriousLogsBroken.innerHTML = '???'
            mysteriousLogs.addEventListener('click', function() {
                alert('Hmm...Nothing Happened')
            })
        } else {
            mysteriousLogs.innerHTML = '???'
            mysteriousLogs.addEventListener('click', function() {
                alert('Hmm...Nothing Happened')
            })
            document.getElementById('navbarMysteriousLogs').style.marginLeft = '-20px';
        }
    }
})

if (currentPage == 'home.html') {
    submitMessage = document.getElementById('deviceSubmitButton')
    submitMessage.addEventListener('click', function(e) {
        var y = document.forms['contactDevice']['Name'].value.toLowerCase();
        if (y == 'raymond white') {
            y = document.forms['contactDevice']['Email'].value.toLowerCase();
            if (y == 'renotech@gmail.com') {
                y = document.forms['contactDevice']['Message'].value.toLowerCase();
                if (y == 'evolution is the key to progression') {
                    location.href='logthree.html'
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    })
}

window.addEventListener('load', function(e) {
    if (currentPage == 'mysteriouslogs.html') {
        entryLog1 = document.getElementById('entryLog1')
        entryLog2 = document.getElementById('entryLog2')
        entryLog3 = document.getElementById('entryLog3')
        entryLog4 = document.getElementById('entryLog4')
        log1Status = sessionStorage.getItem('log1Unlocked')
        log2Status = sessionStorage.getItem('log2Unlocked')
        log3Status = sessionStorage.getItem('log3Unlocked')
        log4Status = sessionStorage.getItem('log4Unlocked')
        if (log1Status == 'true') {
            entryLog1.innerHTML = 'Entry Log 1'
            entryLog1.href = 'logone.html'
        } else {
            return false
        }
        if (log2Status == 'true') {
            entryLog2.innerHTML = 'Entry Log 2'
            entryLog2.href = 'logtwo.html'
        }
        if (log3Status == 'true') {
            entryLog3.innerHTML = 'Entry Log 3'
            entryLog3.href = 'logthree.html'
        }
        if (log4Status == 'true') {
            entryLog4.innerHTML = 'Entry Log 4'
            entryLog4.href = 'logfour.html'
        }
        if ((log1Status == 'true') && (log2Status == 'true') && (log3Status == 'true')) {
            theFinalPiece = document.getElementById('theFinalPiece')
            theFinalPiece.innerHTML = '???'
        }
    } else {
        return true
    }
})

window.addEventListener('load', function(e) {
    if (currentPage == 'logfour.html') {
        var achievementUnlockedList = sessionStorage.getItem('achievements');
        if (achievementUnlockedList.includes('Invoice')){
            return true
        } else {
            currentAchievementsList = JSON.parse(sessionStorage.getItem('achievements'));
            currentAchievementsList.push('Invoice');
            sessionStorage.setItem('achievements', JSON.stringify(currentAchievementsList));
            alert('Achievement Unlocked: Invoice')
            sessionStorage.setItem('log4Unlocked', true)
        }
    }
})

