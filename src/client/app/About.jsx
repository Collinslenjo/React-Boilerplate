import React from 'react';

class AboutComponent extends React.Component{
  render(){
    return(
      <div className="container">
      <div className="row">
        <div className="panel">
          <div className="panel-header">
            <h3 className="heading">About Me</h3>
          </div>
          <div className="panel-body">
          <p>This is my Description Right here</p>
          <p>I think I made it</p>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default AboutComponent
