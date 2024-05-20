declare global {
  interface Window {
    kakao: Kakao;
  }
}

interface Kakao {
  maps: {
    load(callback: () => void): void;
    LatLng: new (lat: number, lng: number) => LatLng;
    Map: new (container: HTMLElement, options: MapOptions) => Map;
    Marker: new (options: MarkerOptions) => Marker;
    services: {
      Geocoder: new () => Geocoder;
      Status: {
        OK: string;
      };
    };
  };
}

interface LatLng {
  getLat(): number;
  getLng(): number;
}

interface MapOptions {
  center: LatLng;
  level: number;
}

interface Map {
  setCenter(latlng: LatLng): void;
}

interface MarkerOptions {
  map: Map;
  position: LatLng;
}

interface Marker {
  setMap(map: Map): void;
}

interface Geocoder {
  addressSearch(
    address: string,
    callback: (result: GeocoderResult[], status: string) => void,
  ): void;
}

interface GeocoderResult {
  road_address?: {
    y: string;
    x: string;
  };
  y: string;
  x: string;
}
