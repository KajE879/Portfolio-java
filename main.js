// Cookie consent
function acceptCookies() {
    const consentPopup = document.querySelector('.cookie-consent');
    const checkbox = document.getElementById('accept-cookies');
    if (checkbox.checked) {
        if (consentPopup) {
            consentPopup.style.display = 'none';
        }
        localStorage.setItem('cookiesAccepted', 'true');
        console.log('Cookies are accepted.');
    } else {
        alert("Please accept the cookies to proceed.");
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const consentPopup = document.querySelector('.cookie-consent');
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        if (consentPopup) {
            consentPopup.style.display = 'none';
        }
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
if (form) {
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
} else {
    console.error('Element with ID "mijnFormulier" not found.');
}

// Hamburger
function toggleMenu() {
    document.getElementById("mobile-nav").classList.toggle("show-mobile-nav");
}

// Countdown
function startCountdown(endDate) {
    var countDownDate = new Date(endDate).getTime();
    setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML = "Vakantie in: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      if (distance < 0) {
        clearInterval(this);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
}
startCountdown("Dec 20, 2024 13:15:00");

// tijdgebonden begroeting
function begroetBezoeker() { 
    var datum = new Date(); 
    var uur = datum.getHours(); 
    var begroeting; 
    if (uur >= 0 && uur < 6) { 
        begroeting = "Goedenacht"; 
    } else if (uur >= 6 && uur < 12) { 
        begroeting = "Goedemorgen"; 
    } else if (uur >= 12 && uur < 18) { 
        begroeting = "Goedemiddag"; 
    } else if (uur >= 18 && uur < 24) { 
        begroeting = "Goedenavond"; 
    } 
    document.getElementById("begroeting").innerText = begroeting + ", Ik ben Kaj - Software Developer"; 
} 
window.onload = begroetBezoeker;


  
