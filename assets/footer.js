// Footer template - defined once, used everywhere
const footerHTML = `
    <footer class="footer">
        <p>&copy; 2026 Telmo Vinha. 🏁 </p>
    </footer>
`;

// Inject footer on page load
document.addEventListener('DOMContentLoaded', function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
