import React from 'react';
import GoogleMapsKey from './GoogleMapsKey';
import GoogleMaps from './GoogleMaps';
import BikeInfo from './BikeInfo';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation : {}
    }
  }

  componentDidMount() {
    var _reactThis = this;

    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: _reactThis.props.center,
        zoom: 12
      });

      _reactThis.props.locations.forEach((location) => {
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          icon: _reactThis.props.icon
        });

        var infowindow = new google.maps.InfoWindow({
          content: location.price
        });

        marker.addListener('click', () => {
          _reactThis.setState({selectedLocation : location});
          infowindow.open(marker.get('map'), marker);
        });
      });
    }

    window.initMap = initMap;
    GoogleMaps(GoogleMapsKey, 'initMap');
  }

  render() {
    return (
        <div>
          <BikeInfo location={this.state.selectedLocation} />
          <div id="map" style={{height:'600px', width: '70%', display : 'inline-block'}}>
          </div>
        </div>
      );
  }
}
