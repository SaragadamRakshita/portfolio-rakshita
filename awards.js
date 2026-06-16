// awards.js - Awards, Achievements and Certifications data and rendering logic

const awards = [
    {
        id: 1,
        title: "3rd Prize Winner",
        event: "HackAP Hackathon 2025",
        image: "image/hackap.png",
        alt: "HackAP 2025 Trophy"
    },
    {
        id: 2,
        title: "Top 10 Finalist",
        event: "Tribal Hackathon 2023 & Codeiam Spark National Hackathon 2024",
        image: "image/spark.png",
        alt: "Hackathon Competitions"
    },
    {
        id: 3,
        title: "AWS Certification",
        event: "Fundamentals of Machine Learning and Artificial Intelligence in AWS",
        image: "image/aws.png",
        alt: "AWS AI ML Badge"
    },
    {
        id: 4,
        title: "AI Ready Internship",
        event: "AI Fundamentals & Short Term Internship by APSCHE NASSCOM Future Skills Prime",
        image: "image/nasscom.png",
        alt: "NASSCOM Internship Certificate"
    },
    {
        id: 5,
        title: "Graphic Design Intern",
        event: "Graphic Design Internship at Oasis Infobyte (AICTE)",
        image: "image/oasis.png",
        alt: "Graphic Design Internship Certificate"
    },
    {
        id: 6,
        title: "Olympiad & Academic Honors",
        event: "Olympiad Exam Winner & School Academic/Sports Excellence Recognition",
        image: "image/olympiad.png",
        alt: "Academic Excellence Trophies"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const awardContainer = document.getElementById('award-container');

    if (awardContainer) {
        try {
            const awardsHTML = awards.map(award => {
                return `
                <div class="glow-card rounded-xl overflow-hidden flex flex-col h-full">
                    <div class="h-44 overflow-hidden relative">
                        <img src="${award.image}" alt="${award.alt}" class="w-full h-full object-cover" onerror="this.src='image/ideathon.jpg'" decoding="async">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#252525] to-transparent opacity-20"></div>
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-[#8F55FF] font-poppins font-bold text-lg mb-2 tracking-wide">${award.title}</h3>
                        <p class="text-white font-poppins text-sm leading-relaxed">${award.event}</p>
                    </div>
                </div>
                `;
            }).join('');

            awardContainer.innerHTML = awardsHTML;
            console.log("Awards rendered successfully!");
        } catch (error) {
            console.error("Error rendering awards:", error);
        }
    }
});