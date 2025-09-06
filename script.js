// Navbar toggle
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

if (menuBtn) {
    menuBtn.onclick = () => {
        navbar.classList.toggle('active');
    }
}

// Scroll hone par navbar hide
window.onscroll = () => {
    if (navbar) {
        navbar.classList.remove('active');
    }
}

// Video popup functionality
let mainVid = document.querySelector('.main-video');
let closeVid = document.querySelector('#close-vid');

document.querySelectorAll('.course-3 .box .video video').forEach(vid => {
    vid.onclick = () => {
        let src = vid.getAttribute('src');
        if (mainVid) {
            mainVid.classList.add('active');
            mainVid.querySelector('video').src = src;
        }
    }
});

// Video close button
if (closeVid) {
    closeVid.onclick = () => {
        if (mainVid) {
            mainVid.classList.remove('active');
            mainVid.querySelector('video').pause(); // video stop bhi ho jaye
        }
    }
}
