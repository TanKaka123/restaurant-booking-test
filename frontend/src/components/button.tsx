import React, { FC, ReactNode, MouseEvent } from "react";
import colors from "../constants/theme";

interface ButtonProps {
  round?: string;
  width?: number | string;
  icon?: React.ReactElement<{ icon: string }>;
  content: string;
  isOutlet?: boolean;
  onAction?: (...args: any[]) => void;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isGray?: boolean;
  paddings?: string;
  bgColor?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({
  round,
  type = "button",
  width,
  icon,
  content,
  isOutlet,
  isPrimary,
  isSecondary,
  isGray = false,
  paddings,
  bgColor,
  textColor,
  onAction,
}) => {
  const buttonClasses = `font-bold text-white rounded border-solid border-2`;

  const currentColor = isPrimary
    ? colors.PRIMARY
    : isSecondary
    ? colors.SECONDARY
    : isGray
    ? colors.GRAY
    : colors.PRIMARY;

  const typeButton: React.CSSProperties = {
    color: isOutlet ? currentColor : "white",
    backgroundColor: isOutlet ? "transparent" : currentColor,
    borderColor: isOutlet ? currentColor : "transparent",
  };
  const borderRadiusCss: React.CSSProperties = {
    borderRadius: round || "0",
  };

  if (width) {
    borderRadiusCss.width = width;
  }
  if (paddings) {
    borderRadiusCss.padding = paddings;
  }
  if (bgColor) {
    borderRadiusCss.backgroundColor = bgColor;
  }
  if (textColor) {
    borderRadiusCss.color = textColor;
  }
  return (
    <button
      onClick={onAction}
      className={`${buttonClasses} `}
      style={{ ...typeButton, ...borderRadiusCss }}
      type={type}
      disabled={isGray}
    >
      {icon}
      {content}
    </button>
  );
};

export default Button;
