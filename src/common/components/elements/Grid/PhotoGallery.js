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
import man from '../../../../../public/images/man.png'

const PhotoGallery = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-6">
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
        <div>
          <Image src={man} alt='' className="rounded-3xl"/>
          <p className="pl-5">The Undergraduate Student Summit ‘22</p>
          <span className="text-slate-400 pl-5">February, 2022</span>
        </div>
      </div>
    </>
  )
}

export default PhotoGallery