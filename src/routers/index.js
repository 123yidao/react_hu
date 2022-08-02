import Menua from '../pages/Menua';
import Menub from '../pages/Menub';
import Menuc from '../pages/Menuc';
import Menud from '../pages/Menud';

const routers = [
  {
    title: '菜单1-1',
    path: '/menua',
    component:Menua,
  },
  {
    title: '菜单1-2',
    path:  '/menub',
    component:Menub,
  },
  {
  	title: '菜单2-1',
    path:  '/menuc',
    component: Menuc,
  },
  {
  	title: '菜单2-2',
    path:  '/menud',
    component: Menud,
  }
];

export default routers;
