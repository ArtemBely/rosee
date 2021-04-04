import React from 'react';
import Header from './Header';
import CosmeticMasks from './CosmeticMasks';
import EveryWeek from './EveryWeek';
import Advantages from './Advantages';


class Main extends React.Component{
  render() {
    return(
      <div>
          <Header />
		      <CosmeticMasks />
          <EveryWeek />
		  <Advantages />
      </div>
    )
  }
}

export default Main;
