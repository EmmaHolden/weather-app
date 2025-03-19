import { ReactNode } from "react";
import "./Widget.css";

interface WidgetProps {
  children?: ReactNode | ReactNode[];
}

const Widget = ({ children }: WidgetProps) => {
  return <div className="widget frosted-item">{children}</div>;
};

export default Widget;
