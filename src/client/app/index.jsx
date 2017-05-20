import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import AboutComponent from './About.jsx';

class App extends React.Component {
  render () {
    return(
	       <div>
	       <h1>Hello Guys!</h1>
          <AboutComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
