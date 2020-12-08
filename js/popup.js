document.addEventListener("DOMContentLoaded", () => {

  const description = document.querySelector('.scout-qa--description');
  const toggle = document.getElementById('scout-toggle');
  const toggleSlider = document.querySelector('.scout-qa--toggle-slider');
  const storage = chrome.storage.sync;

  const getIDs = () => Array.from(document.querySelectorAll('[data-test]'));

  // Load last-used setting when popup launches
  storage.get(['scoutHighlight'], function (setting) {
    if (setting.scoutHighlight) {
      toggle.checked = true;
      show();
    } else {
      toggle.checked = false;
      hide();
    }
  });

  chrome.tabs.executeScript({ 
    file: 'js/globals.js'
  });

  function show () {
    // Remove any residual elements
    storage.remove('scoutHighlight');

    // Save setting in Scout's localstorage
    storage.set({ scoutHighlight: true });

    // Runs in user's browser
    chrome.tabs.executeScript({ 
      file: 'js/show.js'
    })

    // Gets browser data to use in Scout
    chrome.tabs.executeScript({
      code: `(${getIDs})()`
    }, (res) => {
      const ids = res[0];
      const countSpan = document.createElement('span');
      toggleSlider.textContent = "ON";
      description.textContent = `Scout found: `;
      countSpan.textContent = `${ids.length} data-test ID${ids.length != 1 ? 's' : ''}`;
      description.append(countSpan);
    });
  }

  function hide() {
    // Clear Scout's localstorage setting
    storage.set({ scoutHighlight: false });

    // Runs in user's browser
    chrome.tabs.executeScript({
      file: "js/hide.js",
    });

    // Runs in Scout 
    const span = document.createElement("span");
    toggleSlider.textContent = "OFF";
    span.textContent = "data-test";
    description.textContent = "Toggle on to highlight ";
    description.append(span);
    description.append(" IDs");
  }

  toggle.addEventListener('click', (e) => {
    e.target.checked ? show() : hide();
  })
});
