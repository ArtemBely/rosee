import Main from './Main';
import Order from './Order';

const routes = [
  {
    path: ['/', '/present'],
    exact: true,
    component: Main
  },
  {
    path: '/order',
    exact: true,
    component: Order
  }
]

export default routes;
