const demos = [
    {
        title: "Background Transition",
        description: "Smooth background color transitions on scroll",
        href: "background-transition-scroll/index.html",
        icon: "move"
    },
    {
        title: "Horizontal Scrolling Cards",
        description: "Cards that scroll horizontally as you scroll vertically",
        href: "horizontal-scrolling-card/index.html",
        icon: "move-horizontal"
    },
    {
        title: "Reverse Scroll",
        description: "Elements that move in reverse direction while scrolling",
        href: "reverse-scroll/index.html",
        icon: "corner-left-up"
    },
    {
        title: "Scroll Observer",
        description: "Intersection Observer based scroll animations",
        href: "scroll-observer/index.html",
        icon: "eye"
    },
    {
        title: "Scrollytelling Text",
        description: "Text animations triggered by scroll position",
        href: "scrollytelling-text/index.html",
        icon: "type"
    },
    {
        title: "Scrollytelling Website",
        description: "Full website with scroll-based storytelling",
        href: "scrollytelling-website/index.html",
        icon: "globe"
    },
    {
        title: "Simple Image Fade",
        description: "Images that fade in/out based on scroll position",
        href: "simple-image-fade-scroll/index.html",
        icon: "image"
    }
];

function createDemoCard(demo) {
    return `
        <a href="${demo.href}" class="card bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <div class="p-6">
                <div class="flex items-center gap-2 mb-2">
                    <i data-feather="${demo.icon}" class="w-4 h-4"></i>
                    <h2 class="text-xl font-semibold">${demo.title}</h2>
                </div>
                <p class="text-gray-400 mb-4">${demo.description}</p>
                <div class="w-full h-2 bg-gray-700 rounded overflow-hidden">
                    <div class="w-1/3 h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-scroll"></div>
                </div>
            </div>
        </a>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const demoGrid = document.getElementById('demo-grid');
    demos.forEach(demo => {
        demoGrid.innerHTML += createDemoCard(demo);
    });
    feather.replace();
});

