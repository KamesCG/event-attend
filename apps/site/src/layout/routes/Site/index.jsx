/* --- Global --- */
import React from 'react';
import {Router} from '@reach/router';
/* --- Local --- */
import {Site} from 'templates';

import {Home, About, CreateEvent, Event, Events} from 'pages';
/* --- Component --- */
const IndexPage = () => (
  <Site>
    <Router primary={false} style={{width: '100%'}}>
      <Home path="/" />
      <About path="/about" />
      <Events path="/events" />
      <Event path="/event/:alias" />
      <CreateEvent path="/create/event" />
    </Router>
  </Site>
);

export default IndexPage;
