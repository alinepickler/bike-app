import React from 'react';
import GoogleMapsKey from './GoogleMapsKey';
import GoogleMaps from './GoogleMaps';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  initMap() {
    var stockholm = {lat: 59.3293, lng: 18.0686};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: stockholm
    });

    var locations = [
      {lat: 59.3630, lng: 18.1468, label: '1', title: 'a'},
      {lat: 59.3050, lng: 18.1088, label: '2',  title: 'b'},
      {lat: 59.3312, lng: 18.0407, label: '3',  title: 'c'},
      {lat: 59.3689, lng: 18.0084, label: '4',  title: 'd'},
      {lat: 59.3315, lng: 18.0715, label: '5',  title: 'e'},
      {lat: 59.3118, lng: 18.0663, label: '6',  title: 'f'}
    ];

    locations.forEach(
      location=>new google.maps.Marker({
        position: location,
        map: map,
        label: location.label,
        title: location.title
      }));
  }

  componentDidMount() {
    window.initMap = this.initMap;
    GoogleMaps(GoogleMapsKey, 'initMap');
  }

  render() {
    return <div id="map" style={{height:'600px', width: '100%'}}></div>
  }
}
