// Countdown
const fechaBoda = new Date("October 8, 2025 18:00:00").getTime();

const countdown = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    if (distancia < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown .timer").innerHTML = "¡Es el gran día!";
    }
}, 1000);

document.querySelector(".calendario").addEventListener("click", () => {
    const start = "20251008T180000";
    const end = "20251008T230000";
    const title = "Boda Brenda & Guillermo";
    const details = "Invitación web";
    const location = "Ciudad";

    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
DTSTART:${start}
DTEND:${end}
END:VEVENT
END:VCALENDAR
`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "boda.ics";
    link.click();
});

const audio = document.getElementById('audio');
const barras = document.querySelectorAll('.boton-musica .barra');

let reproducido = false;

// Reproducir música al hacer click en cualquier parte de la página
document.addEventListener('click', () => {
    if (!reproducido) {
        audio.play();
        barras.forEach(barra => barra.style.animationPlayState = 'running');
        reproducido = true;
    }
});

const portada = document.querySelector('.portada');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

observer.observe(portada);