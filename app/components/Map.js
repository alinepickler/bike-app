import React from 'react';
import GoogleMapsKey from './GoogleMapsKey';
import GoogleMaps from './GoogleMaps';
import BikeInfo from './BikeInfo';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBike : null
    }
  }

  componentDidMount() {
    var mapCenter = this.props.center;
    var mapMarker = this.props.icon;
    var mapBikes = this.props.bikes;
    var selectBike = (bike) => this.setState({selectedBike:bike});

    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 12
      });

      mapBikes.forEach((bike) => {
        var marker = new google.maps.Marker({
          position: {lat:bike.lat, lng:bike.lng},
          map: map,
          icon: mapMarker
        });

        marker.addListener('click', () => {
          selectBike(bike);
        });
      });
    }

    window.initMap = initMap;
    GoogleMaps(GoogleMapsKey, 'initMap');
  }

  render() {
    return (
        <div>
          <BikeInfo
          bike={this.state.selectedBike}
          />
          <div id="map" style={{height:'600px', width: '70%', display : 'inline-block'}}>
          </div>
        </div>
      );
  }
}
