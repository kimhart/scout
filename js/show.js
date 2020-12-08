var toggle = document.querySelector('.scout-qa--toggle-slider');
var description = document.querySelector('.scout-qa--description');
var targets = Array.from(document.querySelectorAll('[data-test]'));

targets.forEach(target => {
  const existingContainer = target.querySelector('.scout-qa--label-wrap');

  if (!existingContainer) {
    const container = document.createElement('div');
    const valueWrap = document.createElement('div');
    const labelWrap = document.createElement('div');
  
    const label = document.createTextNode('data-test');
    const value = target.dataset.test;
  
    container.classList.add('scout-qa--label-wrap');
    container.append(labelWrap);
    container.append(valueWrap);
  
    labelWrap.append(label);
    valueWrap.append(value);
  
    labelWrap.classList.add('scout-qa--label');
    valueWrap.classList.add('scout-qa--value');
    
    target.append(container);
    target.classList.add('scout-qa--highlight');
  }
});

