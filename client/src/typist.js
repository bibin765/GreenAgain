import React, {Component} from 'react';
import Typist from 'react-typist';
 
export default class MyComponent extends Component {
 
  render() {
    return (
      <div className="container">
      <Typist>
        <br />
        <br />
        <br />
        <br />
        
        {<h4> Plant a tree,Share to the World,Be an Inspiration
          </h4>}
        {<h4>Add the markers to the Map after you plant,Make your region Green</h4>}
        <Typist.Delay ms={1000}/>
            <h1>#GreenAgainChallenge</h1>
        
      </Typist>
      
      </div>
    );
  }
}
