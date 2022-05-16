import { useKeenSlider } from "keen-slider/react";
import { useState, useRef, useEffect } from "react";
import { RefObject } from "react";
import Slide1 from "../../assets/svg/coming_home.svg";
import Slide2 from "../../assets/svg/web_shopping.svg";
import Slide3 from "../../assets/svg/schedule.svg";
import Slide4 from "../../assets/svg/education.svg";
import Slide5 from "../../assets/svg/photo_session.svg";
import Slide6 from "../../assets/svg/online_connection.svg";

export default function SignInSlider(props) {
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

	return (
		<>
			<div className='navigation-wrapper'>
				<div
					ref={sliderRef as RefObject<HTMLDivElement>}
					className='keen-slider'
				>
					<div className='keen-slider__slide w-82 h-96'>
						<div className='flex flex-col gap-y-6 h-full text-center'>
							<div className=''>
								<Slide1 />
							</div>

							<div className='text-atoll-500 text-xl'>
								Find Accommodation
							</div>

							<div className='-mt-2 mx-auto w-1/4 h-0.5 bg-atoll-500'></div>

							<div className='text-gray-400'>
								Easily search for available hostels around your
								campus
							</div>
						</div>
					</div>

					<div className='keen-slider__slide w-82 h-96'>
						<div className='flex flex-col gap-y-6 h-full text-center'>
							<div className=''>
								<Slide2 />
							</div>

							<div className='text-atoll-500 text-xl'>
								Buy {"&"} Sell
							</div>

							<div className='-mt-2 mx-auto w-1/4 h-0.5 bg-atoll-500'></div>

							<div className='text-gray-400'>
								Upload your products for students in your campus{" "}
								{"&"} buy from trusted vendors
							</div>
						</div>
					</div>

					<div className='keen-slider__slide w-82 h-96'>
						<div className='flex flex-col gap-y-6 h-full text-center'>
							<div className=''>
								<Slide3 />
							</div>

							<div className='text-atoll-500 text-xl'>
								Attend Events
							</div>

							<div className='-mt-2 mx-auto w-1/4 h-0.5 bg-atoll-500'></div>

							<div className='text-gray-400'>
								Discover future events in and around your campus
							</div>
						</div>
					</div>

					<div className='keen-slider__slide w-82 h-96'>
						<div className='flex flex-col gap-y-6 h-full text-center'>
							<div className=''>
								<Slide4 />
							</div>

							<div className='text-atoll-500 text-xl'>
								Scholarship opportunities
							</div>

							<div className='-mt-2 mx-auto w-1/4 h-0.5 bg-atoll-500'></div>

							<div className='text-gray-400'>
								Find available scholarship opportunities to help
								you fund your education
							</div>
						</div>
					</div>

					<div className='keen-slider__slide w-82 h-96'>
						<div className='flex flex-col gap-y-6 h-full text-center'>
							<div className=''>
								<Slide5 />
							</div>

							<div className='text-atoll-500 text-xl'>
								Get Jobs
							</div>

							<div className='-mt-2 mx-auto w-1/4 h-0.5 bg-atoll-500'></div>

							<div className='text-gray-400'>
								Get part time jobs designed to fit into your
								study schedule
							</div>
						</div>
					</div>

					<div className='keen-slider__slide w-82 h-96'>
						<div className='flex flex-col gap-y-6 h-full text-center'>
							<div className=''>
								<Slide6 />
							</div>

							<div className='text-atoll-500 text-xl'>
								Stay Connected
							</div>

							<div className='-mt-2 mx-auto w-1/4 h-0.5 bg-atoll-500'></div>

							<div className='text-gray-400'>
								Share pictures and videos of happenings in and
								around your campus {"&"} the country
							</div>
						</div>
					</div>
				</div>
			</div>
			{slider && (
				<div className='dots'>
					{[...Array(slider.details().size).keys()].map((idx) => {
						return (
							<button
								key={idx}
								onClick={() => {
									slider.moveToSlideRelative(idx);
								}}
								className={
									"dot" +
									(currentSlide === idx ? " active" : "")
								}
							/>
						);
					})}
				</div>
			)}
		</>
	);
}
