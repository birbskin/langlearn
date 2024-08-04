// 写真のやつ
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.enlargeable');
  images.forEach(img => {
    img.addEventListener('click', function() {
      this.classList.toggle('enlarged');
      const caption = this.nextElementSibling;
      if (caption && caption.classList.contains('caption')) {
        caption.classList.toggle('enlarged');
      }
    });
  });
});

// font adjuster
document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessages = document.querySelectorAll('.welcome');
  
    function animateWelcome() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      welcomeMessages.forEach((message, index) => {
        const messageTop = message.offsetTop;
        const messageHeight = message.offsetHeight;
        
        // Calculate the scale based on the scroll position
        let scale = 1 + Math.sin((scrollY - messageTop + windowHeight / 2) / windowHeight * Math.PI) * 0.5;
        
        // Limit the scale between 0.5 and 1.5
        scale = Math.max(0.5, Math.min(scale, 1.5));

        anime({
          targets: message,
          scale: scale,
          duration: 100,
          easing: 'easeOutQuad'
        });
      });
    }

    animateWelcome();

    window.addEventListener('scroll', animateWelcome);

    // Font adjuster
    const fontSelect = document.getElementById('font-select');
    fontSelect.addEventListener('change', function() {
        document.body.style.fontFamily = this.value;
    });

    // Image enlarging
    const images = document.querySelectorAll('.enlargeable');
    const overlay = document.getElementById('image-overlay');
    const enlargedImage = document.getElementById('enlarged-image');
    const closeBtn = document.querySelector('.close-btn');

    images.forEach(img => {
        img.addEventListener('click', function() {
            overlay.style.display = 'flex';
            enlargedImage.src = this.src;
            enlargedImage.alt = this.alt;
        });
    });

    function closeOverlay() {
        overlay.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    // Close on escape key press
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            closeOverlay();
        }
    });
});

