    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const loginButton = document.querySelector('.login-scrolled');

        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
            loginButton.classList.remove('link-light');
        } else {
            navbar.classList.remove('scrolled');
            loginButton.classList.add('link-light');
        }
    });