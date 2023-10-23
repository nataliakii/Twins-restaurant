export function isLocationWithinRadius(lat1, lon1, lat2, lon2, radiusInMeters) {
  // Radius of the Earth in meters
  const earthRadius = 6371000;
  // Convert latitude and longitude from degrees to radians
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  // Calculate the distance using the Haversine formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance in meters
  const distance = earthRadius * c;

  // Check if the distance is within the specified radius
  return distance <= radiusInMeters;
}
