// import React, { useRef } from 'react';
// import ContentAnimation from "./missionsContent";
// import Model_test from "./model_2";
// import "./horizontalScroll.css";
// import HorizontalSnappingSections from "./horizontalscroll_test";

// export default function MissionsSection() {
//   const missionsContainerRef = useRef<HTMLDivElement>(null); 

//   return (
//     <div className="missions-container" style={{ height: '100vh' }} ref={missionsContainerRef}>
//       <div className="flex missions-heading-container">
//         <div className="w-1/5 flex flex-col">
//           <h2 className="text-5xl text-white missions-heading font-space">Mission 1</h2>
//           <div className="w-full h-[80vh]">
//             <Model_test />
//           </div>
//         </div>
//         <div className="w-4/5 flex flex-col">
//           <div className="w-full flex items-center justify-center bg-blue-300">
//             <h1 className="text-2xl heading-2">Chandrayan-3</h1>
//           </div>
//           <div className="w-full flex-grow">
//             <ContentAnimation />
//           </div>
//         </div>
//       </div>
//       <HorizontalSnappingSections missionsContainerRef={missionsContainerRef} />
//     </div>
//   );
// }
