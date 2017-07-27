import React from 'react';
import Map from './Map';
import BikeInfo from './BikeInfo';

var STOCKHOLM = {lat: 59.3293, lng: 18.0686};
var LOCATIONS = [
  {lat: 59.3630, lng: 18.1468, label: '1', title: 'a'},
  {lat: 59.3050, lng: 18.1088, label: '2',  title: 'b'},
  {lat: 59.3312, lng: 18.0407, label: '3',  title: 'c'},
  {lat: 59.3689, lng: 18.0084, label: '4',  title: 'd'},
  {lat: 59.3315, lng: 18.0715, label: '5',  title: 'e'},
  {lat: 59.3118, lng: 18.0663, label: '6',  title: 'f'}
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
