import React from 'react';
import { browserHistory, Router, Route, Redirect } from 'react-router';

import makeMainRoutes from './views/Main/routes';

const Home = React.createClass({
  render: function() {
    return (
      <div>Hello World</div>
    );
  }
});

export const makeRoutes = () => {
  const main = makeMainRoutes();

  return (
    <Route path=''>
      { main }
    </Route>
  )
};

export default makeRoutes;