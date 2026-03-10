/**
 * Google Maps Embed
 */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('google-map');
  if (!container || !CONFIG.maps.embedQuery) return;

  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(CONFIG.maps.embedQuery)}&zoom=${CONFIG.maps.zoom}`;

  container.innerHTML = `
    <div class="map-container">
      <iframe src="${src}" allowfullscreen loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación de ${CONFIG.business.name}">
      </iframe>
    </div>`;
});
