import React from 'react';
import Header from './Header';
import CosmeticMasks from './CosmeticMasks';
import EveryWeek from './EveryWeek';
import Advantages from './Advantages';
import MasksInside from './MasksInside';


class Main extends React.Component{
  render() {
    return(
      <div>
          <Header />
		  <CosmeticMasks />
          <EveryWeek />
		  <Advantages />
		  <MasksInside />
      </div>
    )
  }
}

export default Main;
