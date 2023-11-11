"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Button from "@/components/shared/button";
import RippleAnim from "@/components/shared/anims/ripple";
import cls from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import appConfigsAtom from "@/context/atoms/app-configs";

const Slider = () => {
  const LOOP = true;
  const LENGTH = 5;

  const sliderRef = useRef<SwiperType>();
  const [sliderStatus, setSliderStatus] = useState({
    start: false,
    end: false,
  });
  const [appConfig] = useAtom(appConfigsAtom);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    if (!LOOP) {
      setSliderStatus({ end: false, start: true });
    }
  }, []);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slideNext();
    }
  };
  const prev = () => {
    if (sliderRef.current) {
      sliderRef.current.slidePrev();
    }
  };
  const goTo = (index: number) => {
    if (LOOP) sliderRef.current?.slideToLoop(index);
    else sliderRef.current?.slideTo(index);
  };
  const onSlideChange = () => {
    setActiveIndex(sliderRef.current?.realIndex ?? 0);
    if (!LOOP) {
      if (sliderRef.current?.isBeginning) {
        setSliderStatus({ start: true, end: false });
      } else if (sliderRef.current?.isEnd) {
        setSliderStatus({ start: false, end: true });
      } else {
        setSliderStatus({ start: false, end: false });
      }
    }
  };
  return (
    <>
      <div className="xl:w-full xl:min-w-full min-w-[400px] w-[400px] rounded-2xl overflow-hidden relative">
        <div className="absolute top-[23px] left-3 rtl:left-auto rtl:right-3 z-10 flex justify-start items-center">
          {Array.from({ length: LENGTH }).map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              className={cls(
                `w-1.5 h-1.5 bg-white rounded-full ms-1 transition-all cursor-pointer`,
                activeIndex == i ? "!opacity-100" : "opacity-50"
              )}
            ></div>
          ))}
        </div>
        <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 text-white z-10 flex justify-center items-center">
          <div
            onClick={prev}
            className={cls(
              `!bg-transparent opacity-50 hover:opacity-100
             transition-all duration-200 w-[30px] h-[30px] rounded-full flex justify-center items-center
              overflow-hidden relative rtl:-scale-100 cursor-pointer`,
              {
                "!opacity-10 cursor-not-allowed": sliderStatus.start,
              }
            )}
          >
            <RippleAnim />
            <div>
              <ArrowLeft2 size="16" />
            </div>
          </div>
          <div
            onClick={next}
            className={cls(
              `!bg-transparent opacity-50 hover:opacity-100
             transition-all duration-200 w-[30px] h-[30px] rounded-full flex justify-center items-center
              overflow-hidden relative rtl:-scale-100 cursor-pointer`,
              {
                "!opacity-10 cursor-not-allowed": sliderStatus.end,
              }
            )}
          >
            <RippleAnim />
            <div>
              <ArrowRight2 size="16" />
            </div>
          </div>
        </div>
        <Swiper
          onBeforeInit={(swiper) => {
            sliderRef.current = swiper;
          }}
          speed={1000}
          loop={LOOP}
          modules={[A11y]}
          // spaceBetween={5}
          slidesPerView={1}
          onSlideChange={onSlideChange}
          className="h-[312px]"
        >
          {Array.from({ length: LENGTH }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full relative">
                <Image
                  src={"/images/pic.jpg"}
                  alt="img"
                  width="400"
                  height="400"
                  className="w-full h-full object-cover"
                />
                <div
                  className={`w-full h-full absolute inset-0  p-6
                  text-white`}
                >
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex justify-end items-start flex-col h-full w-full"
                      >
                        <AnimatePresence>
                          {activeIndex === i && (
                            <motion.div
                              initial={{
                                translateX:
                                  appConfig.dir === "rtl" ? "-60px" : "60px",
                              }}
                              animate={{ translateX: "0" }}
                              transition={{ delay: 0.2, duration: 0.6 }}
                            >
                              <h3
                                className={cls(
                                  `whitespace-nowrap truncate text-sm font-bold`
                                )}
                              >
                                Lorem ipsum + ${i}
                              </h3>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <AnimatePresence>
                          {activeIndex === i && (
                            <motion.div
                              initial={{
                                translateX:
                                  appConfig.dir === "rtl" ? "-60px" : "60px",
                              }}
                              animate={{ translateX: "0" }}
                              transition={{ delay: 0.3, duration: 0.7 }}
                              className="w-full"
                            >
                              <p className="whitespace-nowrap truncate w-full text-xl font-semibold my-2">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <AnimatePresence>
                          {activeIndex === i && (
                            <motion.div
                              initial={{
                                translateX:
                                  appConfig.dir === "rtl" ? "-60px" : "60px",
                              }}
                              animate={{ translateX: "0" }}
                              transition={{ delay: 0.3, duration: 0.8 }}
                              className="w-full"
                            >
                              <p className="whitespace-nowrap truncate w-full text-[15px]">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default Slider;
