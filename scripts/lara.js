// ===== SCRIPT ESPECÍFICO PARA LARA - EFEITOS AZUIS AVANÇADOS =====

// ===== EFEITO DE FLORES CAINDO QUANDO CLICAR NO BOTÃO =====
let flowerClickCount = 0;
function createFlowers() {
    const flores = ['🌸', '🌼', '🌺', '🌻', '🌷', '💙', '✨'];
    const cores = ['#4a90e2', '#5ba3f0', '#6bb6ff', '#7cc9ff', '#8ddcff', '#74b9ff', '#0984e3'];
    const container = document.querySelector('.interacao-azul');

    flowerClickCount++;
    if (flowerClickCount === 8) {
        window.location.href = 'galeria.html';
    }

    for (let i = 0; i < 10; i++) {
        const flor = document.createElement('div');
        flor.className = 'flor-azul';
        flor.style.left = `50%`;
        flor.style.top = `50%`;
        flor.style.fontSize = `${Math.random() * 20 + 15}px`;
        flor.style.color = cores[Math.floor(Math.random() * cores.length)];
        flor.textContent = flores[Math.floor(Math.random() * flores.length)];
        container.appendChild(flor);

        const duration = Math.random() * 1500 + 1500;
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;
        const rotate = (Math.random() - 0.5) * 360;

        flor.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: `translate(-50%, -50%) translate(${moveX}px, ${moveY}px) rotate(${rotate}deg) scale(0.5)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'ease-out',
            fill: 'forwards'
        });

        setTimeout(() => flor.remove(), duration);
    }

    createPetalSound();
}

// ===== EFEITO DE SOM VISUAL =====
function createPetalSound() {
    const container = document.querySelector('.interacao-azul');
    for (let i = 0; i < 3; i++) {
        const soundWave = document.createElement('div');
        soundWave.className = 'sound-wave';
        soundWave.style.animationDelay = `${i * 0.2}s`;
        container.appendChild(soundWave);
        setTimeout(() => soundWave.remove(), 1200);
    }
}

// ===== EFEITO DE FLORES FLUTUANTES NO FUNDO =====
function createBackgroundFlowers() {
    const flores = ['🌸', '🌼', '✨'];
    let lastFrame = 0;

    function animateBackground(timestamp) {
        if (timestamp - lastFrame >= 2000) {
            if (Math.random() > 0.7) {
                const flor = document.createElement('div');
                flor.className = 'background-flor';
                flor.style.left = `${Math.random() * 100}%`;
                flor.textContent = flores[Math.floor(Math.random() * flores.length)];
                document.body.appendChild(flor);

                setTimeout(() => {
                    flor.style.transform = `translateY(-100vh) translateX(${(Math.random() - 0.5) * 50}px)`;
                    flor.style.opacity = '0';
                }, 100);

                setTimeout(() => flor.remove(), 6000);
            }
            lastFrame = timestamp;
        }
        requestAnimationFrame(animateBackground);
    }

    requestAnimationFrame(animateBackground);
}

// ===== EFEITO DE ONDAS AZUIS NO HOVER DOS CARDS =====
function addWaveEffect() {
    const cards = document.querySelectorAll('.card-qualidade');

    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', (e) => {
            const wave = document.createElement('div');
            wave.className = 'wave-azul';
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            wave.style.left = `${x}px`;
            wave.style.top = `${y}px`;
            card.appendChild(wave);
            setTimeout(() => wave.remove(), 800);
        });

        card.addEventListener('touchstart', (e) => {
            const wave = document.createElement('div');
            wave.className = 'wave-azul';
            const rect = card.getBoundingClientRect();
            const touch = e.touches[0];
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            wave.style.left = `${x}px`;
            wave.style.top = `${y}px`;
            card.appendChild(wave);
            setTimeout(() => wave.remove(), 800);
        });

        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// ===== EFEITO DE PARTÍCULAS INTERATIVAS =====
function createInteractiveParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);

    let particleCount = 0;
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95 && particleCount < 20) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${e.clientX}px`;
            particle.style.top = `${e.clientY}px`;
            particlesContainer.appendChild(particle);
            particleCount++;
            setTimeout(() => {
                particle.remove();
                particleCount--;
            }, 2000);
        }
    });
}

// ===== EFEITO DE TEXTO TIPOGRÁFICO =====
function addTypingEffect() {
    const titles = document.querySelectorAll('.titulo-principal');
    titles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        title.classList.add('typing');
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                title.classList.remove('typing');
            }
        };
        setTimeout(typeWriter, 500);
    });
}

// ===== EFEITO DE SCROLL SUAVE =====
function addSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== EFEITO DE PRELOADER =====
function addPreloaderEffect() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="preloader-flor">🌸</div>';
    document.body.appendChild(preloader);
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 500);
    }, 1000);
}

// ===== ANIMAÇÕES CSS DINÂMICAS =====
function addDynamicAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes waveAzul {
            0% {
                transform: scale(0);
                opacity: 0.8;
            }
            100% {
                transform: scale(3);
                opacity: 0;
            }
        }

        @keyframes cair {
            0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(0.5);
                opacity: 0;
            }
        }

        @keyframes soundWave {
            0% {
                width: 0;
                height: 0;
                opacity: 0.6;
            }
            100% {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }

        @keyframes particleFade {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(0);
                opacity: 0;
            }
        }

        @keyframes backgroundFlor {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0.6;
            }
            100% {
                transform: translateY(-100vh) translateX(${(Math.random() - 0.5) * 50}px);
                opacity: 0;
            }
        }

        .flor-azul {
            position: absolute;
            pointer-events: none;
            z-index: 1000;
            animation: cair linear forwards;
        }

        .sound-wave {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border: 2px solid rgba(74, 144, 226, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: soundWave 1s ease-out forwards;
        }

        .background-flor {
            position: fixed;
            font-size: 20px;
            color: #d0e7ff;
            opacity: 0.6;
            pointer-events: none;
            z-index: -1;
            animation: backgroundFlor 6s linear forwards;
        }

        .wave-azul {
            position: absolute;
            width: 0;
            height: 0;
            background: radial-gradient(circle, rgba(74, 144, 226, 0.2) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            pointer-events: none;
            animation: waveAzul 0.8s ease-out forwards;
        }

        .particle {
            position: fixed;
            width: 4px;
            height: 4px;
            background: #4a90e2;
            border-radius: 50%;
            pointer-events: none;
            animation: particleFade 2s ease-out forwards;
        }

        .particles-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }

        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #ffffff 0%, #e8f4fd 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.5s ease;
        }

        .preloader-flor {
            font-size: 2rem;
            color: #4a90e2;
            animation: iconFloat 1.5s ease-in-out infinite;
        }

        .typing {
            overflow: hidden;
            border-right: 2px solid var(--azul-lara);
        }
    `;
    document.head.appendChild(style);
}

// ===== INICIALIZAR TODOS OS EFEITOS =====
document.addEventListener('DOMContentLoaded', () => {
    addDynamicAnimations();
    createBackgroundFlowers();
    addWaveEffect();
    createInteractiveParticles();
    addSmoothScroll();
    addPreloaderEffect();
    setTimeout(addTypingEffect, 1000);

    const btnFlor = document.querySelector('.btn-flor-azul');
    if (btnFlor) {
        btnFlor.addEventListener('click', createFlowers);
        btnFlor.addEventListener('mouseenter', () => {
            btnFlor.style.transform = 'scale(1.2) translateY(-5px)';
            btnFlor.style.filter = 'drop-shadow(0 0 10px var(--azul-lara))';
        });
        btnFlor.addEventListener('mouseleave', () => {
            btnFlor.style.transform = 'scale(1)';
            btnFlor.style.filter = 'none';
        });
    }

    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== EFEITO DE REDIMENSIONAMENTO RESPONSIVO =====
window.addEventListener('resize', () => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        if (particle.offsetLeft > window.innerWidth || particle.offsetTop > window.innerHeight) {
            particle.remove();
        }
    });
});