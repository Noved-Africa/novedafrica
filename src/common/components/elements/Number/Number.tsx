import React from 'react'

type NumberProps ={
  text:string;
};

const Number: React.FC<NumberProps> = ({ text }) => {
  return (
    <>
      <p className='p-3 rounded-full bg-white w-fit'>{text}</p>
    </>
  )
}

export default Number;