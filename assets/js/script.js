
(function() {
  const dropdownToggles = document.querySelectorAll('.dropdown .dropdown-toggle');

  // Toggle the clicked dropdown, close others
  function toggleDropdown(toggle) {
    const li = toggle.closest('.dropdown');
    const isOpen = li.classList.contains('open');

    // close all dropdowns first
    document.querySelectorAll('.dropdown.open').forEach(d => {
      d.classList.remove('open');
      const t = d.querySelector('.dropdown-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });

    // open clicked dropdown only if it was closed
    if (!isOpen) {
      li.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      li.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  // attach click handlers
  dropdownToggles.forEach(toggle => {
    // prevent default (so href="#" does not jump)
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      toggleDropdown(this);
    });

    // also allow keyboard activation (Enter / Space)
    toggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        toggleDropdown(this);
      }
    });
  });

  // close dropdowns if clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.open').forEach(d => {
        d.classList.remove('open');
        const t = d.querySelector('.dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      document.querySelectorAll('.dropdown.open').forEach(d => {
        d.classList.remove('open');
        const t = d.querySelector('.dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });
})();

