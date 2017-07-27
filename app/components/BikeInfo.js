import React from 'react';

export default class BikeInfo extends React.Component {
  render () {
    return (
      <div style={{height:'600px', width: '30%', display : 'inline-block'}}>
        <div style={{padding: '10px 40px'}}>
          <h1>Biking</h1>
          <img src="../images/blue.png" alt="Mountain View" style={{width: '100%'}}/>
          <h2>500,00</h2>
          <h3>Description title</h3>
          <p>
            Aenean ultrices nibh id facilisis suscipit. Aliquam mauris enim, tempus ac cursus et, consequat quis enim. Sed eget lectus euismod est molestie dapibus sit amet vel ante. Ut eget ornare metus. Duis eget lectus eu odio elementum lobortis. Etiam hendrerit urna at ultricies commodo. Mauris non scelerisque dolor, a convallis lacus. Suspendisse eget leo in leo varius tristique vitae vitae mauris.
          </p>
        </div>
      </div>
    );
  }
}
