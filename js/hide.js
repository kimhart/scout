var targets = Array.from(document.querySelectorAll('[data-test]'));

targets.forEach(target => {
  const container = document.querySelector('.scout-qa--label-wrap');
  container.remove();
  target.classList.remove(highlightClass);
})

