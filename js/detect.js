function detectFrameworkDevTools () {
  var result = new Set();

  if (typeof(__REACT_DEVTOOLS_GLOBAL_HOOK__) !== 'undefined') {
    result.add('react');
  }

  if (typeof(__VUE_DEVTOOLS_GLOBAL_HOOK__) !== 'undefined') {
    result.add('vue');
  }

  return result;
}

window.detected = detectFrameworkDevTools();

console.log(window.detected);
