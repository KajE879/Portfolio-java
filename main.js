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
document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('lightMode') === 'true') {
        document.body.classList.add('light-mode');
        document.getElementById('colorSwitchLabel').checked = true;
    }
});
document.getElementById('colorSwitchLabel').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('lightMode', 'true');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('lightMode', 'false');
    }
});

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


function handleContactClick() { 
    console.log('CV button was clicked.'); 
    location.href = 'Contact.html'; 
} 
function handleDownloadClick() { 
    console.log('Download button was clicked.'); 
    location.href = 'images/CV-KajvEs.pdf'; 
}
