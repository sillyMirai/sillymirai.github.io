const mobileLinks = document.querySelector('.mobileLinks');

toggleMenu = () => 
{
    mobileLinks.classList.toggle('active');
    document.body.classList.toggle('noScroll');
}
