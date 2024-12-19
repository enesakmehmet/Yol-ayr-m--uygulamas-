// script.js
function yolSec(secilenYol) {
    const result = document.getElementById("result");
    if (secilenYol === 1 || secilenYol === 2 || secilenYol === 3) {
        result.textContent = `Seçilen yol ${secilenYol}. yoldur.`;
        result.style.color = "#0f0";
    } else {
        result.textContent = "Lütfen geçerli bir yol seçiniz!";
        result.style.color = "#f00";
    }
}
