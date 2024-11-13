document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.element');
  const sound = new Audio('sound.mp3');

  elements.forEach(element => {
    element.addEventListener('click', () => {
       sound.play();
      element.style.opacity = '0';
      element.style.transform = 'scale(0.5)';

    });
  });
});
