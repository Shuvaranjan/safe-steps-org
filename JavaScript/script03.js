// script.js
// Initialize the Map
const map = L.map('map-container').setView([51.505, -0.09], 13); // Default coordinates (London)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker for a safe zone
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Safe Zone: Central London')
    .openPopup();

// Book Ride Form Submission
document.getElementById('ride-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;
    alert(`Ride booked from ${pickup} to ${destination}. Stay safe!`);
});