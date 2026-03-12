// Дані
const skills = {
    technical: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 40 },
        { name: "UI/UX Design", level: 35 },
        { name: "Git/GitHub", level: 90 }
    ],
    soft: [
        { name: "Швидке навчання", icon: "🚀" },
        { name: "Критичне мислення", icon: "💭" },
        { name: "Комунікабельність", icon: "💬" },
        { name: "Відповідальність", icon: "⭐" },
        { name: "Самоорганізація", icon: "📋" },
        { name: "Командна робота", icon: "🤝" }
    ]
};

// Ініціалізація
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    renderSkills();
    renderSoftSkills();
    setupObservers();
});

// Створення фонових частинок
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 150 + 50;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 15 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Рендер технічних навичок
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    skills.technical.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-header">
                <span>${skill.name}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsGrid.appendChild(skillItem);
    });
}

// Рендер особистих якостей
function renderSoftSkills() {
    const softSkills = document.getElementById('soft-skills');
    skills.soft.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'soft-skill-card';
        skillCard.innerHTML = `
            <div class="soft-skill-icon">${skill.icon}</div>
            <div class="soft-skill-name">${skill.name}</div>
        `;
        softSkills.appendChild(skillCard);
    });
}

// Функція копіювання в буфер обміну
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        element.classList.add('copied');
        setTimeout(() => {
            element.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Помилка копіювання:', err);
    });
}

// Перемикання секцій
function showSection(sectionId) {
    // Ховаємо всі секції
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Показуємо вибрану секцію
    document.getElementById(sectionId).classList.add('active');
    
    // Оновлюємо активну кнопку
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
}

// Налаштування спостерігача для анімації прогрес-барів
function setupObservers() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFills = entry.target.querySelectorAll('.progress-fill');
                progressFills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Анімація аватарки при наведенні
const avatar = document.getElementById('avatar');
if (avatar) {
    avatar.addEventListener('mouseenter', () => {
        avatar.style.animation = 'none';
        avatar.offsetHeight;
        avatar.style.animation = 'float 4s ease-in-out infinite';
    });
}