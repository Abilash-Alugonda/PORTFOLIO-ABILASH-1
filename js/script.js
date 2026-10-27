/**
 * Interactive Script for Alugonda Abilash Reddy's Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking any nav link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. 1-Click Copy Email with Visual Toast/Feedback
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyText = document.getElementById('copyText');
  const emailToCopy = 'abilashreddyalugonda@gmail.com';

  if (copyEmailBtn && copyText) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailToCopy);
        const originalText = copyText.textContent;
        copyText.textContent = 'Copied to Clipboard! ✓';
        copyEmailBtn.classList.add('border-emerald-500', 'text-emerald-400');
        
        setTimeout(() => {
          copyText.textContent = originalText;
          copyEmailBtn.classList.remove('border-emerald-500', 'text-emerald-400');
        }, 2500);
      } catch (err) {
        // Fallback for older browsers
        copyText.textContent = emailToCopy;
      }
    });
  }

  // 3. Highlight Active Navigation Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-blue-400', 'font-semibold');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-blue-400', 'font-semibold');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);
});
