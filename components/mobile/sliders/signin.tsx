import { useKeenSlider } from "keen-slider/react";
import { useState, useRef, useEffect } from "react";
import { RefObject } from "react";
import Logo from "../../../assets/svg/logo-mobile.svg";
import Slide1 from "../../../assets/svg/coming_home.svg";
import Slide2 from "../../../assets/svg/web_shopping.svg";
import Slide3 from "../../../assets/svg/schedule.svg";
import Slide4 from "../../../assets/svg/education.svg";
import Slide5 from "../../../assets/svg/photo_session.svg";
import Slide6 from "../../../assets/svg/online_connection.svg";
import { useRouter } from "next/router";

interface Props {
  setMobileIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function SignInSlider({ setMobileIndex }: Props) {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef(null);

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  // useEffect(() => {
  //     if (currentSlide === 5) {
  //         router.push('/signin')
  //     }
  // }, [currentSlide])

  return (
    <>
      <div className="-top-24 flex flex-col mt-6 px-6 w-full">
        <div
          onClick={() => setMobileIndex(1)}
          className="text-right text-atoll"
        >
          SKIP
        </div>
        <div className="flex flex-col gap-y-2 my-6">
          <div>
            <Logo className="w-48" />
          </div>

          <div className="text-gray-500 text-sm">
            The marketplace for university students
          </div>
        </div>

        <div className="navigation-wrapper">
          <div
            ref={sliderRef as RefObject<HTMLDivElement>}
            className="keen-slider"
          >
            <div className="keen-slider__slide flex flex-col gap-y-6 mt-28 h-full">
              <div className="">
                <Slide1 />
              </div>

              <div className="mt-6 text-atoll-500 text-2xl">
                Find Accommodation
              </div>

              <div className="h-[5px] -mt-4 w-1/4 bg-atoll-500"></div>

              <div className="text-gray-400">
                Easily search for available hostels around your campus
              </div>
            </div>

            <div className="keen-slider__slide flex flex-col gap-y-6 mt-28 h-full">
              <div className="">
                <Slide2 />
              </div>

              <div className="mt-6 text-atoll-500 text-2xl">Buy {"&"} Sell</div>

              <div className="h-[3px] -mt-4 w-1/4 bg-atoll-500"></div>

              <div className="text-gray-400">
                Upload your products for students in your campus {"&"} buy from
                trusted vendors
              </div>
            </div>

            <div className="keen-slider__slide flex flex-col gap-y-6 mt-28 h-full">
              <div className="">
                <Slide3 />
              </div>

              <div className="mt-6 text-atoll-500 text-2xl">Attend Events</div>

              <div className="h-[3px] -mt-4 w-1/4 bg-atoll-500"></div>

              <div className="text-gray-400">
                Discover future events in and around your campus
              </div>
            </div>

            <div className="keen-slider__slide flex flex-col gap-y-6 mt-28 h-full">
              <div className="">
                <Slide4 />
              </div>

              <div className="mt-6 text-atoll-500 text-2xl">
                Scholarship opportunities
              </div>

              <div className="h-[3px] -mt-4 w-1/4 bg-atoll-500"></div>

              <div className="text-gray-400">
                Find available scholarship opportunities to help you fund your
                education
              </div>
            </div>

            <div className="keen-slider__slide flex flex-col gap-y-6 mt-28 h-full">
              <div className="">
                <Slide5 />
              </div>

              <div className="mt-6 text-atoll-500 text-2xl">Get Jobs</div>

              <div className="h-[3px] -mt-4 w-1/4 bg-atoll-500"></div>

              <div className="text-gray-400">
                Get part time jobs designed to fit into your study schedule
              </div>
            </div>

            <div className="keen-slider__slide flex flex-col gap-y-6 mt-28 h-full">
              <div className="">
                <Slide6 />
              </div>

              <div className="mt-6 text-atoll-500 text-2xl">Stay Connected</div>

              <div className="h-[3px] -mt-4 w-1/4 bg-atoll-500"></div>

              <div className="text-gray-400">
                Share pictures and videos of happenings in and around your
                campus {"&"} the country
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full h-20 bg-atoll">
        <div className="flex flex-row justify-between mx-auto my-6">
          <div className="ml-4">
            {slider && (
              <div className="dots">
                {[...Array(slider.details().size).keys()].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        slider.moveToSlideRelative(idx);
                      }}
                      className={
                        "dot" + (currentSlide === idx ? " active" : "")
                      }
                    />
                  );
                })}
              </div>
            )}
          </div>

          <div
            onClick={() => {
              if (currentSlide === 5) {
                setMobileIndex(1);
              } else {
                setCurrentSlide(currentSlide + 1);
                setPause(true);
                slider.next();
              }
            }}
            className="mr-8 my-auto text-white text-lg"
          >
            NEXT
          </div>
        </div>
      </div>
    </>
  );
}
