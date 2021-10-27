import BasicLayout from './BasicLayout';
export default (props: any) => {
  const { location } = props;
  const { pathname } = location;
  console.log(props, pathname, 'this is props');
  return <BasicLayout></BasicLayout>;
};
