import React, { PropTypes } from 'react';
import { Router }           from 'react-router';
import ReactDOM             from 'react-dom';

import styles               from './styles.module.css';

class App extends React.Component {
  static propTypes = {
    routes:  PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  // class getter
  get content() {
    return (<Router 
        routes={this.props.routes}
        history={this.props.history} />);
  };

  render() {
    return (
      <div style={ { height: '100%' } }>
        { this.content }
      </div>
    );
  };
}

// const App = React.createClass({
//   render: function() {
//     return (
//       <div className={styles.wrapper}>
//         <h1>
//           <i className="fa fa-star"></i>
//           Environment: {__NODE_ENV__}</h1>
//       </div>
//     );
//   }
// });

module.exports = App;