import type { Ref } from "react";
import React, { forwardRef } from "react";
import styles from "./button.module.css";

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref: Ref<HTMLButtonElement>) => {
  return <button className={styles.root} {...props} ref={ref} />;
});

Button.displayName = "Button";

export default Button;
