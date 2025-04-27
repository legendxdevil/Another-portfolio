// Modal popup logic for 'Hire Me'
document.addEventListener('DOMContentLoaded', function() {
  const hireMeBtn = document.getElementById('hireMeBtn');
  const modal = document.getElementById('hireMeModal');
  const closeModal = document.getElementById('closeModal');
  const form = document.getElementById('hireMeForm');

  hireMeBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  });

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  form.addEventListener('submit', function() {
    setTimeout(function() {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      form.reset();
      alert('Thank you for your interest! Your message has been sent.');
    }, 500);
  });
});
