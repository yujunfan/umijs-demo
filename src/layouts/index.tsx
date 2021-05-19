const Layouts = (props) => {
  return (
    <div>
      this is layout
      <div style={{ padding: 20 }}>{props.children}</div>
    </div>
  );
};
export default Layouts;
