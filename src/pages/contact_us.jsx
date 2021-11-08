import React, { Component, useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

// This is where we'll input the google map
function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 50.823212, lng: -0.35754 }}
    >
      <Marker
        position={{ lat: 50.823212, lng: -0.35754 }}
        onClick={() => {
          setSelectedMarker();
        }}
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export class ContactUs extends Component {
  render() {
    return (
      <div style={{ width: "100vw", height: "40vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
          libraries=geometry,drawing,places&key=AIzaSyCsQkrNyQJsoji1MI0Cwci2h5gK4HJJtfo`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
  }
}
