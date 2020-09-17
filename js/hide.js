var targets = Array.from(document.querySelectorAll(testIds));

targets.forEach(target => {
  const container = document.querySelector('.scout-qa--label-wrap');
  container.remove();
  target.classList.remove(highlightClass);
})

