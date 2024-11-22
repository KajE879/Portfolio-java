function changcolor() {
    document.getElementById("h1").style.color = "#006eb0";
}
setTimeout(changcolor, 3000);

function acceptCookies() {
    const consentPopup = document.querySelector('.cookie-consent');
    const checkbox = document.getElementById('accept-cookies');
    if (checkbox.checked) {
        consentPopup.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    } else {
        alert("Please accept the cookies to proceed.");
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const consentPopup = document.querySelector('.cookie-consent');
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        consentPopup.style.display = 'none';
    }
});


