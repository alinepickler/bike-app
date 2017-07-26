import React from 'react';
import GoogleMapsKey from './GoogleMapsKey';
import GoogleMaps from './GoogleMaps';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: this.props.center,
      zoom: 12
    });

    this.props.locations.forEach((location) => {
      new google.maps.Marker({
        position: location,
        map: map,
        label: location.label,
        title: location.title
      })
    });
  }

  componentDidMount() {
    window.props = this.props;
    window.initMap = this.initMap;
    GoogleMaps(GoogleMapsKey, 'initMap');
  }

  render() {
    return <div id="map" style={{height:'600px', width: '70%'}}></div>
  }
}
