function toggleHighlight(e) {
  const testIds = '[data-qa], [data-test]';
  const highlightClass = 'scout-qa--highlight';
  const targets = Array.from(document.querySelectorAll(testIds));
  const toggle = document.querySelector('.scout-qa--toggle-slider');
  const description = document.querySelector('.scout-qa--description');

  // reset message
  description.textContent = 'Hit the switch to highlight test IDs';

  if (e.target.checked) {

    if (!targets || targets.length < 1) {
      description.textContent = `No test IDs found`;
      return;
    }

    targets.forEach(target => {

      const toggle = document.querySelector('.scout-qa--toggle-slider');
      const idName = Object.keys(target.dataset)[0];
      toggle.textContent = "SHOW";
      description.textContent = `Scout found: ${targets.length} test IDs`;

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
    targets.forEach(target => {
      const container = document.querySelector('.scout-qa--label-wrap');
      toggle.textContent = "HIDE";
      description.textContent = 'Hit the switch to highlight test IDs'
      container.remove();
      target.classList.remove(highlightClass);
    })
  }
}


document.getElementById('scout-toggle').addEventListener('click', (e) => {
  toggleHighlight(e);
  // browser.tabs.executeScript(null, {
  //   code: `toggleHighlight(e)`
  // })
});

