document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.element');

  elements.forEach(element => {
    element.addEventListener('click', () => {
      element.style.opacity = '0';
      element.style.transform = 'scale(0.5)';
      // setTimeout(() => {
      //   element.style.display = 'none';
      // }, 500);
    });
  });
});
