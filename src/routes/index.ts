import Root from '../views/Root';
import Index from '../views/Index';
import Buttons from '../views/Buttons';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Index,
      },
      {
        path: '/buttons',
        exact: true,
        component: Buttons,
      },
    ],
  },
];
