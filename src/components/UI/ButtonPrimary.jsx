import React from "react";
import classNames from "classnames";

export default function ButtonPrimary({
  children,
  className,
  onClick,
  ...props
}) {
  const cx = classNames(["button-primary-blue", className]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}
