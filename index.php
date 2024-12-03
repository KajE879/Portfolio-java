<!DOCTYPE html>
<html lang="en">
<head>
    <title>Home</title>
    <link rel="stylesheet" href="main.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="getTimeBasedGreeting()">
    <?php require "nav-head.php"?>
    <div class="index-main">
        <article>
            <h1 id="begroeting"></h1> 
            <p>Ik ben Kaj, een student softwareontwikkeling aan het Techniek College in Rotterdam Oost. Ik heb een passie voor programmeren
                 en werk graag in teamverband volgens de Scrum-methodologie. Door mijn opleiding en praktijkervaring ontwikkel ik zowel 
                 technische vaardigheden als een goed begrip van agile processen, wat mij helpt om effectief samen te werken en innovatieve 
                 oplossingen te ontwikkelen.</p>
                 <div class="buttons">
                    <button onclick="handleContactClick()" class="beffect">
                        <a href="Contact.html">Neem contact op</a>
                    </button>
                    <button onclick="handleDownloadClick()" class="beffect">
                        <a href="images/CV-KajvEs.pdf" download>Download CV</a>
                    </button>
                </div>                
        </article>
        <div>
            <img class="foto-me" src="images/Kaj.jpeg" alt="A foto of me" >      
        </div>
    </div>
    <div class="cookie-consent">
        <div class="cookie-content">
            <p>We use cookies to enhance your browsing experience. By continuing to use our site, you consent to our cookie policy.</p>
            <div class="check">
                <input type="checkbox" id="accept-cookies">
                <label for="accept-cookies">Accept Cookies</label>
                <button onclick="acceptCookies()">Okay</button>
            </div>  
        </div>
    </div>
    <footer>
        <label class="switch">
            <input type="checkbox" id="colorSwitchLabel">
            <span class="slider"></span>
        </label>
    </footer>
    <script src="main.js"></script>
    <script src="begroeting.js"></script>
</body>
</html>

