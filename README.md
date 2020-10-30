# [Scout](https://scout.codes)
Scout is a QA tool for finding and inspecting UI elements with test IDs applied with the `data-test` attribute. 

## Download 🚀
Scout is available as a browser extension for Chrome and [Firefox](#firefox-support). [Get it here](#)!

![Scout Hero](img/scout-hero.png)

## How to Use 🔧
Toggle Scout `on` to search the DOM for all `data-test` attributes and highlight them. You can then hover on these elements to showcase the test ID values.

Toggle Scout `off` to remove the highlight feature.

## Notes ✨
- Scout only runs on elements that are present on the DOM
- You'll need to trigger the highlighter anytime you navigate to a new page or the contents re-render with new elements
- Scout will keep track of the state you left it in, even when the popup closes

Check out the [demo page](https://scout.codes/demo) for an example!

---

## [Firefox Support](#firefox-support)

Scout v1.1 introduces beta support for Scout in Firefox via the WebExtensions API. To install, follow these steps:

1. Download the packaged extension (`.xpi`) file [here](/web-ext-artifacts).
2. In Firefox, visit `about:addons`
3. Click on the settings gear underneath the search bar.
4. Click _Install Add-on From File..._
5. Choose the `.xpi` file you downloaded in Step 1.
6. Grab yourself a nice drink and do some QA'ing. 🍹🍹🍹

### Known Issues in Firefox

The extension works fine. However, the pop-up dialog that appears when you activate the extension has the following issues:

- Switching Scout "on" will successfully activate Scout but the switch's label will read 'Off'.
- It does not currently show the number of `data-test` elements that Scout finds on the current page.
