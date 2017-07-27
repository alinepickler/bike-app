import React from 'react';
import Map from './Map';
import BikeInfo from './BikeInfo';


var STOCKHOLM = {lat: 59.3293, lng: 18.0686};
var LOCATIONS = [
  {lat: 59.3630, lng: 18.1468, price: '', image: '../images/bicycle.png'},
  {lat: 59.3050, lng: 18.1088, price: '', image: '../images/bicycle.png'},
  {lat: 59.3312, lng: 18.0407, price: '', image: '../images/bicycle.png'},
  {lat: 59.3689, lng: 18.0084, price: '', image: '../images/bicycle.png'},
  {lat: 59.3315, lng: 18.0715, price: '', image: '../images/bicycle.png'},
  {lat: 59.3118, lng: 18.0663, price: '', image: '../images/bicycle.png'}
];

export default class BikeApp extends React.Component {
  render() {
    return (
      <div>
      <BikeInfo />
      <Map center={STOCKHOLM} locations={LOCATIONS}/>
      </div>
    );
  }
}
