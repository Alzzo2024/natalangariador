document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    themeToggle.addEventListener('click', () => {
        const icon = themeToggle.querySelector('i');
        
        if (html.getAttribute('data-theme') === 'light') {
            html.removeAttribute('data-theme');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            html.setAttribute('data-theme', 'light');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
});