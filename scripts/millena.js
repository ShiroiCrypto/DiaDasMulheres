// Efeito de digitação no console
function typeConsoleText() {
    const consoleElement = document.querySelector('.debug-console');
    const lines = Array.from(consoleElement.children);
    let delay = 0;
    
    lines.forEach(line => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.transition = 'opacity 1s';
            line.style.opacity = '1';
        }, delay);
        delay += 500;
    });
}

// Efeito de hover nos cards de skill
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 100;
        const y = (e.clientY - rect.top) / rect.height * 100;
        
        card.style.background = `
            radial-gradient(at ${x}% ${y}%, 
            rgba(255,215,0,0.2), 
            rgba(255,255,255,0.05))
        `;
    });
});

document.addEventListener('DOMContentLoaded', typeConsoleText);