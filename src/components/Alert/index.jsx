import React from "react";

const alertType = (type) => {
  const defaultClasses = "mb1 py0-5 px1 bdrd0-25 x xac";
  if (type === "danger") {
    return `${defaultClasses} bg-danger cl-white`;
  } else if (type === "warning") {
    return `${defaultClasses} bg-warning`;
  }
  return defaultClasses;
};

const Alert = ({ children, type }) => (
  <div className={alertType(type)} role="alert">
    <div className="mr0-5 fs1-25">🛈</div>
    <div>{children}</div>
  </div>
);

export default Alert;
