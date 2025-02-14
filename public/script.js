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

    const wavingWord = (word, timingDelay = 0.1) => {
        const wavingWord = document.getElementById('wavingWord');
        for (let i = 0; i < word.length; i++) {
        const wordEl = document.createElement('div');
        wordEl.classList.add('word');
        wordEl.innerHTML = word[i];
        wordEl.style.animationDelay = `${(i * timingDelay).toFixed(1)}s`;
        wavingWord.append(wordEl);
        }
    };

    wavingWord('SUBMERSION');
});