import { RouteProps } from 'react-router-dom';
import Game from '@/views/containers/game';
import Settings from '@/views/containers/settings';
import Over from '@/views/containers/over';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Settings
  },
  {
    path: '/game',
    component: Game
  },
  {
    path: '/over',
    component: Over
  }
];

export default routes;
