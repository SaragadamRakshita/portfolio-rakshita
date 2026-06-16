// arts.js - Contains both art data and rendering logic
// Art Data
const arts = [
    {
        id: 1,
        image: "image/art/art1.jpg",
        alt: "Digital Art 1",
        category: "DIGITAL ART"
    },
    {
        id: 2,
        image: "image/art/art2.jpg",
        alt: "Digital Art 2",
        category: "DIGITAL ART"
    },
    {
        id: 3,
        image: "image/art/art3.jpg",
        alt: "Hand Drawn Art",
        category: "HandDrawn"
    },
    {
        id: 4,
        image: "image/art/art4.jpg",
        alt: "Digital Art 3",
        category: "DIGITAL ART"
    },
    {
        id: 5,
        image: "image/art/art5.jpg",
        alt: "Illustration Art",
        category: "ILLUSTRATION"
    },
    {
        id: 6,
        image: "image/art/art6.jpg",
        alt: "UI Design",
        category: "UI/UX DESIGN"
    },

    {
        id: 8,
        image: "image/art/art8.jpg",
        alt: "UI Design",
        category: "UI/UX DESIGN"
    },
    {
        id: 9,
        image: "image/art/art9.jpg",
        alt: "Digital Art",
        category: "DIGITAL ART"
    },
    {
        id: 10,
        image: "image/art/art10.jpg",
        alt: "Illustration Art",
        category: "ILLUSTRATION"
    },
    {
        id: 11,
        image: "image/art/EcoFreaky Wholesale Catalogue.pdf.jpg",
        alt: "EcoFreaky Wholesale Catalogue",
        category: "GRAPHIC DESIGN"
    }
];

// CSS for marquee animation
const style = document.createElement('style');
style.textContent = `
    .art-scroll-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 400px;
    }

    .art-track {
        display: flex;
        width: max-content;
        animation: scroll 40s linear infinite;
        will-change: transform;
        backface-visibility: hidden;
    }

    .art-track:hover {
        animation-play-state: paused;
    }

    .art-item {
        flex: 0 0 400px;
        height: 400px;
    }

    .art-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        backface-visibility: hidden;
    }

    @keyframes scroll {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-50%, 0, 0);
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    const artContainer = document.getElementById('art-container');
    
    if (artContainer) {
        try {
            artContainer.className = 'art-scroll-container';
            // Double the images to create seamless loop
            const doubledArts = [...arts, ...arts];
            const artsHTML = `
                <div class="art-track">
                    ${doubledArts.map(art => `
                        <div class="art-item">
                            <img src="${art.image}" alt="${art.alt}" decoding="async" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            `;
            
            artContainer.innerHTML = artsHTML;
            console.log("Arts rendered successfully!");
        } catch (error) {
            console.error("Error rendering arts:", error);
        }
    } else {
        console.error("Art container not found!");
    }
});