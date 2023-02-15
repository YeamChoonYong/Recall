var currentPage = window.location.pathname
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbarMenu')
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});

var nickname = sessionStorage.getItem('accountName');
window.addEventListener('load', function() {
    console.log('HelloWorld')
    document.getElementById('navbarAccount').innerHTML = nickname;
    if (currentPage == '/account.html') {
        document.getElementById('achievementAccount').innerHTML = nickname
    }
});

if (currentPage == '/encryption.html') {
    console.log('code page functional')
    const submitCode = document.getElementById('codeSubmission');
    submitCode.addEventListener(
        'click', function(e) {
            var x = document.forms["secretCode"]["slot1"].value.toLowerCase();
            if (x == "a") {
                x = document.forms['secretCode']['slot2'].value.toLowerCase();
                if (x == "s") {
                    x = document.forms['secretCode']['slot3'].value.toLowerCase();
                    if (x == 'd') {
                        x = document.forms['secretCode']['slot4'].value.toLowerCase();
                        if (x == 'r') {
                            alert("Code Valid...Initiating Restart...");
                            var ostPageUnlocked = true;
                            sessionStorage.setItem('ostPageUnlocked', ostPageUnlocked)
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
    if (ostCheck == 'true') {
        ost.innerHTML = 'OST'
        ostLogo.style.display = 'block'
        ost.href = 'soundtrack.html'
    } else {
        ost.innerHTML = '???'
        ostLogo.style.display = 'none'
        ost.href = 'encryption.html'
        document.getElementById('navbarOST').style.marginLeft = '-20px';
    }
})
