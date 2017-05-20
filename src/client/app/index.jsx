import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import AboutComponent from './About.jsx';

class App extends React.Component {
  render () {
    return(
	       <div>
	       <h3><u><i>Hello Guys!</i></u></h3>
          <AboutComponent />
          <AwesomeComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
