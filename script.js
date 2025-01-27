document.addEventListener('DOMContentLoaded', function() {
    // Get our elements
    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenu = document.getElementById('closeMenu');

    // Open menu
    menuBtn.addEventListener('click', function() {
        menuOverlay.classList.add('show-menu');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    // Close menu
    closeMenu.addEventListener('click', function() {
        menuOverlay.classList.remove('show-menu');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close menu when clicking on a link
    const menuLinks = menuOverlay.getElementsByTagName('a');
    for(let link of menuLinks) {
        link.addEventListener('click', function() {
            menuOverlay.classList.remove('show-menu');
            document.body.style.overflow = '';
        });
    }
});
