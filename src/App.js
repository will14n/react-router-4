import React from 'react'
import {ReactRouterBrowser as Router, Link, Match, Miss } from 'react-router'

import Home from './Home'
import Topics from './Topics'
import About from './About'
import NotFound from './NotFound'

const App = () => {
 <div>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <hr />
      <Match exactly pattern="/" component={Home} />
      <Match exactly pattern="/about" component={About} />
      <Match exactly pattern="/topics" component={Topics} />
      <Miss component={NotFound} />
    </div>
  </Router>
 </div>
}

export default App