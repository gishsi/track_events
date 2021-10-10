import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const Map = ({ eventData, eventID, categories, center, zoom, onShowInfo }) => {
  // Check if the coordinates are correct, a marker will not be placed on the map
  const checkCoordinates = (latitude, longitude) => {
    if (
      isNaN(latitude) ||
      isNaN(longitude) ||
      latitude === undefined ||
      longitude === undefined ||
      latitude === null ||
      longitude === null
    ) {
      return null;
    }
  };
  const setDescription = (id) => {
    for (const cat of categories) {
      if (cat.id === id) {
        return cat.description;
      }
    }
  };

  const setMarker = (
    id,
    markerId,
    markerIcon,
    markerDescription,
    eventTitle,
    latitude,
    longitude,
    i
  ) => {
    if (id === markerId) {
      markerDescription = setDescription(markerId);
      // Check if the coordinates are valid
      if (checkCoordinates(latitude, longitude) === null) return null;
      return (
        <Marker
          lat={latitude}
          lng={longitude}
          key={i}
          icon={markerIcon}
          des={markerDescription}
          title={eventTitle}
          showInfo={() =>
            onShowInfo(latitude, longitude, markerDescription, eventTitle)
          }
        />
      );
    }
  };
  // Markers for different events
  const markers = eventData.map((ev, i) => {
    let latitude = ev.geometries[0].coordinates[1];
    let longitude = ev.geometries[0].coordinates[0];
    let category = eventID;
    let id = ev.categories[0].id;
    let description = '';
    let eventTitle = ev.title;
    switch (category) {
      case 6:
        return setMarker(
          id,
          6,
          'drought',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 7:
        return setMarker(
          id,
          7,
          'dust_and_haze',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 8:
        return setMarker(
          id,
          8,
          'fire',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 9:
        return setMarker(
          id,
          9,
          'flood',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 10:
        return setMarker(
          id,
          10,
          'storm',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 12:
        return setMarker(
          id,
          12,
          'volcano',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 13:
        return setMarker(
          id,
          13,
          'water_color',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 14:
        return setMarker(
          id,
          14,
          'landslides',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 15:
        return setMarker(
          id,
          15,
          'sea_and_lake_ice',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 16:
        return setMarker(
          id,
          16,
          'earthquake',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 17:
        return setMarker(
          id,
          17,
          'snow',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 18:
        return setMarker(
          id,
          18,
          'temp',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      case 19:
        return setMarker(
          id,
          19,
          'manmade',
          description,
          eventTitle,
          latitude,
          longitude,
          i
        );
      default:
        return null;
    }
  });
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      {markers}
    </GoogleMapReact>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
