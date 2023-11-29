import React from 'react';

interface LabelProps {
  text: string;
  x?: number;
  y?: number;
  fontSize?: string;
  fontWeight?: string;
}

const LabelComponent: React.FC<LabelProps> = ({
  text,
  x = 0, 
  y = 0, 
  fontSize = 'inherit', 
  fontWeight = 'normal' 
}) => {
 
  const labelStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };

  return <div style={labelStyle}>{text}</div>;
}

export default LabelComponent;
