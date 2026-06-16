// skills.js - Dedicated, interactive, and visually stunning Skills section

const skillsCategories = [
    {
        id: "languages",
        title: "Programming Languages",
        icon: "fa-solid fa-code",
        skills: [
            { name: "Python", level: 90 },
            { name: "Java", level: 85 },
            { name: "C", level: 80 },
            { name: "SQL", level: 85 },
            { name: "JavaScript", level: 80 }
        ]
    },
    {
        id: "ai",
        title: "AI & Data Science",
        icon: "fa-solid fa-brain",
        skills: [
            { name: "Machine Learning", level: 85 },
            { name: "Artificial Intelligence", level: 80 },
            { name: "Computer Vision", level: 80 },
            { name: "Recommendation Systems", level: 75 },
            { name: "Data Analysis", level: 85 }
        ]
    },
    {
        id: "frameworks",
        title: "Frameworks & Web",
        icon: "fa-solid fa-layer-group",
        skills: [
            { name: "Flutter", level: 85 },
            { name: "Firebase", level: 80 },
            { name: "REST APIs", level: 85 },
            { name: "HTML5 & CSS3", level: 90 },
            { name: "Tailwind CSS", level: 85 }
        ]
    },
    {
        id: "iot",
        title: "IoT & Embedded Systems",
        icon: "fa-solid fa-microchip",
        skills: [
            { name: "IoT Development", level: 85 },
            { name: "Embedded Systems", level: 80 },
            { name: "Sensor Integration", level: 85 },
            { name: "Automation Systems", level: 75 }
        ]
    },
    {
        id: "core",
        title: "Core CS Concepts",
        icon: "fa-solid fa-cubes",
        skills: [
            { name: "Data Structures & Algorithms", level: 85 },
            { name: "OOP", level: 90 },
            { name: "DBMS", level: 85 },
            { name: "Operating Systems", level: 80 }
        ]
    },
    {
        id: "soft",
        title: "Professional & Soft Skills",
        icon: "fa-solid fa-users-cog",
        skills: [
            { name: "Team Leadership", level: 90 },
            { name: "Problem Solving", level: 90 },
            { name: "Project Management", level: 80 },
            { name: "Collaboration", level: 85 }
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) {
        console.error("Skills container not found!");
        return;
    }

    // Render Filters and Cards Grid
    renderSkillsSection(skillsContainer);
});

function renderSkillsSection(container) {
    // 1. Create Filter Buttons HTML
    const filters = [
        { id: "all", name: "All Skills" },
        { id: "languages", name: "Languages" },
        { id: "ai", name: "AI & Data" },
        { id: "frameworks", name: "Frameworks & Web" },
        { id: "iot", name: "IoT & Embedded" },
        { id: "core", name: "Core CS" },
        { id: "soft", name: "Soft Skills" }
    ];

    const filtersHTML = `
        <div class="flex flex-wrap justify-center gap-3 mb-12" id="skills-filters">
            ${filters.map((f, i) => `
                <button 
                    data-filter="${f.id}" 
                    class="px-5 py-2 rounded-full border text-sm font-researcher tracking-wide transition-all duration-300 ${
                        i === 0 
                        ? 'bg-[#F43F5E] border-[#F43F5E] text-white shadow-lg shadow-[#F43F5E]/20' 
                        : 'border-[#333] bg-[#252525]/30 text-gray-400 hover:text-white hover:border-[#F43F5E]'
                    }"
                >
                    ${f.name}
                </button>
            `).join('')}
        </div>
    `;

    // 2. Create Cards Grid HTML
    const cardsHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="skills-grid">
            ${skillsCategories.map(category => {
                const categorySkillsHTML = category.skills.map(skill => `
                    <div class="space-y-2">
                        <div class="flex justify-between text-xs font-semibold">
                            <span class="text-gray-300 font-poppins">${skill.name}</span>
                            <span class="text-[#F43F5E] font-mono">${skill.level}%</span>
                        </div>
                        <div class="w-full bg-[#111] rounded-full h-2 overflow-hidden border border-white/5">
                            <div 
                                class="bg-gradient-to-r from-[#F43F5E] to-[#BE123C] h-full rounded-full skill-progress-fill shadow-[0_0_8px_rgba(244, 63, 94,0.5)]" 
                                style="--progress: ${skill.level}%"
                            ></div>
                        </div>
                    </div>
                `).join('');

                return `
                    <div 
                        data-category="${category.id}" 
                        class="skill-card-wrapper glow-card bg-[#252525]/30 border border-[#333] p-6 rounded-2xl transition-all duration-500 transform opacity-100 scale-100 flex flex-col justify-between"
                    >
                        <div>
                            <!-- Header -->
                            <div class="flex justify-between items-center mb-6">
                                <div class="flex items-center gap-3">
                                    <div class="p-3 bg-[#F43F5E]/10 rounded-xl text-[#F43F5E] shadow-[inset_0_0_12px_rgba(244, 63, 94,0.1)]">
                                        <i class="${category.icon} text-xl"></i>
                                    </div>
                                    <h3 class="text-white font-researcher text-lg tracking-wide font-bold">${category.title}</h3>
                                </div>
                                <span class="relative flex h-2 w-2">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F43F5E] opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-2 w-2 bg-[#F43F5E]"></span>
                                </span>
                            </div>
                            
                            <!-- Skills list -->
                            <div class="space-y-5">
                                ${categorySkillsHTML}
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    // Combine and inject
    container.innerHTML = filtersHTML + cardsHTML;

    // 3. Set up click event listeners on filter buttons
    const filterButtons = container.querySelectorAll('#skills-filters button');
    const skillCards = container.querySelectorAll('#skills-grid .skill-card-wrapper');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active classes from all buttons
            filterButtons.forEach(b => {
                b.className = 'px-5 py-2 rounded-full border text-sm font-researcher tracking-wide transition-all duration-300 border-[#333] bg-[#252525]/30 text-gray-400 hover:text-white hover:border-[#F43F5E]';
            });

            // Set active class on clicked button
            this.className = 'px-5 py-2 rounded-full border text-sm font-researcher tracking-wide transition-all duration-300 bg-[#F43F5E] border-[#F43F5E] text-white shadow-lg shadow-[#F43F5E]/20';

            const filterValue = this.getAttribute('data-filter');

            // Filter cards with animations
            skillCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    // Show
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    console.log("Dedicated Skills section rendered and interactive hooks bound successfully.");
}
