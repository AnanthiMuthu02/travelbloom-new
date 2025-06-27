function searchRecommendations() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const resultsSection = document.getElementById('resultsSection');
  const resultsList = document.getElementById('resultsList');

  const destinations = [
    'Bali',
    'Paris',
    'New York',
    'Tokyo',
    'Cape Town',
    'Rome',
    'Maldives',
    'Santorini',
    'Dubai',
    'Istanbul'
  ];

  const matchedDestinations = destinations.filter(destination =>
    destination.toLowerCase().includes(query)
  );

  // Clear previous results
  resultsList.innerHTML = '';

  if (matchedDestinations.length > 0) {
    matchedDestinations.forEach(destination => {
      const listItem = document.createElement('li');
      listItem.textContent = destination;
      resultsList.appendChild(listItem);
    });
  } else {
    const noResultItem = document.createElement('li');
    noResultItem.textContent = 'No destinations found.';
    resultsList.appendChild(noResultItem);
  }

  resultsSection.style.display = 'block';
}
