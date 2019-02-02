function displayDeveloperPersonality(id) {
  if (typeof(id) == 'undefined' || id == null) {
  	console.log('The Secret Spy');
    document.getElementById('personality-the-secret-spy').style.display = 'block';
  } else if (id === 'react') {
    console.log('The Crafter');
    document.getElementById('personality-the-crafter').style.display = 'block';
  } else if (id === 'vue') {
  	console.log('The Hipster Frontend Dev');
    document.getElementById('personality-the-hipster-frontend-dev').style.display = 'block';
  } else if (id === 'apple') {
  	console.log('The Steve Jobs Groupie');
    document.getElementById('personality-the-steve-jobs-groupie').style.display = 'block';
  } else if (id === 'firefox') {
  	console.log('The Braveheart Engineer');
    document.getElementById('personality-the-braveheart-engineer').style.display = 'block';
  } else if (id === 'chrome') {
  	console.log('The Crafter');
    document.getElementById('personality-the-crafter').style.display = 'block';
  } else if (id === 'ms') {
  	console.log('The Corporate Shill');
    document.getElementById('personality-the-corporate-shill').style.display = 'block';
  } else {
  	console.log('The Secret Spy');
    document.getElementById('personality-the-secret-spy').style.display = 'block';
  }
}


function detectDeveloperPersonality () {
  var parser = new UAParser();
  var results = parser.getResult();

  console.log(results);

  console.log(results.browser);
  console.log(results.device);
  console.log(results.os);
  console.log(results.os.version);
  console.log(results.engine.name);
  console.log(results.cpu.architecture);

  
  if (typeof(__REACT_DEVTOOLS_GLOBAL_HOOK__) !== 'undefined') {
    displayDeveloperPersonality('react');
  } else if (typeof(__VUE_DEVTOOLS_GLOBAL_HOOK__) !== 'undefined') {
    displayDeveloperPersonality('vue');
  } else if (results.browser.name === "Safari" && (results.os.name === "iOS" || results.os.name === "Mac OS")) {
  	displayDeveloperPersonality('apple');
  } else if (results.browser.name === "Firefox") {
  	displayDeveloperPersonality('firefox');
  } else if (results.browser.name === "Chrome") {
    displayDeveloperPersonality('chrome');
  } else if (results.broswer.name === 'Edge' || results.browser.name === 'Internet Explorer') {
  	displayDeveloperPersonality('ms');
  } else {
  	displayDeveloperPersonality('none');
  }

  return results;
}
