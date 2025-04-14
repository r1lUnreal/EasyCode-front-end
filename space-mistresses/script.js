// Анимация для карточек миссий
document.querySelectorAll('.mission-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 0 15px var(--neon-pink)';
    });
    card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none';
    });
});

// Плавный скролл для меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});