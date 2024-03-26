import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarrouselTestimonials({ items }: { items: any[] }) {
  items = items.length < 6 ? items.concat(items) : items;
  console.log(items);
  
  return (
    <>
      <Carousel
        className="pt-5 pb-10"
        opts={{
          loop: true,
          align: "start",
        }}
      >
         

        <div className="md:flex justify-end pb-4 gap-2">
          <CarouselPrevious className="-top-4 z-10 right-12 hover:bg-blue-200 hover:border-color2 hover:opacity-70 transition duration-200 ease-in-out rounded-full" />
          <CarouselNext className="top-0 z-10 right-0 hover:bg-blue-200 hover:border-color2 hover:opacity-70 transition duration-200 ease-in-out rounded-full" />
        </div>
        <div className="flex w-full flex-col justify-between gap-12 xl:flex-row xl:gap-0">
          <div className="">
            <CarouselContent className="">
              {items.map((e, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-[25rem] sm:basis-[27rem] md:basis-auto pl-8 xl:basis-1/5"
                >
                  <div className="flex flex-nowrap gap-12">
                    <div className="w-80 md:w-96 shrink-0">
                      <div className="text-color2 text-xl sm:text-2xl font-bold mb-5">
                        {e.description}
                      </div>
                      <div className="sm:flex gap-4">
                        <div className="flex-none"><img className="w-28 h-28 rounded-full" src={e.img} /></div>
                        <div className="grid content-center mt-4 sm:mt-0">
                          <h5 className="font-bold text-sm mb-1">{e.name}</h5>
                          <div className="text-xs uppercase tracking-wide text-green-700">
                            {e.grade}
                          </div>
                          <div className="text-xs uppercase tracking-wide">
                            {e.formal}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </>
  );
}
