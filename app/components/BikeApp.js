import React from 'react';
import Map from './Map';
import BikeInfo from './BikeInfo';


export default class BikeApp extends React.Component {
  render() {
    return (
      <div>
      <h2>Biking</h2>
      <Map />
      <BikeInfo />
      </div>
    );
  }
}
