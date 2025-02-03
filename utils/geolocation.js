const { Client } = require('@googlemaps/google-maps-services-js');
const env = require('../config/env');

const client = new Client({});

// Convert address to coordinates (geocoding)
const geocodeAddress = async (address) => {
  try {
    const response = await client.geocode({
      params: {
        address,
        key: env.GOOGLE_MAPS_API_KEY,
      },
    });

    const { lat, lng } = response.data.results[0].geometry.location;
    return { latitude: lat, longitude: lng };
  } catch (err) {
    console.error('Geocoding error:', err.message);
    throw new Error('Failed to geocode address');
  }
};

// Calculate distance between two coordinates (in kilometers)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
    Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

// Find salons within a radius (e.g., 10km)
const findNearbySalons = async (userLat, userLon, salons, maxDistance = 10) => {
  return salons.filter(salon => {
    const distance = calculateDistance(
      userLat,
      userLon,
      salon.location.latitude,
      salon.location.longitude
    );
    return distance <= maxDistance;
  });
};

module.exports = { geocodeAddress, calculateDistance, findNearbySalons };