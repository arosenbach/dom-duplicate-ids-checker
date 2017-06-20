const observer = new MutationObserver(mutations => {
  mutations.filter(mutation => mutation.addedNodes.length)
    .map(mutation => Array.prototype.slice.call(mutation.addedNodes))
    .reduce((a, b) => a.concat(b), [])
    .filter(elem => !!elem.id)
    .map(elem => elem.id)
    .some(id => {
      const ids = document.querySelectorAll('[id=\"' + id + '\"]');
      if (ids.length > 1) {
        console.error('Duplicate ID : ' + id);
        return true;
      }
      return false;
    });
});

observer.observe(document.body, { attributes: false, childList: true, characterData: false, subtree: true }); ";