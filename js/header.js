
const header = document.querySelector('header');
function getDistance(x, y, rect) {
    const dx = x < rect.left ? rect.left - x : x > rect.right ? x - rect.right : 0;
    const dy = y < rect.top ? rect.top - y : y > rect.bottom ? y - rect.bottom : 0;
    return Math.sqrt(dx * dx + dy * dy);
}

document.addEventListener('mousemove', function(e) {
    const headerRect = header.getBoundingClientRect();

    const distance = getDistance(e.clientX, e.clientY, headerRect);

    if (distance < 100) {
        header.style.transform = 'translateY(0)';
    } else {
        header.style.transform = 'translateY(-60px)';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.glitch-word').forEach(link => {
        link.innerHTML = link.textContent.split('').map(letter => `<span class="glitch-letter">${letter}</span>`).join('');
    });

    document.querySelectorAll('.glitch-word').forEach(word => {
        word.addEventListener('mouseenter', () => {
            word.querySelectorAll('.glitch-letter').forEach(letter => {
                let randomDelay = Math.random() * 0.5;
                let randomDuration = Math.random() * 1;
                letter.style.animation = `glitch ${randomDuration}s ${randomDelay}s both`;

                letter.addEventListener('animationend', () => {
                    letter.style.animation = `underline infinite 0.8s both`;
                });
            });
        });

        word.addEventListener('mouseleave', () => {
            word.querySelectorAll('.glitch-letter').forEach(letter => {
                letter.style.animation = 'none';
            });
        });
    });
});
