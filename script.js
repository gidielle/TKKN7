document.getElementById("form-iscrizione").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const personaggio = document.getElementById("personaggio").value;

    if (nome && email && personaggio) {
        document.getElementById("conferma").innerHTML = 
            `<div class="box-success">✔ Grazie ${nome}! Sei iscritto al torneo con ${personaggio}. Ti invieremo una mail a ${email}.</div>`;
        this.reset();
    } else {
        document.getElementById("conferma").innerText = 
            "Per favore, compila tutti i campi.";
    }
});

const evento = new Date("2025-08-31T20:00:00");
setInterval(() => {
    const diff = evento - new Date();
    const giorni = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = 
        `🕒 Mancano ${giorni} giorni al torneo!`;
}, 1000);

const immagini = {
    "Jin": "img/jin.png",
    "Kazuya": "img/kazuya.png",
    "Asuka": "img/asuka.png",
    "Hwoarang": "img/hwoarang.png",
    "Paul": "img/paul.png",
    "Ling": "img/ling.png"
};

document.getElementById("personaggio").addEventListener("change", function() {
    const scelta = this.value;
    const img = document.getElementById("img-personaggio");
    if (immagini[scelta]) {
        img.src = immagini[scelta];
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
});
