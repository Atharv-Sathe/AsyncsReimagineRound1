
import { ImagesSliderDemo } from "./imagesDisplaycomp";

export default function ContentAnimation() {
  return (
    <div className="h-full ">
    <div className="flex flex-col">
      <div className="sticky top-0">
        {/* <div className="w-full h-[8vh] bg-orange-500 flex items-center justify-center">
          <h1 className="text-white text-2xl">Sticky Heading</h1>
        </div> */}
        <div className="w-full h-[60vh] flex">
          {/* Video container (70%) */}
          <div className="w-7/10 overflow-hidden">
            <video controls className="w-full h-full object-cover">
              <source
                src="https://www.isro.gov.in/media_isro/video/chandrayaan3/LVM3_M4OnboardVideo.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Image container (30%) */}
          <div className="w-3/10">
            <ImagesSliderDemo />
          </div>
        </div>
      </div>
    </div>
  </div>
      );
};

