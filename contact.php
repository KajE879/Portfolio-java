<!DOCTYPE html>
<html lang="en">
<head>
    <title>Contact</title>
    <link rel="stylesheet" href="main.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<?php require "nav-head.php"?>
    <main class="social-contact">
        <div class="contacts">
            <h1>Contact:</h1>
            <p>Private-Email: 
                <a class="effect" href="mailto:kajvanes8@gmail.com">kajvanes8@gmail.com</a>
            </p>
            <p>School-Email: 
                <a class="effect" href="mailto:9024897@student.zadkine.nl">9024897@student.zadkine.nl</a>
            </p>
            <p>Phone-number: 
                <a class="effect" href="tel:+3114103021">+31 6 14103021</a>
            </p>
            <div class="contact-form">
                <h2>Send me a massage</h2>
                <form id="mijnFormulier">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
        <div class="socials">
            <a href="https://www.instagram.com/kaje_010/" aria-label="Instagram profile for kaje_010">
                <img src="images/instagram.png" alt="Instagram logo">
            </a>
            <a href="https://github.com/KajE879" aria-label="Github profile for KajE879">
                <img src="images/github.png" alt="Github logo">
            </a>
            <a href="https://www.facebook.com/profile.php?id=100084433671737" aria-label="Facebook profile for Kaj van Es">
                <img src="images/facebook.png" alt="Facebook logo">
            </a>
        </div>
    </main>
    <?php require "footer.php"?>
    <script src="main.js"></script>
</body>
</html>