import React from 'react';
import Map from './Map';

export default class BikeApp extends React.Component {
  render() {
    return (
      <div>
      <Map icon={ICON} center={STOCKHOLM} bikes={BIKES}/>
      </div>
    );
  }
}

var ICON = '../images/bike-marker.png';
var STOCKHOLM = {lat: 59.3293, lng: 18.0686};
var DESCRIPTION = "Aenean ultrices nibh id facilisis suscipit. Aliquam mauris enim, tempus ac cursus et, consequat quis enim. Sed eget lectus euismod est molestie dapibus sit amet vel ante. Ut eget ornare metus. Duis eget lectus eu odio elementum lobortis. Etiam hendrerit urna at ultricies commodo.";
var BLUE_BIKE_IMAGE = '../images/blue-bike.jpg';
var BLACK_BIKE_IMAGE = '../images/black-bike.jpg';
var BIKES = [
  {lat: 59.3630, lng: 18.1468, price: '200,00kr', image: BLUE_BIKE_IMAGE, description: DESCRIPTION},
  {lat: 59.3050, lng: 18.1088, price: '500,00kr', image: BLACK_BIKE_IMAGE, description: DESCRIPTION},
  {lat: 59.3312, lng: 18.0407, price: '350,00kr', image: BLUE_BIKE_IMAGE, description: DESCRIPTION},
  {lat: 59.3689, lng: 18.0084, price: '400,00kr', image: BLACK_BIKE_IMAGE, description: DESCRIPTION},
  {lat: 59.3315, lng: 18.0715, price: '210,00kr', image: BLUE_BIKE_IMAGE, description: DESCRIPTION},
  {lat: 59.3118, lng: 18.0663, price: '150,00kr', image: BLACK_BIKE_IMAGE, description: DESCRIPTION}
];
