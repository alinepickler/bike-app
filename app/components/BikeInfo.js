import React from 'react';

export default class BikeInfo extends React.Component {
  render () {
    if (this.props.bike == {}) {
      return <h1>Biking!</h1>
    } else {
        return (
          <div style={{height:'600px', width: '30%', display : 'inline-block'}}>
            <div style={{padding: '10px 40px'}}>
              <h1>Biking</h1>
              <img src={this.props.bike.image} style={{width: '100%'}}/>
              <h2>{this.props.bike.price}</h2>
              <h3>Description title</h3>
              <p>{this.props.bike.description}</p>
            </div>
          </div>
        );
    }
  }
}
