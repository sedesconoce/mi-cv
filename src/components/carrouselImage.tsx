import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarrouselImage({ items }: { items: string[] }) {
  items = items.length < 6 ? items.concat(items) : items;
  return (
    <>
      <Carousel
        className="pt-5 pb-10"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <div className="hidden md:flex justify-end pb-4 gap-2">
          <CarouselPrevious className="-top-8 z-10 right-12 hover:bg-blue-200 hover:border-color2 hover:opacity-70 transition duration-200 ease-in-out rounded-full" />
          <CarouselNext className="-top-4 z-10 right-0 hover:bg-blue-200 hover:border-color2 hover:opacity-70 transition duration-200 ease-in-out rounded-full" />
        </div>
        <div className="flex w-full flex-col justify-between gap-12 xl:flex-row xl:gap-0">
          <div className="w-[1000px] 2xl:w-[1100px]">
            <CarouselContent className="-ml-8 w-[540px] sm:w-[1000px] 2xl:w-[1500px]">
              {items.map((e,idx) => (
                <CarouselItem key={idx} className="basis-3/4 pl-8 sm:basis-1/3 2xl:basis-1/5">
                  <img
                    src={e}
                    alt=""
                    width="300"
                    height="300"
                    className="rounded-lg shrink-0"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </>
  );
}
