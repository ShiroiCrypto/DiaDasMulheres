// Loading Screen Suave
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.main-content').classList.remove('hidden');
            document.querySelector('.loader').remove();
        }, 1000);
    }, 2500);
});

// Efeito de Pólen ao passar o mouse
document.querySelectorAll('.floral-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const particles = document.createElement('div');
        particles.className = 'pollen-particle';
        particles.style.left = `${e.clientX - btn.offsetLeft}px`;
        particles.style.top = `${e.clientY - btn.offsetTop}px`;
        btn.appendChild(particles);
        
        setTimeout(() => particles.remove(), 1000);
    });
});

// Navegação com Efeito de Transição
document.querySelectorAll('.floral-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.main-content').classList.add('hidden');
        
        setTimeout(() => {
            window.location.href = `${button.dataset.target}.html`;
        }, 800);
    });
});