// aboutme.js - Visually stunning and comprehensive developer profile

const profile = {
    bio: "I am a B.Tech Computer Science and Engineering student at Andhra University, Visakhapatnam. Passionate about AI/ML, Graphic design, and blending technology with creative problem-solving. I am an enthusiastic learner exploring technology through hands-on projects, hackathons, and community leadership.",
    location: "Visakhapatnam, India",
    languages: ["English", "Hindi", "Odia", "Telugu"]
};

const education = [
    {
        period: "2023 - 2027",
        institution: "Andhra University",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        location: "Visakhapatnam, AP",
        gpa: "8.23/10"
    },
    {
        period: "2021 - 2023",
        institution: "Kendriya Vidyalaya",
        degree: "Senior Secondary Education (CBSE)",
        location: "Bondamunda, Odisha",
        gpa: "8.00/10"
    },
    {
        period: "2009 - 2020",
        institution: "Carmel School",
        degree: "Secondary Education (ICSE)",
        location: "Rourkela, Odisha",
        gpa: "8.26/10"
    }
];

const skillsData = {
    languages: ["Python", "Java", "C", "SQL", "JavaScript"],
    tools: ["Flutter", "Firebase", "Git", "GitHub", "TensorFlow", "REST APIs"],
    ai: ["Machine Learning", "Artificial Intelligence", "Computer Vision", "Recommendation Systems", "Data Analysis"],
    iot: ["IoT Development", "Embedded Systems", "Sensor Integration", "Automation Systems"],
    core: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"],
    soft: ["Team Leadership", "Problem Solving", "Project Management", "Collaboration", "Technical Mentoring"]
};

// Rendering function - Executes when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const aboutContainer = document.getElementById('about-container');
    
    if (aboutContainer) {
        aboutContainer.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start font-poppins">
                <!-- Column 1: Profile, Bio, & Quick Info -->
                <div class="space-y-6">
                    <div class="relative group overflow-hidden rounded-2xl border border-[#E06031]/20 shadow-lg bg-[#252525]/30 p-4">
                        <img src="image/profile.png" alt="Saragadam Rakshita" class="w-full h-auto object-cover rounded-xl transition duration-500 group-hover:scale-105" onerror="this.src='image/profile.jpg'">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60"></div>
                    </div>
                    
                    <div class="bg-[#252525]/40 border border-[#333] p-6 rounded-2xl">
                        <h3 class="text-[#E06031] text-xl font-bold font-researcher tracking-wide mb-4 flex items-center">
                            <i class="fas fa-user-circle mr-2"></i> Bio
                        </h3>
                        <p class="text-gray-300 text-sm leading-relaxed mb-6">
                            ${profile.bio}
                        </p>
                        
                        <div class="space-y-3 pt-4 border-t border-[#333] text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-500">Location:</span>
                                <span class="text-white font-medium">${profile.location}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-500">Languages:</span>
                                <span class="text-white font-medium">${profile.languages.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Column 2: Education & Path -->
                <div class="space-y-6">
                    <div class="bg-[#252525]/40 border border-[#333] p-6 rounded-2xl">
                        <h3 class="text-[#E06031] text-xl font-bold font-researcher tracking-wide mb-6 flex items-center">
                            <i class="fas fa-graduation-cap mr-2"></i> Education
                        </h3>
                        
                        <div class="relative border-l-2 border-[#E06031]/30 pl-6 space-y-8 ml-2">
                            ${education.map(edu => `
                                <div class="relative">
                                    <!-- Timeline Dot -->
                                    <div class="absolute -left-[31px] top-1 bg-[#1A1A1A] border-2 border-[#E06031] rounded-full w-4 h-4"></div>
                                    
                                    <span class="text-xs text-[#E06031] font-semibold tracking-wider">${edu.period}</span>
                                    <h4 class="text-white font-bold text-base mt-1">${edu.institution}</h4>
                                    <p class="text-gray-300 text-xs mt-1 font-medium">${edu.degree}</p>
                                    <p class="text-gray-500 text-xs mt-0.5">${edu.location}</p>
                                    <div class="mt-2 inline-block bg-[#E06031]/10 text-[#E06031] text-[11px] font-bold px-2 py-0.5 rounded border border-[#E06031]/20">
                                        CGPA / GPA: ${edu.gpa}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Column 3: Skills Inventory -->
                <div class="space-y-6">
                    <div class="bg-[#252525]/40 border border-[#333] p-6 rounded-2xl">
                        <h3 class="text-[#E06031] text-xl font-bold font-researcher tracking-wide mb-6 flex items-center">
                            <i class="fas fa-tools mr-2"></i> Tech Stack & Skills
                        </h3>
                        
                        <div class="space-y-6">
                            <!-- Programming Languages -->
                            <div>
                                <span class="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-2">Programming Languages</span>
                                <div class="flex flex-wrap gap-2">
                                    ${skillsData.languages.map(skill => `<span class="bg-[#222] border border-[#333] text-gray-300 hover:text-white hover:border-[#E06031] transition-all text-xs px-2.5 py-1 rounded-md font-medium">${skill}</span>`).join('')}
                                </div>
                            </div>
                            
                            <!-- AI & Data Science -->
                            <div>
                                <span class="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-2">AI & Data</span>
                                <div class="flex flex-wrap gap-2">
                                    ${skillsData.ai.map(skill => `<span class="bg-[#222] border border-[#333] text-gray-300 hover:text-white hover:border-[#E06031] transition-all text-xs px-2.5 py-1 rounded-md font-medium">${skill}</span>`).join('')}
                                </div>
                            </div>

                            <!-- Frameworks & Web -->
                            <div>
                                <span class="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-2">Frameworks & Tools</span>
                                <div class="flex flex-wrap gap-2">
                                    ${skillsData.tools.map(skill => `<span class="bg-[#222] border border-[#333] text-gray-300 hover:text-white hover:border-[#E06031] transition-all text-xs px-2.5 py-1 rounded-md font-medium">${skill}</span>`).join('')}
                                </div>
                            </div>

                            <!-- IoT & Embedded Systems -->
                            <div>
                                <span class="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-2">IoT & Embedded Systems</span>
                                <div class="flex flex-wrap gap-2">
                                    ${skillsData.iot.map(skill => `<span class="bg-[#222] border border-[#333] text-gray-300 hover:text-white hover:border-[#E06031] transition-all text-xs px-2.5 py-1 rounded-md font-medium">${skill}</span>`).join('')}
                                </div>
                            </div>

                            <!-- Core CS Concepts -->
                            <div>
                                <span class="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-2">Core CS</span>
                                <div class="flex flex-wrap gap-2">
                                    ${skillsData.core.map(skill => `<span class="bg-[#222] border border-[#333] text-gray-300 hover:text-white hover:border-[#E06031] transition-all text-xs px-2.5 py-1 rounded-md font-medium">${skill}</span>`).join('')}
                                </div>
                            </div>

                            <!-- Professional Skills -->
                            <div>
                                <span class="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-2">Soft Skills</span>
                                <div class="flex flex-wrap gap-2">
                                    ${skillsData.soft.map(skill => `<span class="bg-[#E06031]/10 border border-[#E06031]/20 text-white text-xs px-2.5 py-1 rounded-md font-medium">${skill}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        console.log("About section rendered successfully with categorized columns!");
    } else {
        console.error("About container not found!");
    }
});