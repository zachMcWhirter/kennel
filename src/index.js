import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import Kennel from './components/Kennel';


ReactDOM.render(
  
  // Now update your index.js by adding a root component of <Router /> which gets imported from the React Router package. Within <Router>, place the <Kennel /> child component. This tells React "I will be placing Routes in my Kennel component."
  <Router>
    <Kennel/>
  </Router>,
  document.getElementById('root')
);
