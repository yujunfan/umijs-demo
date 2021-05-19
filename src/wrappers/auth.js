import { Redirect } from 'umi';
/**
 * 路由权限验证
 */
export default (props) => {
  const useAuth = () => {
    //通过这个方法判断是否有权限
    return { isLogin: true };
  };
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
