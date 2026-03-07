const headerHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-brand">
                <img src="./images/logo.png" alt="Telmo Vinha Logo" class="nav-logo">
                <span class="nav-text">Telmo Vinha</span>
            </a>
            <ul class="nav-links">
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="artwork.html">Artwork</a></li>
            </ul>
        </div>
    </nav>
`;

document.addEventListener('DOMContentLoaded', function() {
    // Lock scroll on homepage
    const page = window.location.pathname.split('/').pop() || 'index.html';
    if (page === 'index.html') {
        document.body.classList.add('locked');
    }

    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = headerPlaceholder.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
});
