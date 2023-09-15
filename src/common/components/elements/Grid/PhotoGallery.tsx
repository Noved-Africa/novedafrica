// "use client"

// import { useState } from "react";
// import VisibilitySensor from "react-visibility-sensor";
// import Image from 'next/image'

// export default function GridGallery({ images }) {
//   const [imagesShownArray, setImagesShownArray] = useState(
//     Array(images.length).fill(false)
//   );

//   const imageVisibleChange = (index, isVisible) => {
//     if (isVisible) {
//       setImagesShownArray((currentImagesShownArray) => {
//         currentImagesShownArray[index] = true;
//         return [...currentImagesShownArray];
//       });
//     }
//   };

//   return (
//     <div className="grid md:grid-cols-2 xs:mx-6 gap-3">
//       {images &&
//         images.map((imageUrl, index) => (
//           <VisibilitySensor
//             key={index}
//             partialVisibility={true}
//             offset={{ bottom: 80 }}
//             onChange={(isVisible) => imageVisibleChange(index, isVisible)}
//           >
//             <GridGalleryCard
//               imageUrl={imageUrl}
//               show={imagesShownArray[index]}
//             />
//           </VisibilitySensor>
//         ))}
//     </div>
//   );
// }

// function GridGalleryCard({ imageUrl, show }) {
//   return (
//     <>
//       <div
//       className={`relative transition ease-in duration-300 transform ${
//         show ? "" : "translate-y-16 opacity-0"
//       }`}
//     >
//       <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
//         <div className="absolute inset-0 bg-black opacity-70"></div>
//       </div>
//       <Image src={imageUrl} alt=""  width={430} height={300}/>
//     </div>
//     <p className="text-black pl-5 font-Albert_sans font-semibold">The Undergraduate Student Summit '22</p>
//     <p className="text-slate-400 pl-5 text-xs">February, 2022</p>
    
//     </>
    
//   );
// }

import React from "react";
import Image from 'next/image'
import photo1 from '../../../../../public/images/photo1.jpg'
import photo2 from '../../../../../public/images/photo2.jpg'
import photo3 from '../../../../../public/images/photo3.jpg'
import photo4 from '../../../../../public/images/photo4.jpg'
import photo5 from '../../../../../public/images/photo5.jpg'
import photo6 from '../../../../../public/images/photo6.jpg'
import photo7 from '../../../../../public/images/photo7.jpg'
import photo8 from '../../../../../public/images/photo8.jpg'
import photo9 from '../../../../../public/images/photo9.jpg'
import photo10 from '../../../../../public/images/photo10.jpg'
import photo11 from '../../../../../public/images/photo11.jpg'
import photo12 from '../../../../../public/images/photo12.jpg'

const PhotoGallery = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:mt-[8rem] mx-14 lg:relative lg:mt-[4rem] mb-10">
        <div>
          <Image src={photo1} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold mt-2">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5 ">February, 2022</span>
        </div>
        <div>
          <Image src={photo2} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={photo3} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={photo4} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={photo5} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={photo6} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={photo7} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={photo8} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={photo9} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={photo10} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={photo11} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={photo12} alt='' className="rounded-3xl"/>
          <p className="pl-5 text-black font-semibold">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
      </div>
    </>
  )
}

export default PhotoGallery