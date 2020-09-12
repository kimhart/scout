var testIds = '[data-qa], [data-test]';

function toggleHighlight(e) {
  const on = e.target.checked;
}

document.getElementById('scout-qa--toggle').addEventListener('click', toggleHighlight);
