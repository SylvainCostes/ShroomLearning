//ce script contiennt  :
// afficher un color picker
// changer la couleur du color picker etc
// empecher que le chiffre rgb soit au dessus de 255

document.addEventListener('DOMContentLoaded', function() {
    function setColor() {
        var colorPicker = document.getElementById('colorPicker');
        var color = colorPicker.value;
        document.getElementById('R').value = parseInt(color.substr(1, 2), 16);
        document.getElementById('G').value = parseInt(color.substr(3, 2), 16);
        document.getElementById('B').value = parseInt(color.substr(5, 2), 16);
    }

    function majColorPicker() {
        var r = document.getElementById('R').value;
        var g = document.getElementById('G').value;
        var b = document.getElementById('B').value;

        var hexColor = "#" + toHex(r) + toHex(g) + toHex(b);
        document.getElementById('colorPicker').value = hexColor;
    }

    //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb code trouvé ici, pratique
    function toHex(n) {
        var hex = parseInt(n, 10).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    //remplace les valeurs du color picker par les valeurs des inputs dynamiquement !
    document.getElementById('R').addEventListener('input', majColorPicker);
    document.getElementById('G').addEventListener('input', majColorPicker);
    document.getElementById('B').addEventListener('input', majColorPicker);

    
    document.getElementById('colorPicker').addEventListener('change', setColor);

    // script juste pour empecher que le chiffre soit au dessus de 255 ça le change automatiquement à 255
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (parseInt(this.value) > 255) {
                this.value = 255;
            } else if (parseInt(this.value) < 0) {
                this.value = 0;
            }
        });
    });
});