const testIds = '[data-qa], [data-test]';
const highlightClass = 'scout-qa--highlight';

function toggleHighlight(e) {
  const targets = Array.from(document.querySelectorAll(testIds));
  const toggle = document.querySelector('.scout-qa--toggle-slider');

  if (e.target.checked) {
    targets.map((target) => {
      const toggle = document.querySelector('.scout-qa--toggle-slider');
      const idName = Object.keys(target.dataset)[0];
      toggle.textContent = "ON";

      const container = document.createElement('div');
      const valueWrap = document.createElement('div');
      const labelWrap = document.createElement('div');

      const label = document.createTextNode(`data-${idName}`);
      const value = target.dataset[idName];

      container.classList.add('scout-qa--label-wrap');
      container.append(labelWrap);
      container.append(valueWrap);

      labelWrap.append(label);
      valueWrap.append(value);

      labelWrap.classList.add('scout-qa--label');
      valueWrap.classList.add('scout-qa--value');
      
      target.appendChild(container);
      target.classList.add(highlightClass);
    })
  } else {
    targets.map((target) => {
      const container = document.querySelector('.scout-qa--label-wrap');
      toggle.textContent = "OFF";
      container.remove();
      target.classList.remove(highlightClass);
    })
  }
}

document.getElementById('scout-toggle').addEventListener('click', toggleHighlight);
