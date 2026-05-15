// Active navigation highlight based on current page
document.addEventListener('DOMContentLoaded', () => {

    const currentPath =
        window.location.pathname.split('/').pop() || 'index.html';

    const navLinks =
        document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {

        const href = link.getAttribute('href');

        if (href === currentPath) {
            link.classList.add('active');
        }

        else if (
            currentPath === 'index.html' &&
            href === 'index.html'
        ) {
            link.classList.add('active');
        }

    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            const target = document.querySelector(
                this.getAttribute('href')
            );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }

        });

    });

    // Sticky navbar background change on scroll
    window.addEventListener('scroll', () => {

        const nav = document.querySelector('.navbar');

        if (window.scrollY > 50) {

            nav.style.background =
                'rgba(10, 10, 10, 0.98)';

        } else {

            nav.style.background =
                'rgba(10, 10, 10, 0.92)';

        }

    });

});
