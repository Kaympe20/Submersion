document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.wave-section');
    let lastScrollPosition = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        lastScrollPosition = scrollPosition;

        sections.forEach((section, index) => {
        const translateY = Math.max(100 - ((scrollPosition - (windowHeight * index)) / windowHeight * 100), 0);
        section.style.transform = `translateY(${translateY}%)`;
        });
    });
});