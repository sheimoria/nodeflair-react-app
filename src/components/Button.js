import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-success" onClick={() => onClick(text)}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
