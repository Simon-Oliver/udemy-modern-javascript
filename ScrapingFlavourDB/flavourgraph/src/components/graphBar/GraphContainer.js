import React, { Component } from 'react';
import Bar from './Bar';

import flavourData from '../../data/flavourData.json';

import './GraphContainer.css';

class GraphContainer extends Component {
  state = {
    barStyle: {
      height: '50px',
      width: '0px'
    }
  };

  componentDidMount() {
    console.log(flavourData[0].pairing[0].common_molecules);
    this.setState(prevState => ({
      barStyle: { ...prevState.barStyle, width: `${flavourData[0].pairing[0].common_molecules}px` }
    }));
  }

  render() {
    return (
      <div className="graphcontainer">
        <Bar barStyle={this.state.barStyle} />
      </div>
    );
  }
}

export default GraphContainer;
