import { useKeenSlider } from "keen-slider/react"
import {useState} from 'react'
import {RefObject} from 'react';
interface Props {
    images: Array<string>
}

export default function AdSlider({images}: Props) {
    const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef as RefObject<HTMLDivElement>} className="keen-slider shadow-lg">
          <div className="keen-slider__slide w-96 h-[500px] rounded-lg number-slide1">1</div>
          <div className="keen-slider__slide w-96 h-[500px] rounded-lg number-slide2">2</div>
          <div className="keen-slider__slide w-96 h-[500px] rounded-lg number-slide3">3</div>
          <div className="keen-slider__slide w-96 h-[500px] rounded-lg number-slide4">4</div>
          <div className="keen-slider__slide w-96 h-[500px] rounded-lg number-slide5">5</div>
          <div className="keen-slider__slide w-96 h-[500px] rounded-lg number-slide6">6</div>
        </div>
        {slider && (
          <div className="float-right mr-10 mb-72">
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </div>
        )}
      </div>
    </>
  )
}

function ArrowLeft(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}