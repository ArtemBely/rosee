import React from 'react';
import Header from './Header';
import CosmeticMasks from './CosmeticMasks';
import EveryWeek from './EveryWeek';

class Main extends React.Component{
  render() {
    return(
      <div>
          <Header />
		      <CosmeticMasks />
          <EveryWeek />
      </div>
    )
  }
}

export default Main;
