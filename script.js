//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
  ];
  
  // Function to strip 'a', 'an', 'the' from the beginning of a string
  function stripArticle(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
  }
  
  // Sort bands alphabetically, ignoring articles
  const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));
  
  // Populate the list
  const bandList = document.getElementById('band');
  sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
  });
  