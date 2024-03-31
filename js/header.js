
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
        header.style.transform = 'translateY(-80px)';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.querySelectorAll('.glitch-word').forEach(word => {
            word.innerHTML = word.textContent.split('').map(letter => `<span class="glitch-letter">${letter}</span>`).join('');

            link.addEventListener('mouseenter', () => {
                word.querySelectorAll('.glitch-letter').forEach(letter => {
                    let randomDelay = Math.random() * 0.5;
                    let randomDuration = Math.random() * 1;
                    letter.style.animation = `glitch ${randomDuration}s ${randomDelay}s both`;

                    letter.addEventListener('animationend', () => {
                        letter.style.animation = `underline infinite 0.8s both`;
                    });
                });
            });

            link.addEventListener('mouseleave', () => {
                word.querySelectorAll('.glitch-letter').forEach(letter => {
                    letter.style.animation = 'none';
                });
            });
        });
    });
});
