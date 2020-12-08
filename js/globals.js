if (!window.scout) {

  window.scout = {
    clickHandler: function(event) {
      if (event.type === 'click') {
        event.stopPropagation();
      }
    }
  }

}