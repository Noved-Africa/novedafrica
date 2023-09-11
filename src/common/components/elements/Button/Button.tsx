// Button.tsx
import React from 'react';

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-[#4A43CB] lg:h-[2rem] hover:bg-blue-600 text-white md:font-normal lg:w-fit xs:w-11/12 xs:mb-4 xs:mt-4 xs:-ml-1 md:text-xs md:mt-1 lg:font-medium xs:text-[6.8px] lg:mt-9 py-2 px-3 lg:-ml-3 rounded-3xl ">
      {text}
    </button>
  );
};

export default Button;
