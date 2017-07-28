import React from 'react';
import Map from './Map';


var ICON = '../images/bicycle.png';
var STOCKHOLM = {lat: 59.3293, lng: 18.0686};
var LOCATIONS = [
  {lat: 59.3630, lng: 18.1468, price: '500,00kr', image: ICON},
  {lat: 59.3050, lng: 18.1088, price: '500,00kr', image: ICON},
  {lat: 59.3312, lng: 18.0407, price: '500,00kr', image: ICON},
  {lat: 59.3689, lng: 18.0084, price: '500,00kr', image: ICON},
  {lat: 59.3315, lng: 18.0715, price: '500,00kr', image: ICON},
  {lat: 59.3118, lng: 18.0663, price: '500,00kr', image: ICON}
];

export default class BikeApp extends React.Component {
  render() {
    return (
      <div>
      <Map icon={ICON} center={STOCKHOLM} locations={LOCATIONS}/>
      </div>
    );
  }
}
