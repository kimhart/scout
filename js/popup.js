document.addEventListener("DOMContentLoaded", () => {

  const description = document.querySelector('.scout-qa--description');
  const toggle = document.querySelector('.scout-qa--toggle-slider');

  const getIDs = () => Array.from(document.querySelectorAll('[data-test]'));
  
  function show () {
    // Runs in browser
    chrome.tabs.executeScript({ 
      file: 'js/show.js'
    })

    // Get count from browser to use in Scout
    chrome.tabs.executeScript({
      code: `(${getIDs})()`
    }, (res) => {
      const ids = res[0];
      const countSpan = document.createElement('span');
      toggle.textContent = "ON";
      description.textContent = `Scout found: `;
      countSpan.textContent = `${ids.length} data-test ID${ids.length != 1 ? 's' : ''}`;
      description.append(countSpan);
    });
  }

  function hide() {
    // Runs in browser
    chrome.tabs.executeScript({
      file: "js/hide.js",
    });

    // Runs in Scout 
    const span = document.createElement("span");
    toggle.textContent = "OFF";
    span.textContent = "data-test";
    description.textContent = "Toggle on to highlight ";
    description.append(span);
    description.append(" IDs");
  }

  document.getElementById('scout-toggle').addEventListener('click', (e) => {
    e.target.checked ? show() : hide();
  })
});
