import * as React from "react";
import { IButtonBaseProps } from "../Button";

interface CodeDisplayProps extends IButtonBaseProps {
  children: string;
}

export const CodeDisplay = ({
  color,
  ghost,
  small,
  width,
  large,
  children
}: CodeDisplayProps) => (
  <div>
    <code>
      &lt;Button
      {color && ` color="${color}"`}
      {ghost && " ghost"}
      {small && " small"}
      {width && ` width="${width}"`}
      {large && " large"}
      &gt;
      {children}
      &lt;/Button&gt;
    </code>
    <br />
    <code>
      &lt;InputButton value="{children}"
      {color && ` color="${color}"`}
      {ghost && " ghost"}
      {small && " small"}
      {width && ` width="${width}"`}
      {large && " large"}
      /&gt;
    </code>
  </div>
);
