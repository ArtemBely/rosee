import Main from './Main';
import Order from './Order';
import Profile from './Profile';

const routes = [
  {
    path: ['/', '/present', '/once', '/half', '/year', '/enter'],
    exact: true,
    component: Main
  },
  {
    path: ['/order', '/order/everyMonth', '/order/everyYear',
     '/order/halfYear', '/order/everyMonthCombi',
     '/order/everyMonthFat', '/order/everyMonthDry',
     '/order/halfYearCombi', '/order/halfYearFat',
     '/order/halfYearDry', '/order/everyYearCombi',
     '/order/everyYearFat', '/order/everyYearDry'
   ],
    exact: true,
    component: Order
  },
  {
    path: ['/profile', '/profile/changeName', '/profile/changeMail',
     '/profile/changePhone', '/profile/changeAddress', '/profile/changePass'],
    exact: true,
    component: Profile
  }
]

export default routes;
