// Add event listener to the window scroll event
window.addEventListener('scroll', function() {
    if (document.getElementById('main').getBoundingClientRect().top <= window.innerHeight) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});