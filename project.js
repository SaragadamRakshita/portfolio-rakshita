// project.js - Project lists and rendering logic for Saragadam Rakshita

const projects = [
    {
        id: 1,
        title: "CareerCompass AI",
        subtitle: "AI/ML Based Career Roadmap & Guidance System",
        description: "Built an AI-powered career guidance platform by analyzing 40+ real software engineer profiles. Designed a PostgreSQL database with 10+ normalized tables for career intelligence. Developed a recommendation engine to identify skill gaps and generate personalized career roadmaps. Automated processing of LinkedIn profiles and job descriptions, reducing manual research effort by 70%+. ",
        image: "image/project/career_compass.png",
        tags: ["AI/ML", "Python", "PostgreSQL", "Data Analysis"],
        github: "https://github.com/SaragadamRakshita/career-compass-ai",
        demo: "#"
    },
    {
        id: 2,
        title: "AquaSentinel",
        subtitle: "AI Edge Drowning Prevention System",
        description: "Developed an AI-based drowning detection system with 94% detection accuracy. Integrated real-time emergency alert mechanisms. Reduced emergency response delays by 40%. Implemented intelligent underwater activity monitoring and anomaly detection.",
        image: "image/project/aqua_sentinel.png",
        tags: ["AI/ML", "Computer Vision", "Embedded Systems"],
        github: "https://github.com/SaragadamRakshita/aqua-sentinel",
        demo: "#"
    },
    {
        id: 3,
        title: "Swachh Netra",
        subtitle: "IoT Based Municipality Cleaning System",
        description: "Designed an IoT-enabled waste monitoring system. Improved garbage collection efficiency by 50%. Automated dispatch and alert workflows. Reduced manual monitoring workload by 60%. Integrated sensors for real-time monitoring.",
        image: "image/project/swachh_netra.png",
        tags: ["IoT", "Embedded Systems", "Sensors", "Automation"],
        github: "https://github.com/SaragadamRakshita/swachh-netra",
        demo: "#"
    },
    {
        id: 4,
        title: "NexoTrack",
        subtitle: "AI Noise Detection Using Heatmaps",
        description: "Built a Flutter and Firebase-based noise monitoring application. Achieved 92% sound classification accuracy. Developed GPS-enabled heatmap visualization. Implemented real-time cloud synchronization and decibel tracking.",
        image: "image/project/nexo_track.png",
        tags: ["Flutter", "Firebase", "AI/ML", "GPS"],
        github: "https://github.com/SaragadamRakshita/nexotrack-app",
        demo: "#"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded, rendering project.js...");
    const projectContainer = document.getElementById('project-container');

    if (projectContainer) {
        try {
            const projectsHTML = projects.map(project => {
                const tagsHTML = project.tags.map(tag =>
                    `<span class="bg-[#F43F5E]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">${tag}</span>`
                ).join('');

                return `
                <div class="group glow-card rounded-xl overflow-hidden flex flex-col h-full">
                    <div class="relative overflow-hidden aspect-video">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500" onerror="this.src='image/project/ui.png'" decoding="async">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-40"></div>
                        <div class="absolute top-3 right-3 flex flex-wrap gap-1 max-w-[85%] justify-end">
                            ${tagsHTML}
                        </div>
                    </div>
                    
                    <div class="p-6 flex flex-col flex-grow">
                        <span class="text-[#F43F5E] text-xs font-semibold uppercase tracking-wider mb-1">${project.subtitle}</span>
                        <h3 class="text-white font-poppins font-bold text-xl mb-3 group-hover:text-[#F43F5E] transition-colors">${project.title}</h3>
                        <p class="text-gray-400 font-poppins text-xs leading-relaxed mb-6 flex-grow">${project.description}</p>
                        
                        <div class="flex justify-between items-center pt-4 border-t border-[#333] mt-auto">
                            <div class="flex space-x-4">
                                <a href="${project.github}" target="_blank" class="text-gray-400 hover:text-[#F43F5E] transition-colors duration-300 flex items-center text-xs gap-1 font-medium">
                                    <i class="fab fa-github text-sm"></i> Codebase
                                </a>
                                <a href="${project.demo}" class="text-gray-400 hover:text-[#F43F5E] transition-colors duration-300 flex items-center text-xs gap-1 font-medium">
                                    <i class="fas fa-external-link-alt text-sm"></i> Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }).join('');

            projectContainer.innerHTML = projectsHTML;
            console.log("Projects rendered successfully!");
        } catch (error) {
            console.error("Error rendering projects:", error);
        }
    } else {
        console.error("Project container not found!");
    }
});