
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