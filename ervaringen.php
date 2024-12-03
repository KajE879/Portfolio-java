<!DOCTYPE html>
<html lang="en"> 
<head>
    <title>Ervaringen</title>
    <link rel="stylesheet" href="main.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <?php require "nav-head.php"?>
    <div class="erv-main">
        <div>
            <a href="images/Video.mp4">
                <h2 class="effect">Interview:</h2>
            </a>
            <video controls>
                <source src="images/Video.mp4" type="video/mp4">
            </video>
        </div>  
        <table>
            <thead>
                <tr>
                    <th>Tijd</th>
                    <th>Niveau</th>
                    <th>Plaats</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Sep 2020 - Jul 2024</td>
                    <td>Havo 1 t/m 4</td>
                    <td>Comenius college capelle</td>
                </tr>
                <tr>
                    <td>Sep 2024 - Nu</td>
                    <td>Mbo 4</td>
                    <td>Techniek college Rotterdam</td>
                </tr>
            </tbody>
        </table>
    </div>
    <footer>
        <label class="switch">
            <input type="checkbox" id="colorSwitchLabel">
            <span class="slider"></span>
        </label>
    </footer>
    <script src="main.js"></script>
</body>
</html>