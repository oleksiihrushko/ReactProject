import { lazy } from 'react';

// };
export default [
  {
    path: '/',
    label: 'HomePage',
    exact: true,
    component: lazy(() => import('./Pages/homePage/HomePage')),
    private: false,
    restricted: true,
  },
  {
    path: '/operations',
    label: 'Operations',
    exact: false,
    // component: lazy(() => import('./Pages/Operations')),
    private: true,
    restricted: false,
  },
  {
    path: '/statistic',
    label: 'Statistic',
    exact: false,
    // component: lazy(() => import('./Pages/Statistic')),
    private: true,
    restricted: false,
  },
  {
    path: '/team',
    label: 'Team',
    exact: false,
    component: lazy(() => import('./Pages/teamPage/TeamPage')),
    private: false,
    restricted: false,
  },
];
