import React from 'react';

interface InputProps {
  value : string;
  onChange : (value: string) => void;
  x?: number;
  y?: number;
}

const InputComponent: React.FC<InputProps> = ({
  value,
  onChange,
  x = 0,
  y = 0,

}) => {
  const inputStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      style={inputStyle}
    />
  );
}

export default InputComponent;
