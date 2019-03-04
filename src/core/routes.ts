import { RouteProps } from 'react-router-dom';
import Game from '@/views/containers/game';
import Settings from '@/views/containers/settings';

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
