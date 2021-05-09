import React from 'react';

class Profile extends React.Component{

  constructor() {

    super()

    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }
    this.state = {
      user
    }
  }

  userData = () => {
    if(this.state && this.state.user) {
      return (
        <div className='userData'>
          <p>{this.state.user.username}</p>
          <p>{this.state.user.email}</p>
          <p>{this.state.user.userphone}</p>
          <p>{this.state.user.typeOfPayment}</p>
          <p>{this.state.user.timestamp}</p>
          <p>{this.state.user.useraddress}</p>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
         <p><a href='/profile/logout'>Выйти</a></p>
         {this.userData()}
      </div>
    )
  }
}

export default Profile;
