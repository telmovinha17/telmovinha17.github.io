document.addEventListener('DOMContentLoaded', function() {
    // Calculate the correct relative path to website root
    const pathname = window.location.pathname;
    const websiteRootIndex = pathname.indexOf('telmovinha17.github.io');
    let basePath = './';
    
    if (websiteRootIndex !== -1) {
        // Get the path after the website root folder
        const pathAfterRoot = pathname.substring(websiteRootIndex + 'telmovinha17.github.io'.length);
        // Count slashes to determine folder depth
        const depth = (pathAfterRoot.match(/\//g) || []).length - 1;
        basePath = depth > 0 ? '../'.repeat(depth) : './';
    }
    
    const headerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="${basePath}index.html" class="nav-brand">
                    <img src="${basePath}images/logo.png" alt="Telmo Vinha Logo" class="nav-logo">
                    <span class="nav-text">Telmo Vinha</span>
                </a>
                <ul class="nav-links">
                    <li><a href="${basePath}about.html">About</a></li>
                    <li><a href="${basePath}projects.html">Projects</a></li>
                    <li><a href="${basePath}artwork.html">Artwork</a></li>
                </ul>
            </div>
        </nav>
    `;

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
