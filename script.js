let currentSlide = 0; // Slide-ul curent
let intervalId = null; // ID-ul intervalului pentru slideshow

function startSlideShow() {
    const slides = document.querySelectorAll('#slideshow img'); // Selectează toate imaginile
    if (intervalId) {
        // Dacă slideshow-ul rulează, oprește-l
        clearInterval(intervalId);
        intervalId = null;
        slides.forEach((slide) => (slide.style.display = 'none')); // Ascunde toate imaginile
        slides[0].style.display = 'block'; // Afișează prima imagine
        console.log("Slideshow oprit.");
    } else {
        // Dacă slideshow-ul nu rulează, pornește-l
        intervalId = setInterval(() => {
            slides[currentSlide].style.display = 'none'; // Ascunde imaginea curentă
            currentSlide = (currentSlide + 1) % slides.length; // Treci la următorul slide
            slides[currentSlide].style.display = 'block'; // Afișează imaginea curentă
        }, 3000);
        console.log("Slideshow pornit.");
    }
}

// Adaugă evenimentul de dublu click pe titlu
document.querySelector('#monitorizare h2').addEventListener('dblclick', startSlideShow);
