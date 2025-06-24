// Fichier JavaScript pour les fonctionnalités de l'application 

// Animation au défilement
document.addEventListener('DOMContentLoaded', function() {
    // Animation des éléments au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observer tous les éléments avec la classe fade-in
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Validation du formulaire de contact
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs du formulaire
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulation d'envoi (à remplacer par l'appel API réel)
            console.log('Données du formulaire:', data);
            
            // Message de confirmation
            alert('Merci pour votre message ! Nous vous contacterons bientôt.');
            this.reset();
        });
    }

    // Gestion de la barre de navigation
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // Défilement vers le bas
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // Défilement vers le haut
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}); 