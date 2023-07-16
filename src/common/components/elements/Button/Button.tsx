// Button.tsx
import React from 'react';

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-[#4A43CB] hover:bg-blue-600 text-white font-medium mt-9 py-2 px-4 rounded-3xl">
      {text}
    </button>
  );
};

export default Button;
