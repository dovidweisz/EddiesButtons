import * as React from "react";
import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  HTMLAttributes
} from "react";

export type buttonColor =
  | "primary1"
  | "primary2"
  | "secondary1"
  | "secondary2"
  | "load-more"
  | "tertiary";

export interface IButtonBaseProps {
  color?: buttonColor;
  ghost?: boolean;
  small?: boolean;
  width?: "wide" | "x-wide" | "fit-width";
  large?: boolean;
}

export type IButtonProps = IButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
export type IInputButtonProps = IButtonBaseProps &
  InputHTMLAttributes<HTMLInputElement>;

export const ButtonBase = ({
  color,
  ghost,
  small,
  width,
  large,
  className,
  children,
  ...otherAttributes
}: IButtonBaseProps &
  HTMLAttributes<HTMLElement> & { children: (props: any) => any }) => {
  const colorClass = color ? color : "";
  const ghostClass = ghost ? "ghost" : "";

  const sizeClasses = small
    ? "small"
    : `${width ? width : ""} ${large ? "large" : ""}`;
  const parentClassname = className ? className : "";

  className = `${parentClassname} button ${colorClass} ${ghostClass} ${sizeClasses}`;
  return children({ ...otherAttributes, className });
};

export const Button = (props: IButtonProps) => {
  const { children, ...otherAttributes } = props;
  return (
    <ButtonBase {...otherAttributes}>
      {props => <button {...props}>{children}</button>}
    </ButtonBase>
  );
};

export const InputButton = (props: IInputButtonProps) => {
  return (
    <ButtonBase {...props}>
      {props => <input type="button" {...props} />}
    </ButtonBase>
  );
};
