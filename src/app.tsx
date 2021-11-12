import Aroute from './routes/Aroute';
import Broute from './routes/Broute';

export function patchRoutes({ routes }: any) {
  routes[1].routes = Aroute.routes;
}

export async function getInitialState() {
  // 启用@umijs/plugin-initial-state
  const data = await fetch('/api/users', { method: 'get' }).then((res) =>
    res.json(),
  );
  return data;
}

export function render(oldRender: any) {
  oldRender();
}
