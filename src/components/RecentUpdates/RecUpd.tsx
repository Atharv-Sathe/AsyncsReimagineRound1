import { ImagesSlider } from "./ImagesSlider";

import img1 from "../../assets/recentupd/recupd1.jpg";
import img2 from "../../assets/recentupd/recupd2.webp";
import img3 from "../../assets/recentupd/recupd3.webp";
import img4 from "../../assets/recentupd/recupd4.webp";
const imgsData = [
    { src: img1, title: "GSLV-F14/INSAT-3DS Mission", description: "Launched on: February 17, 2024", link: "https://www.isro.gov.in/GSLV-F14_INSAT-3DS_mission.html"},
    { src: img2, title: "PSLV-C58/XPoSat Mission", description: "Launched on: January 01, 2024", link: "https://www.isro.gov.in/PSLV_C58_XPoSat_Mission.html" },
    { src: img3, title: "Gaganyaan TV-D1 Mission", description: "Launched on: October 21, 2023", link: "https://www.isro.gov.in/Gaganyaan_TV-D1_Mission.html" },
    { src: img4, title: "PSLV-C57/Aditya-L1 Mission", description: "Launched on: September 02, 2023", link: "https://www.isro.gov.in/Aditya_L1.html" },
];

function RecUpd({isSmall} : {isSmall: boolean}) {
    
    return (
        <section className={`${isSmall  ? "w-full flex flex-col items-center h-fit"  : "recent-updates w-[40%] h-[50vh] flex flex-col pt-12  items-center"}`}>
            <h1 className={`${isSmall  ? "mt-10"  : "w-fit"} text-white text-5xl font-space`}>Recent Updates</h1>
            <div className={` ${isSmall  ? "h-[50vh] w-[70vw] mt-10"  : "w-[70%] h-[35vh] mt-12 relative"}  images-slider-wrapper rounded-lg hover:shadow-[0_0_8px_5px] hover:shadow-white hover:border-2`}>
                <ImagesSlider images={imgsData} children={null} overlay={null} autoplay={true} direction="up" isSmall={isSmall}/>
            </div>
        </section>
    );
}

export default RecUpd;