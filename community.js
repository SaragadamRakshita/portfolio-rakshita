// community.js - Club memberships and professional experience data & rendering

const communityData = [
    {
        title: "Graphic Designer",
        event: "Eshanvi Organics LLP",
        date: "Professional Experience",
        description: "Created professional brand assets, marketing campaigns, packaging, and digital designs for organic food products.",
        image: "image/community/eshanvi.jpg"
    },
    {
        title: "GDGOC Member",
        event: "Google Developer Groups On Campus",
        date: "Active Involvement",
        description: "Engaging in technology domains including Firebase, Graphic Designing, Data Structures & Algorithms, and Game Development.",
        image: "image/community/gdgoc.jpg"
    },
    {
        title: "Club Member",
        event: "Codeiam Club",
        date: "Coding and Development",
        description: "Participating in club-hosted hackathons, coding challenges, tech webinars, and building community projects.",
        image: "image/community/codeiam.jpg"
    },
    {
        title: "Vedic Science & Culture Member",
        event: "Vedic Science and Cultural Club",
        date: "Extracurriculars",
        description: "Participating in discussions, hosting cultural programs, and studying ancient scientific principles and methodologies.",
        image: "image/community/vedicscience.jpg"
    }
];

function loadCommunityItems() {
    const container = document.getElementById('community-container');
    if (!container) return;

    // Clear existing contents
    container.innerHTML = '';

    communityData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'group relative overflow-hidden rounded-xl border border-[#333] hover:border-[#E06031]/50 transform transition-all duration-300 hover:-translate-y-1';
        card.innerHTML = `
            <div class="bg-[#252525] rounded-xl overflow-hidden h-[360px] w-full flex flex-col">
                <div class="h-[200px] w-full overflow-hidden relative">
                    <img src="${item.image}" alt="${item.title}" 
                         class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                         onerror="this.src='image/community/placeholder.jpg'">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#252525] to-transparent opacity-20"></div>
                </div>
                <div class="p-6 flex flex-col flex-grow justify-between">
                    <div>
                        <span class="text-[#E06031] font-poppins text-xs font-semibold uppercase tracking-wider">${item.date}</span>
                        <h3 class="text-white font-bold text-lg mt-2 mb-1 font-poppins line-clamp-1">${item.title}</h3>
                        <h4 class="text-gray-300 text-sm font-semibold">${item.event}</h4>
                    </div>
                    <p class="text-gray-400 text-xs mt-3 line-clamp-2 leading-relaxed font-poppins font-medium">${item.description}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Load community items when the DOM is ready
document.addEventListener('DOMContentLoaded', loadCommunityItems);
