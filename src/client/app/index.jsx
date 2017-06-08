import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import AboutComponent from './About.jsx';


class App extends React.Component {
  render () {
    return(
	     <div className="container-fluid">
	      <div className="row">
	       <div className="col-md-6 col-md-offset-3">
	       	<h3>Hello Guys!</h3>
          	<AboutComponent />
          	<AwesomeComponent />
           </div>
          </div>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
