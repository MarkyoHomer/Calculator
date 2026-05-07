// Sidebar Mobile Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create hamburger button
  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.className = 'mobile-menu-btn';
  hamburgerBtn.innerHTML = '<span></span><span></span><span></span>';
  document.body.appendChild(hamburgerBtn);

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  // Get sidebar
  const sidebar = document.querySelector('.sidebar');

  // Toggle sidebar on hamburger click
  hamburgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  // Close sidebar when clicking overlay
  overlay.addEventListener('click', function() {
    hamburgerBtn.classList.remove('active');
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });

  // Close sidebar when clicking a link (mobile)
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        hamburgerBtn.classList.remove('active');
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      }
    });
  });

  // Handle resize - reset states when switching to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      hamburgerBtn.classList.remove('active');
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    }
  });
});
