// Icon Preload
const imageUrls = [
    "/Media/pfp.png",
    "/Media/menu.png",
    "/Media/logos/youtube.png",
    "/Media/logos/studio-white.png",
    "/Media/logos/roblox.png",
    "/Media/logos/git.png",
    "/Media/logos/rojo.png"
];

function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image(); 
        img.src = url; 
    });
}

preloadImages(imageUrls);

// Mobile Links Menu
const mobileLinks = document.querySelector('.mobileLinks');

toggleMenu = () => 
{
    mobileLinks.classList.toggle('active');
    document.body.classList.toggle('noScroll');
}
