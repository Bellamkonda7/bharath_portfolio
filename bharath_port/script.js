
const menuButton = document.getElementById('menu');
const nav = document.getElementById('nav');

// Mobile navigation
menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');

    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
});

// Close menu after selecting a section
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
    });
});

// Four colour themes
const themeButtons = document.querySelectorAll(
    '.theme-switcher button'
);

themeButtons.forEach(button => {
    button.addEventListener('click', () => {

        const theme = button.dataset.theme;

        document.body.dataset.theme = theme;

        themeButtons.forEach(item => {
            item.classList.toggle(
                'active',
                item === button
            );
        });
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(
        (entries, obs) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('visible');

                    obs.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add('visible');
    });

}

// Automatic copyright year
document.getElementById('year').textContent =
    new Date().getFullYear();
