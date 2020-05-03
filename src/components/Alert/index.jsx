import React from "react";

const alertType = (type) => {
  const defaultClasses = "mb1 py0-5 px1 bdrd0-25";
  if (type === "danger") {
    return `${defaultClasses} bg-danger cl-white`;
  } else if (type === "warning") {
    return `${defaultClasses} bg-warning`;
  }
  return defaultClasses;
};

const Alert = ({ children, type }) => (
  <div className={alertType(type)} role="alert">
    {children}
  </div>
);

export default Alert;
