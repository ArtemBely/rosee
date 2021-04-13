import React from 'react';
import Header from './Header';
import CosmeticMasks from './CosmeticMasks';
import EveryWeek from './EveryWeek';
import Advantages from './Advantages';
import MasksInside from './MasksInside';
import Envelope from './Envelope';
import DeliveryIsFree from './DeliveryIsFree';
import Buy from './Buy';
import Promotions from './Promotions';
import Footer from './Footer';

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
          <DeliveryIsFree />
          <Buy />
		  <Promotions />
		  <Footer />
      </div>
    )
  }
}

export default Main;
