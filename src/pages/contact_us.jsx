import React, { Component, useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

// This is where we'll input the google map
function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 50.823212, lng: -0.35754 }}
    >
      <Marker
        name="Nam Yang Worthing"
        position={{ lat: 50.823212, lng: -0.35754 }}
        onClick={InfoWindow.toggleOpen}
      >
        <InfoWindowComponent />
      </Marker>
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
const InfoWindowComponent = (props) => {
  return (
    <InfoWindow onCloseClick={props.toggleClose} options={{ maxWidth: 320 }}>
      <div>
        <h3>Nam Yang Worthing</h3>
        <span>80A Dominion Rd, Worthing BN14 8JT</span>
      </div>
    </InfoWindow>
  );
};

export class ContactUs extends Component {
  render() {
    return (
      // div container style width and height always needs to be set explicitly
      <div style={{ width: "90vw", height: "40vh" }}>
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
