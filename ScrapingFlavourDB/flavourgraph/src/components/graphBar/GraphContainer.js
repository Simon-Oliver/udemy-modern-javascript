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

  renderList() {
    const data = flavourData[0].pairing.map((e, i) => (
      <Bar data={e.common_molecules} name={e.name} key={i} index={i} />
    ));

    return data;
  }

  componentDidMount() {
    this.renderList();
    this.setState(prevState => ({
      barStyle: { ...prevState.barStyle, width: `${flavourData[0].pairing[0].common_molecules}px` }
    }));
  }

  render() {
    return <div className="graphcontainer">{this.renderList()}</div>;
  }
}

export default GraphContainer;
