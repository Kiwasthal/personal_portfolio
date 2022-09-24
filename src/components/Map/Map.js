import GoogleMapReact from 'google-map-react';

const mapStyle = [
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#2f343b',
      },
      {
        weight: 1,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#703030',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#2f343b',
      },
    ],
  },
];

const GoogleApiMap = () => {
  return (
    <div className="w-screen h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC3mTtb9VqNY3wDOzOf4N1jmTeFysStoss' }}
        defaultZoom={13}
        defaultCenter={{
          lat: 37.985855,
          lng: 23.721779,
        }}
        options={{ styles: mapStyle }}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleApiMap;
