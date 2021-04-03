import React from 'react';
import Header from './Header';
import CosmeticMasks from './CosmeticMasks';

class Main extends React.Component{
  render() {
    return(
      <div>
          <Header />
		  <CosmeticMasks />
      </div>
    )
  }
}

export default Main;
