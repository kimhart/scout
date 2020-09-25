var highlightClass = 'scout-qa--highlight';
var toggle = document.querySelector('.scout-qa--toggle-slider');
var description = document.querySelector('.scout-qa--description');
var targets = Array.from(document.querySelectorAll('[data-test]'));
var idName = 'data-test';

targets.forEach(target => {
  const container = document.createElement('div');
  const valueWrap = document.createElement('div');
  const labelWrap = document.createElement('div');

  const label = document.createTextNode(idName);
  const value = target.dataset.test;

  container.classList.add('scout-qa--label-wrap');
  container.append(labelWrap);
  container.append(valueWrap);

  labelWrap.append(label);
  valueWrap.append(value);

  labelWrap.classList.add('scout-qa--label');
  valueWrap.classList.add('scout-qa--value');

  target.appendChild(container);
  target.classList.add(highlightClass);
});

