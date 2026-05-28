// Configuration settings
const CONFIG = {
    enablePulsate: true,
    pulsateTargets: ["Projects", "LinkedIn", "GitHub"],
};

// Simulated "assets/icons" SVG dictionary for single-file portability
const iconImage = (name, alt) => `<img src="assets/icons/${name}.svg" alt="${alt}" />`;
const Icons = {
    social: iconImage("social", "Social Media"),
    github: iconImage("github", "GitHub"),
    journey: iconImage("journey", "Journey"),
    hobbies: iconImage("hobbies", "Hobbies"),
    linkedin: iconImage("linkedin", "LinkedIn"),
    realms: iconImage("realms", "Realms"),
    youtube: iconImage("youtube", "YouTube"),
    projects: iconImage("projects", "Projects"),
    articles: iconImage("articles", "Articles"),
    python: iconImage("python", "Python"),
    javascript: iconImage("javascript", "JavaScript"),
    react: iconImage("react", "React"),
    data: iconImage("data", "Data"),
    twitter: iconImage("twitter", "Twitter"),
    bluesky: iconImage("bluesky", "Bluesky"),
    tiktok: iconImage("tiktok", "TikTok"),
    discord: iconImage("discord", "Discord"),
    twitch: iconImage("twitch", "Twitch"),
};

// i18n Dictionaries
const i18n = {
    en: {
        title: "Labor Astronaut",
        subtitle: "Tinkerer and life-long learner",
        tooltip: "Press space to open",
        tabs: { skills: "Skills", experience: "Experience", education: "Education" },
        cards: {
            social: "Social Media",
            github: "GitHub",
            journey: "Journey",
            hobbies: "Hobbies",
            linkedin: "LinkedIn",
            realms: "Realms",
            youtube: "YouTube",
            projects: "Projects",
            articles: "Articles",
        },
        center: {
            skills: [
                { title: "Languages", value: "Python, JavaScript, TypeScript, C++, Java, R" },
                { title: "Data & ML", value: "Data Science, Machine Learning, Pandas, SQL, Excel" },
                { title: "Web Dev", value: "React, HTML/CSS, Node.js, Tailwind" },
            ],
            experience: [
                { title: "Real-Time Analyst @ Teleperformance", value: "2026 - Present | Responsible for reporting the current status of services." },
                { title: "Operations Supervisor @ Linking Organic Foods", value: "2022 - 2025 | Management of daily and medium-term operations." },
            ],
            education: [
                { title: "Diploma in Data Science", value: "Data Science Research Peru | 2026 - Present" },
                { title: "Bachelor's Degree in Computer Science", value: "University of London | 2020 - 2023" },
            ],
        },
        content: {
            journey: "My continuous journey through technology, science, humanity, and the cosmos...",
            hobbies: "Astronomy, reading science fiction, 3D printing, sustainable technology, electronic soldering, dancing, Dance Dance Revolution, swimming, cooking, politics.",
            realms: "Exploring different dimensions of software engineering and design. Coming not too soon.",
            articlesTabs: ["Articles", "Logs", "News"],
        },
    },
    es: {
        title: "Astronauta Laboral",
        subtitle: "Aventurero y aprendiz de por vida",
        tooltip: "Presiona espacio para abrir",
        tabs: { skills: "Habilidades", experience: "Experiencia", education: "Educación" },
        cards: {
            social: "Redes Sociales",
            github: "GitHub",
            journey: "Viaje",
            hobbies: "Pasatiempos",
            linkedin: "LinkedIn",
            realms: "Reinos",
            youtube: "YouTube",
            projects: "Proyectos",
            articles: "Artículos",
        },
        center: {
            skills: [
                { title: "Idiomas", value: "Python, JavaScript, TypeScript, C++, Java, R" },
                { title: "Datos y ML", value: "Data Science, Machine Learning, Pandas, SQL, Excel" },
                { title: "Des. Web", value: "React, HTML/CSS, Node.js, Tailwind" },
            ],
            experience: [
                { title: "Analista de Tiempo Real @ Teleperformance", value: "2026 - Presente | Responsable de reportar el estado actual de los servicios." },
                { title: "Supervisor de Operaciones @ Linking Organic Foods", value: "2022 - 2025 | Gestión de operaciones diarias y de mediano plazo." },
            ],
            education: [
                { title: "Diplomado en Ciencia de Datos", value: "Data Science Research Peru | 2026 - Present" },
                { title: "Grado en Ciencias de la Computación", value: "University of London | 2020 - 2023" },
            ],
        },
        content: {
            journey: "Mi viaje continuo a través de la tecnología, la ciencia, la humanidad y el cosmos...",
            hobbies: "Astronomía, lectura de ciencia ficción, impresión 3D, tecnología sustentable, soldadura electrónica, bailar, Dance Dance Revolution, nadar, cocinar, política.",
            realms: "Explorando diferentes dimensiones de la ingeniería de software y el diseño. Coming not too soon.",
            articlesTabs: ["Artículos", "Registros", "Noticias"],
        },
    },
    uk: {
        title: "Трудовий Астронавт",
        subtitle: "Шукач та учень на все життя",
        tooltip: "Натисніть пробіл, щоб відкрити",
        tabs: { skills: "Навички", experience: "Досвід", education: "Освіта" },
        cards: {
            social: "Соцмережі",
            github: "GitHub",
            journey: "Подорож",
            hobbies: "Хобі",
            linkedin: "LinkedIn",
            realms: "Сфери",
            youtube: "YouTube",
            projects: "Проєкти",
            articles: "Статті",
        },
        center: {
            skills: [
                { title: "Мови", value: "Python, JavaScript, TypeScript, C++, Java, R" },
                { title: "Дані та ML", value: "Data Science, Machine Learning, Pandas, SQL, Excel" },
                { title: "Веб-розробка", value: "React, HTML/CSS, Node.js, Tailwind" },
            ],
            experience: [
                { title: "Аналітик реального часу @ Teleperformance", value: "2026 – дотепер | Відповідальний за звітування про поточний стан послуг." },
                { title: "Керівник операційної діяльності @ Linking Organic Foods", value: "2022 - 2025 | Щоденне та середньострокове управління операціями." },
            ],
            education: [
                { title: "Диплом з науки про дані", value: "Дослідження в галузі науки про дані Перу | 2026 - дотепер" },
                { title: "Ступінь бакалавра з комп'ютерних наук", value: "Лондонський університет | 2020 - 2023" },
            ],
        },
        content: {
            journey: "Моя безперервна подорож крізь технології, науку, людство та космос...",
            hobbies: "Астрономія, читання наукової фантастики, 3D-друк, сталий розвиток технологій, пайка електроніки, танці, Dance Dance Revolution, плавання, кулінарія, політика.",
            realms: "Дослідження різних вимірів програмної інженерії та дизайну. Незабаром.",
            articlesTabs: ["Статті", "Журнали", "Новини"],
        },
    },
};

// App Manager overrides global data
class AppManager {
    constructor() {
        this.state = {
            activeIndex: -1,
            isModalOpen: false,
            activeModalTab: "",
            currentLang: "en",
            activeCenterTab: "skills",
            wheelUsed: false,
        };

        this.DOM = {
            orbitContainer: document.getElementById("orbit-container"),
            centerProfile: document.getElementById("center-profile"),
            centerContent: document.getElementById("center-content-area"),
            tabBtns: document.querySelectorAll(".tab-btn"),
            modalOverlay: document.getElementById("modal-overlay"),
            modalTitle: document.getElementById("modal-title"),
            modalTabs: document.getElementById("modal-tabs-container"),
            modalBody: document.getElementById("modal-body-content"),
            closeModalBtn: document.getElementById("close-modal"),
            langBtns: document.querySelectorAll(".lang-btn"),
            profileTitle: document.getElementById("profile-title"),
            profileSubtitle: document.getElementById("profile-subtitle"),
            tabSkills: document.getElementById("tab-skills"),
            tabExperience: document.getElementById("tab-experience"),
            tabEducation: document.getElementById("tab-education"),
        };

        this.tooltip = document.createElement("div");
        this.tooltip.id = "space-tooltip";
        document.body.appendChild(this.tooltip);

        this.init();
    }

    init() {
        this.setLanguage(this.state.currentLang);
        this.bindEvents();
    }

    get DataCards() {
        const t = i18n[this.state.currentLang];
        return [
            {
                baseId: "Social Media",
                id: t.cards.social,
                icon: Icons.social,
                content: {
                    type: "social",
                    handles: [
                        { platform: "Instagram", handle: "@leonislabora", icon: Icons.social },
                        { platform: "Bluesky", handle: "@leonislabora", icon: Icons.bluesky },
                        { platform: "Twitter", handle: "@leonislabora", icon: Icons.twitter },
                        { platform: "TikTok", handle: "@leonislabora", icon: Icons.tiktok },
                        { platform: "Twitch", handle: "@leonislabora", icon: Icons.twitch },
                        { platform: "Kick", handle: "@leonislabora", icon: Icons.social },
                        { platform: "Discord", handle: "@leonislabora", icon: Icons.discord },
                        { platform: "GitHub", handle: "@leonislabora", icon: Icons.github },
                        { platform: "LinkedIn", handle: "@leonislabora", icon: Icons.linkedin },
                        { platform: "Substack", handle: "@leonislabora", icon: Icons.articles },
                    ],
                },
            },
            { baseId: "GitHub", id: t.cards.github, icon: Icons.github, url: "https://github.com/leonislabora" },
            { baseId: "Journey", id: t.cards.journey, icon: Icons.journey, content: { type: "text", text: t.content.journey } },
            { baseId: "Hobbies", id: t.cards.hobbies, icon: Icons.hobbies, content: { type: "text", text: t.content.hobbies } },
            { baseId: "LinkedIn", id: t.cards.linkedin, icon: Icons.linkedin, url: "https://linkedin.com/in/leonislabora" },
            { baseId: "Realms", id: t.cards.realms, icon: Icons.realms, content: { type: "text", text: t.content.realms } },
            { baseId: "YouTube", id: t.cards.youtube, icon: Icons.youtube, url: "https://youtube.com/@leonislabora" },
            {
                baseId: "Projects",
                id: t.cards.projects,
                icon: Icons.projects,
                content: {
                    type: "grid",
                    items: [
                        { title: "Astro Analyzer", desc: "Analyzing star formation data.", link: "#", tech: ["python", "data"] },
                        { title: "Eco Dashboard", desc: "Tableau viz for sustainable cities.", link: "#", tech: ["data", "javascript"] },
                        { title: "Orbital Tracker", desc: "Web app built in React.", link: "#", tech: ["react", "javascript"] },
                    ],
                },
            },
            {
                baseId: "Articles",
                id: t.cards.articles,
                icon: Icons.articles,
                tabs: t.content.articlesTabs,
                content: {
                    type: "tabs",
                    [t.content.articlesTabs[0]]: [
                        { title: "The Future of Glassmorphism", desc: "UI trends in 2026.", link: "#", tech: ["react"] },
                        { title: "Machine Learning Basics", desc: "A primer on neural networks.", link: "#", tech: ["python", "data"] },
                    ],
                    [t.content.articlesTabs[1]]: [{ title: "Captain's Log 042", desc: "Refactoring legacy code.", link: "#", tech: ["javascript"] }],
                    [t.content.articlesTabs[2]]: [{ title: "New C++ Standard Released", desc: "What you need to know.", link: "#", tech: ["python"] }],
                },
            },
        ];
    }

    setLanguage(lang) {
        this.state.currentLang = lang;
        const t = i18n[lang];

        this.DOM.profileTitle.innerText = t.title;
        this.DOM.profileSubtitle.innerText = t.subtitle;
        this.DOM.tabSkills.innerText = t.tabs.skills;
        this.DOM.tabExperience.innerText = t.tabs.experience;
        this.DOM.tabEducation.innerText = t.tabs.education;
        this.tooltip.innerText = t.tooltip;

        this.renderCenter(this.state.activeCenterTab);
        this.renderOrbit();
    }

    bindEvents() {
        // Language Matcher
        this.DOM.langBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                this.DOM.langBtns.forEach((b) => b.classList.remove("active"));
                e.currentTarget.classList.add("active");
                this.setLanguage(e.currentTarget.dataset.lang);
            });
        });

        // Center Tabs
        this.DOM.tabBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                this.DOM.tabBtns.forEach((b) => b.classList.remove("active"));
                e.target.classList.add("active");
                this.state.activeCenterTab = e.target.dataset.target;
                this.renderCenter(this.state.activeCenterTab);
            });
        });

        // Window Resize for Responsive Layout
        window.addEventListener("resize", () => this.renderOrbit());

        // Mouse Wheel Interaction
        window.addEventListener("wheel", (e) => {
            if (this.state.isModalOpen) return;

            this.state.wheelUsed = true;
            const cards = this.DataCards;
            if (e.deltaY > 0) {
                this.state.activeIndex = (this.state.activeIndex + 1) % cards.length;
            } else {
                this.state.activeIndex = (this.state.activeIndex - 1 + cards.length) % cards.length;
            }
            this.updateHighlight();
        });

        // Spacebar Interaction
        window.addEventListener("keydown", (e) => {
            if (e.code === "Space" && !this.state.isModalOpen && this.state.activeIndex !== -1) {
                e.preventDefault();
                this.handleCardAction(this.DataCards[this.state.activeIndex]);
            }
        });

        // Modal Close
        this.DOM.closeModalBtn.addEventListener("click", () => this.closeModal());
        this.DOM.modalOverlay.addEventListener("click", (e) => {
            if (e.target === this.DOM.modalOverlay) this.closeModal();
        });
    }

    renderCenter(tabKey) {
        const data = i18n[this.state.currentLang].center[tabKey];
        this.DOM.centerContent.innerHTML = data
            .map(
                (item) => `
                    <div class="list-item">
                        <div class="list-title">${item.title}</div>
                        <div>${item.value}</div>
                    </div>
                `,
            )
            .join("");
    }

    renderOrbit() {
        this.DOM.orbitContainer.innerHTML = "";
        const containerRect = this.DOM.orbitContainer.parentElement.getBoundingClientRect();

        // Responsive calculation preventing center clip
        const maxRadiusX = (containerRect.width / 2) * 0.7;
        const maxRadiusY = (containerRect.height / 2) * 0.8;
        let radius = Math.min(maxRadiusX, maxRadiusY, 400);

        // Ensure clearance for center profile
        const centerWidth = this.DOM.centerProfile.getBoundingClientRect().width;
        const minClearance = centerWidth / 2 + 50;
        if (radius < minClearance && containerRect.width > 480) {
            radius = minClearance;
        } else if (containerRect.width <= 480) {
            radius = (containerRect.width / 2) * 0.85; // Tighter orbit on very small screens
        }

        const cards = this.DataCards;
        const numCards = cards.length;
        const startAngle = -30 * (Math.PI / 180);
        const endAngle = 210 * (Math.PI / 180);
        const angleStep = (endAngle - startAngle) / (numCards - 1);

        cards.forEach((cardData, index) => {
            const angle = startAngle + index * angleStep;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            const cardEl = document.createElement("div");
            cardEl.className = "glass-panel orbit-card";
            if (CONFIG.enablePulsate && CONFIG.pulsateTargets.includes(cardData.baseId)) {
                cardEl.classList.add("pulsate");
            }

            cardEl.style.left = `calc(50% + ${x}px)`;
            cardEl.style.top = `calc(50% + ${y}px)`;

            cardEl.innerHTML = `
                        <div class="orbit-icon">${cardData.icon}</div>
                        <div class="orbit-label">${cardData.id}</div>
                    `;

            // Interaction setup
            cardEl.addEventListener("mouseenter", () => {
                if (this.state.isModalOpen) return;
                this.state.wheelUsed = false; // Mouse overrides wheel
                this.state.activeIndex = index;
                this.updateHighlight();
            });

            cardEl.addEventListener("click", (e) => {
                e.preventDefault();
                this.handleCardAction(cardData);
            });

            this.DOM.orbitContainer.appendChild(cardEl);
        });

        if (this.state.activeIndex !== -1) {
            this.updateHighlight();
        }
    }

    updateHighlight() {
        const cardsElements = this.DOM.orbitContainer.querySelectorAll(".orbit-card");
        cardsElements.forEach((c, i) => {
            if (i === this.state.activeIndex) {
                c.classList.add("highlighted");
                // Show tooltip only if wheel was used
                if (this.state.wheelUsed) {
                    const rect = c.getBoundingClientRect();
                    this.tooltip.style.left = `${rect.left + rect.width / 2}px`;
                    this.tooltip.style.top = `${rect.top - 30}px`;
                    this.tooltip.classList.add("visible");
                } else {
                    this.tooltip.classList.remove("visible");
                }
            } else {
                c.classList.remove("highlighted");
            }
        });
    }

    handleCardAction(cardData) {
        if (cardData.url) {
            window.open(cardData.url, "_blank");
            return;
        }
        this.openModal(cardData);
    }

    openModal(cardData) {
        this.state.isModalOpen = true;
        this.tooltip.classList.remove("visible");

        this.DOM.modalTitle.innerText = cardData.id;
        this.DOM.modalTabs.innerHTML = "";
        this.DOM.modalBody.innerHTML = "";

        if (cardData.tabs && cardData.tabs.length > 0) {
            this.state.activeModalTab = cardData.tabs[0];
            cardData.tabs.forEach((tab) => {
                const btn = document.createElement("button");
                btn.className = `modal-tab-btn ${tab === this.state.activeModalTab ? "active" : ""}`;
                btn.innerText = tab;
                btn.addEventListener("click", () => {
                    this.DOM.modalTabs.querySelectorAll(".modal-tab-btn").forEach((b) => b.classList.remove("active"));
                    btn.classList.add("active");
                    this.state.activeModalTab = tab;
                    this.renderModalContent(cardData);
                });
                this.DOM.modalTabs.appendChild(btn);
            });
            this.DOM.modalTabs.style.display = "flex";
        } else {
            this.DOM.modalTabs.style.display = "none";
        }

        this.renderModalContent(cardData);
        this.DOM.modalOverlay.classList.add("active");
    }

    renderModalContent(cardData) {
        const contentDef = cardData.content;
        let html = "";

        if (contentDef.type === "text") {
            html = `<p style="font-size: 16px; line-height: 1.6;">${contentDef.text}</p>`;
        } else if (contentDef.type === "social") {
            html =
                `<div class="social-list">` +
                contentDef.handles
                    .map(
                        (h) => `
                        <a href="#" class="social-item">
                            ${h.icon} <span>${h.handle}</span>
                        </a>
                    `,
                    )
                    .join("") +
                `</div>`;
        } else if (contentDef.type === "grid" || contentDef.type === "tabs") {
            const items = contentDef.type === "tabs" ? contentDef[this.state.activeModalTab] : contentDef.items;
            if (items && items.length > 0) {
                html =
                    `<div class="grid-container">` +
                    items
                        .map(
                            (item) => `
                            <a href="${item.link}" target="_blank" class="content-card">
                                <h3>${item.title}</h3>
                                <p>${item.desc}</p>
                                <div class="tech-icons">
                                    ${item.tech.map((t) => Icons[t] || Icons.data).join("")}
                                </div>
                            </a>
                        `,
                        )
                        .join("") +
                    `</div>`;
            } else {
                html = `<p>No items found.</p>`;
            }
        }

        this.DOM.modalBody.innerHTML = html;
    }

    closeModal() {
        this.state.isModalOpen = false;
        this.DOM.modalOverlay.classList.remove("active");
        if (this.state.activeIndex !== -1 && this.state.wheelUsed) {
            this.tooltip.classList.add("visible");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new AppManager();
});
