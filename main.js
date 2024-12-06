// Cookie consent
function acceptCookies() {
    const consentPopup = document.querySelector('.cookie-consent');
    const checkbox = document.getElementById('accept-cookies');
    if (checkbox.checked) {
        consentPopup.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
        console.log('Cookies are accepted.');
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


// Toggle light mode
function toggleLightMode() {
    const lightModeEnabled = localStorage.getItem('lightMode') === 'true';
    document.body.classList.toggle('light-mode', lightModeEnabled);
}
function switchLightMode() {
    const lightModeEnabled = !document.body.classList.contains('light-mode');
    document.body.classList.toggle('light-mode', lightModeEnabled);
    localStorage.setItem('lightMode', lightModeEnabled);
}
document.addEventListener('DOMContentLoaded', toggleLightMode);



// console.log 
const form = document.querySelector('#mijnFormulier');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulier verzonden');
    const nameInput = document.querySelector('input[name="name"]').value;
    const emailInput = document.querySelector('input[name="email"]').value;
    const messageInput = document.querySelector('textarea[name="message"]').value;
    console.log('Naam:', nameInput);
    console.log('E-mail:', emailInput);
    console.log('Bericht:', messageInput);
});



// Hamburger
function toggleMenu() {
    document.getElementById("mobile-nav").classList.toggle("show-mobile-nav");
}
