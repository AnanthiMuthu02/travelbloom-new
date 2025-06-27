// Array of destination objects
const destinations = [
  {
    title: "Maldives",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"

  },
  {
    title: "Bali",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
  },
  {
    title: "New York",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  },
  {
    title: "Tokyo",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
  },
  {
    title: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


  }

];

// Function to load destinations dynamically
function loadDestinations() {
  const container = document.getElementById('destinationContainer');
  destinations.forEach(dest => {
    const card = document.createElement('div');
    card.className = 'destination-card';
   card.innerHTML = `
    <img src="${dest.image}" alt="${dest.title}">
    <h3>${dest.title}</h3>
    <button onclick="bookNow('${dest.title}')">Book Now</button>
  `;

  container.appendChild(card);
});
}
window.onload = loadDestinations;

function bookNow(destination) {
  window.location.href = `booknow.html?destination=${encodeURIComponent(destination)}`;
}