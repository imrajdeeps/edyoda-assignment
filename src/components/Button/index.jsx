// eslint-disable-next-line react/prop-types
const Button = ({ icon, classes, text }) => {
  return (
    <button className={classes}>
      {text} {icon}
    </button>
  );
};

export default Button;
