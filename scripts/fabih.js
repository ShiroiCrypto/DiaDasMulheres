document.querySelector('.heart-button').addEventListener('click', () => {
    const container = document.querySelector('.hearts-container');
    container.innerHTML = '';
    
    for(let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.textContent = '❤️';
        heart.classList.add('floating-heart');
        container.appendChild(heart);
    }
});

// Adiciona estilo dinâmico
const style = document.createElement('style');
style.textContent = `
.floating-heart {
    position: absolute;
    animation: float 3s ease-out forwards;
    font-size: 1.5rem;
}

@keyframes float {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-100vh) scale(0); opacity: 0; }
}
`;
document.head.appendChild(style);