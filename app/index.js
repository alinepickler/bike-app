import React from 'react';
import ReactDOM from 'react-dom';
import BikeApp from './components/BikeApp';

class App extends React.Component {
  render() {
    return (
      <div>
        <BikeApp />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
