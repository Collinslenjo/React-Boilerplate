import React from 'react';

class AboutComponent extends React.Component{
  render(){
    return(
      <div className="container">
      <div className="row">
        <div className="panel">
          <div className="panel-header">
            <h4>About Me</h4>
          </div>
          <div className="panel-body">
          <p>This is my Description Right here</p>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default AboutComponent
