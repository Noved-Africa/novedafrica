'use client'

import testifier from "../../../../../public/images/testifier.jpeg";
import Image from 'next/image'

import { useState, useEffect } from 'react';

const TranslateTestimonies = () => {
  const [translation, setTranslation] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered) {
        setTranslation(translation + 2); // You can adjust the translation speed as needed
      }
    }, 50); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [translation, hovered]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <section>
      <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          transition: 'transform 0.5s',
          transform: `translateX(${translation}px)`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className="translate-container">
          <div className='lg:flex mb-20 w-full flex-col space-y-10 md:flex-row md:space-y-8 md:space-x-1'>
							<article className='md:w-[40rem] md:-ml-[2rem] rounded-2xl bg-gradient-to-r from-[#D4EDDA] to-[#93D3A2] p-8'>
								<div className=' mb-8 flex space-x-6'>
									<Image
										src={testifier}
										alt=''
										className=' h-[60px] w-[60px] rounded-full object-cover object-center '
									/>
									<div>
										<h1 className=' text-[20px] font-bold'>Evelyn Jones</h1>
										<p className=' text-[#828282]'>12.04.2022</p>
									</div>
								</div>
								<p>
									Lorem Ipsum amet minim mollit non deserunt ullamco est sit
									aliqua dolor do amet sint. Velit officia consequat duis enim
									velit mollit. Exercitation veniam consequat sunt nostrud amet.
									Lorem Ipsum amet minim mollit non. Lorem Ipsu amet minim
									mollit non minim mollit non.
								</p>
							</article>

							<article className='md:w-[40rem] md:-ml-[2rem] rounded-2xl bg-gradient-to-r from-[#D4EDDA] to-[#93D3A2] p-8'>
								<div className=' mb-8 flex space-x-6'>
									<Image
										src={testifier}
										alt=''
										className=' h-[60px] w-[60px] rounded-full object-cover object-center '
									/>
									<div>
										<h1 className=' text-[20px] font-bold'>Evelyn Jones</h1>
										<p className=' text-[#828282]'>12.04.2022</p>
									</div>
								</div>
								<p>
									Lorem Ipsum amet minim mollit non deserunt ullamco est sit
									aliqua dolor do amet sint. Velit officia consequat duis enim
									velit mollit. Exercitation veniam consequat sunt nostrud amet.
									Lorem Ipsum amet minim mollit non. Lorem Ipsu amet minim
									mollit non minim mollit non.
								</p>
							</article>

							<article className='md:w-[40rem] md:-ml-[2rem] rounded-2xl bg-gradient-to-r from-[#D4EDDA] to-[#93D3A2] p-8 '>
								<div className=' mb-8 flex space-x-6'>
									<Image
										src={testifier}
										alt=''
										className=' h-[60px] w-[60px] rounded-full object-cover object-center '
									/>
									<div>
										<h1 className=' text-[20px] font-bold'>Evelyn Jones</h1>
										<p className=' text-[#828282]'>12.04.2022</p>
									</div>
								</div>
								<p>
									Lorem Ipsum amet minim mollit non deserunt ullamco est sit
									aliqua dolor do amet sint. Velit officia consequat duis enim
									velit mollit. Exercitation veniam consequat sunt nostrud amet.
									Lorem Ipsum amet minim mollit non. Lorem Ipsu amet minim
									mollit non minim mollit non.
								</p>
							</article>
						</div>
      </div>
      <style jsx>{`
        .translate-container {
          display: flex;
          animation: translateAnimation 10s linear infinite;
          
        }

        .translate-box {
          width: 100px;
          height: 100px;
          background-color: lightblue;
          border: 1px solid gray;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: bold;
        }

        @keyframes translateAnimation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default TranslateTestimonies;
