export interface GeoLocationMongoDB {
  type: 'Point';
  coordinates: [number, number];
}

export interface GeoLocation {
  lat: number;
  lng: number;
}
