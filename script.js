/** <!-- I Mahesh Regmi, 000905377 declares that this assignment is soley done by me without the help of others. I have not taken help from others to complete this assignment.-->
 */


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    new Typed('#typed-name', {
        strings: [ 'A Front-End Developer', 'A Back-End Developer', 'A Full Stack Developer' ],
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 500, 
        showCursor: true,
        cursorChar: '|',
        loop: true 
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    spinner.textContent = 'Loading...';
    document.body.appendChild(spinner);
    const sections = ['about', 'skills', 'projects', 'resume', 'contact'];
    
    sections.forEach(section => {
        fetch(`src/${section}.html`)
            .then(response => response.text())
            .then(html => {
                document.getElementById(section).innerHTML = html;
                if (section === 'contact') {
                    initializeContactForm();
                }
            })
            .finally(() => {
                spinner.style.display = 'none'; 
            });
    });

    function initializeContactForm() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = form.elements['name'].value;
                const email = form.elements['email'].value;
                const message = form.elements['message'].value;

                if (!name || !email || !message) {
                    alert('Please fill in all fields.');
                    return;
                }

                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            });
        }
    }

    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);

        gsap.from(element, { duration: 1, opacity: 0, y: 50, ease: "power3.out" });
    });

    gsap.from("#home h1", { duration: 1, opacity: 0, y: 50, ease: "power3.out" });
    gsap.from("#home h2", { duration: 1, opacity: 0, y: 50, ease: "power3.out", delay: 1 });
    gsap.from("#home .btn", { duration: 1, opacity: 0, y: 50, ease: "power3.out", delay: 1 });

    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    

});