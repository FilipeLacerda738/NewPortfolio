document.addEventListener("DOMContentLoaded", () => {

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const elementsToReveal = document.querySelectorAll('.reveal');

    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

    
    
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            const targetId = ctaButton.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

});