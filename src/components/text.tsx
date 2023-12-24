import React from "react";

interface TextProps {
  text?: any;
  color?: string;
  size?: string;
  bold?: boolean;
  underline?: boolean;
  children?: React.ReactNode;
  ellipsis?: boolean;
}

const Text: React.FC<TextProps> = ({
  text,
  children,
  bold,
  underline,
  ellipsis,
  color = "black",
  size = "14px",
}) => {
  const textStyle: React.CSSProperties = {
    color: color,
    fontSize: size,
  };

  if (bold) textStyle.fontWeight = "bold";
  if (underline) textStyle.textDecoration = "underline";
  const content = text !== undefined ? text : children;

  return (
    <p
      style={textStyle}
      className={ellipsis ? "truncate" : ""}
    >
      {content}
    </p>
  );
};

export default Text;
