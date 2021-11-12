import Aroute from './routes/Aroute';
import Broute from './routes/Broute';

export function patchRoutes({ routes }: any) {
  routes[1].routes = Aroute.routes;
}

export function render(oldRender: any) {
  oldRender();
}
