import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { NewsItems } from "../../utils/data";
import CardItem from "./CardItem";

export function LatestNewsMobile() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="lg:text-5xl text-4xl text-white pt-20 pb-10 font-space">
        Latest News
      </h2>
      <div className="flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {NewsItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      {/* <span className="text-4xl font-semibold text-white"> */}
                        <CardItem key={index} cardItem={item} className=" " />
                      {/* </span> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
