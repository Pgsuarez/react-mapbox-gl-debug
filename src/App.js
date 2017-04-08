import React, { Component } from 'react';
import ReactMap from 'react-mapbox-gl';
import './App.css'

const accessToken = "pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2l4b3V0Z3RpMDAxczJ4cWk2YnEzNTVzYSJ9.MFPmOyHy8DM5_CVaqPYhOg";
const style = "mapbox://styles/mapbox/streets-v9";

const mapStyle = {
  height: '100vh',
  width: '100vw'
}

class App extends Component {
  render() {
    return (
      <div className='Map-container'>
        <ReactMap
          style={style}
          accessToken={accessToken}
          containerStyle={mapStyle}
        />
      </div>
    );
  }
}

export default App;
