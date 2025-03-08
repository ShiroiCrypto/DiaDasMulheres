// Interatividade do Quilt
document.querySelectorAll('.quilt-square').forEach(square => {
    square.addEventListener('click', () => {
        const message = square.dataset.message;
        const toast = document.createElement('div');
        toast.className = 'symbolic-toast';
        toast.textContent = `💮 ${message} transmitida através das gerações 💮`;
        
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    });
});

// Efeito de Revelação Progressiva
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `sectionReveal 1s ${entry.target.dataset.delay || '0s'} forwards`;
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.symbolic-section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.dataset.delay = `${index * 0.2}s`;
    observer.observe(section);
});

// Animação CSS Dinâmica
const style = document.createElement('style');
style.textContent = `
@keyframes sectionReveal {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.symbolic-toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(107, 140, 170, 0.95);
    color: white;
    padding: 1rem 2rem;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    animation: toastIn 0.5s;
}

@keyframes toastIn {
    from { bottom: -50px; opacity: 0; }
    to { bottom: 20px; opacity: 1; }
}
`;

document.head.appendChild(style);
// Efeito interativo ao clicar na mensagem
document.querySelector('.heart-message').addEventListener('click', () => {
    const explosion = document.createElement('div');
    explosion.className = 'heart-explosion';
    document.body.appendChild(explosion);
    
    setTimeout(() => explosion.remove(), 1000);
});

// Criar explosão de corações
document.styleSheets[0].insertRule(`
@keyframes explode {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(10); opacity: 0; }
}

.heart-explosion {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle, transparent 50%, rgba(255,107,107,0.3) 100%);
    animation: explode 1s ease-out;
    pointer-events: none;
    z-index: 999;
}
`, document.styleSheets[0].cssRules.length);