import React from 'react';
import Header from './Header';
import CosmeticMasks from './CosmeticMasks';
import EveryWeek from './EveryWeek';
import Advantages from './Advantages';
import MasksInside from './MasksInside';
import Envelope from './Envelope';


class Main extends React.Component{
  render() {
    return(
      <div>
          <Header />
    		  <CosmeticMasks />
          <EveryWeek />
    		  <Advantages />
    		  <MasksInside />
			  <Envelope />
      </div>
    )
  }
}

export default Main;
