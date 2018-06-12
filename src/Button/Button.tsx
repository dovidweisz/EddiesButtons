import * as React from 'react';
import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  HTMLAttributes
} from 'react';

export type buttonColor =
  | 'primary1'
  | 'primary2'
  | 'secondary1'
  | 'secondary2'
  | 'load-more'
  | 'tertiary';

export interface ButtonBaseProps {
  color?: buttonColor;
  ghost?: boolean;
  small?: boolean;
  width?: 'wide' | 'x-wide' | 'fit-width' | null;
  large?: boolean;
}

export type IButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
export type IInputButtonProps = ButtonBaseProps &
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
}: ButtonBaseProps &
  HTMLAttributes<HTMLElement> & { children: (props: any) => any }) => {
  const colorClass = color ? color : '';
  const ghostClass = ghost ? 'ghost' : '';

  const sizeClasses = small
    ? 'small'
    : `${width ? width : ''} ${large ? 'large' : ''}`;
  const parentClassname = className ? className : '';

  className = `${parentClassname} button ${colorClass} ${ghostClass} ${sizeClasses}`;
  return children({ ...otherAttributes, className });
};

export const Button = ({ children, ...otherAttributes }: IButtonProps) => {
  return (
    <ButtonBase {...otherAttributes}>
      {props => <button {...props}>{children}</button>}
    </ButtonBase>
  );
};

export const InputButton = (inputProps: IInputButtonProps) => {
  return (
    <ButtonBase {...inputProps}>
      {props => <input type="button" {...props} />}
    </ButtonBase>
  );
};
