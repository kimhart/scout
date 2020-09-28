var targets = Array.from(document.querySelectorAll('[data-test]'));
var labelContainers = document.querySelectorAll('.scout-qa--label-wrap');

targets.forEach(target => target.classList.remove('scout-qa--highlight'));

labelContainers.forEach(container => container.remove());

