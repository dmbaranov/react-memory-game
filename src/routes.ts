import { RouteProps } from 'react-router-dom';
import Game from '@/containers/game';
import Settings from '@/containers/settings';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Settings
  },
  {
    path: '/game',
    component: Game
  }
];

export default routes;
