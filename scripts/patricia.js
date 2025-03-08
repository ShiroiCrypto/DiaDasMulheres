// Efeito de batimento cardíaco interativo
document.querySelector('.heartbeat-animation').addEventListener('click', () => {
    const hearts = ['❤️', '💖', '💗'];
    const heart = document.createElement('div');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * 80 + 10}%`;
    heart.style.animation = `floatUp 2s forwards`;
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
});

// Adicionar animação CSS dinâmica
const style = document.createElement('style');
style.textContent = `
@keyframes floatUp {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
}
`;
document.head.appendChild(style);