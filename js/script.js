// Simple slider pagination logic (expand as needed)
document.querySelectorAll('.project-card').forEach((card, idx) => {
  const dots = card.querySelectorAll('.dot');
  let current = 0;

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      dots[current].classList.remove('active');
      // hide previous content if you implement multiple slides...
      current = i;
      dot.classList.add('active');
      // show new slide...
    });
  });
});
