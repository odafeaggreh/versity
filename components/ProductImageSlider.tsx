import React, { useState } from "react";
import Image from "next/image";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type Props = {
  images: string[];
};

function ProductImageSlider({ images }: Props) {
  // Image slider
  const [activeStep, setActiveStep] = useState(0);
  const [liked, setLiked] = useState(false);
  const handleNext = () => {
    const isLastStep = activeStep === images.length - 1;
    const newIndex = isLastStep ? 0 : activeStep + 1;
    setActiveStep(newIndex);
  };

  const handleBack = () => {
    const isFirstStep = activeStep === 0;
    const newIndex = isFirstStep ? images.length - 1 : activeStep - 1;
    setActiveStep(newIndex);
  };

  return (
    <div>
      <div className="relative">
        <div className="w-[100%]">
          <Image
            src={images[activeStep]}
            alt="apartment images"
            width={350}
            height={300}
            objectFit="cover"
            layout="responsive"
          />
        </div>

        {/* Like */}
        <div className="absolute right-0 top-20 flex items-center justify-center mr-2 w-8 h-8 bg-black bg-opacity-50 rounded">
          {liked ? (
            <div
              onClick={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                setLiked(false);
              }}
            >
              <FavoriteIcon sx={{ color: "#fff" }} />
            </div>
          ) : (
            <div
              onClick={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                setLiked(true);
              }}
            >
              <FavoriteBorderIcon sx={{ color: "#fff" }} />
            </div>
          )}
        </div>

        {/* Image scroll */}
        <div className="absolute bottom-2 right-0 flex items-center justify-end mr-2 w-full">
          <div
            className="flex items-center justify-center mr-1 w-8 h-8 bg-black bg-opacity-50 rounded"
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              handleBack();
            }}
          >
            <KeyboardArrowLeftIcon sx={{ color: "#fff" }} />
          </div>
          <div
            className="flex items-center justify-center ml-1 w-8 h-8 bg-black bg-opacity-50 rounded"
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              handleNext();
            }}
          >
            <KeyboardArrowRightIcon sx={{ color: "#fff" }} />
          </div>
        </div>

        {/* Camera Icon */}

        <div
          className="w-fit absolute bottom-0 left-0 right-0 px-5 py-2"
          style={{ width: "fit-content" }}
        >
          <div className="bg-[#000] px-2 py-1 bg-opacity-50 rounded-md">
            <div className="flex items-center justify-between">
              <CameraAltIcon
                style={{
                  width: "24px",
                  height: "24px",
                  color: "#fff",
                  fontWeight: "bold",
                }}
                className="text-xl"
              />

              <p className="ml-2 text-white text-sm">
                {activeStep + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductImageSlider;
