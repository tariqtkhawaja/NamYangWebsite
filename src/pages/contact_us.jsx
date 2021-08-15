import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

export class ContactUs extends Component {
  render() {
    return <div>Contact Us</div>;
  }
}
// This is where we'll input the google map
function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 50.82321, lng: -0.35754 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCN47v8fwH3rxI4CR4TuAH_42pSk2uaE9o`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
