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