import React from 'React';
import Map, { GoogleApiWrapper } from 'google-maps-react';

import { searchNearby } from '../../utils/googleApiHelpers.js';
import Header from 'components/Header/Header';
import styles from './styles.module.css';

export class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }
  onReady(mapProps, map) {
    const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    };
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        })
      }).catch((status, result) => {
        // there was an error
      })
  }
  render() {
    return (
      <div>
        Hello from the container
        <Map
          className={styles.wrapper}
          google={this.props.google}
          onReady={this.onReady.bind(this)}
          visible={false}>
          <Header />
          <div className={styles.content}>
            {this.state.places.map(place => {
              return (<div key={place.id}>{place.name}</div>)
            })}
          </div>

        </Map>
      </div>
    )
  }
};

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container);