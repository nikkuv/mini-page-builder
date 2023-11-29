import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  x?: number;
  y?: number;
  fontSize?: string;
  fontWeight?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  onClick,
  x = 0,
  y = 0,
  fontSize = 'inherit',
  fontWeight = 'normal'
}) => {
  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };

  return <button style={buttonStyle} onClick={onClick}>{text}</button>;
}

export default ButtonComponent;
