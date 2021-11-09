import BasicLayout from './BasicLayout';

//约定式路由时的全局布局文件。
export default (props: any) => {
  const { location } = props;
  const { pathname } = location;
  const isSider = true; //是否需要侧边导航
  return isSider ? <BasicLayout {...props}></BasicLayout> : props.chilren;
};
