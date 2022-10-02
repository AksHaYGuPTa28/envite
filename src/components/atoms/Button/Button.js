import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Button = ({
  type,
  className,
  children,
  disabled,
  onClick,
  to = null,
  target = "_self",
}) => {
  const navigate = useNavigate();
  if (to) {
    onClick = () => navigate(to);
  }
  if (to && target === "_blank") {
    onClick = () => window.open(to, "_blank");
  }

  return (
    <button
      data-testid="button"
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  className: "",
  disabled: false,
  type: "button",
  loading: false,
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
