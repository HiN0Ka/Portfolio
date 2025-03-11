//Clock
const joursSemaine = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

function mettreAJourHorloge() {
    let date = new Date();
    let jour = date.getDay();
    let heures = date.getHours();
    let minutes = date.getMinutes();

    heures = heures < 10 ? "0" + heures : heures;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.querySelector('.clock .day').innerHTML = joursSemaine[jour];
    document.querySelector('.clock .hours').innerHTML = heures;
    document.querySelector('.clock .minutes').innerHTML = minutes;

    setTimeout(mettreAJourHorloge, 1000);
}
document.addEventListener("DOMContentLoaded", mettreAJourHorloge);

//---

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section, .contact-container");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
