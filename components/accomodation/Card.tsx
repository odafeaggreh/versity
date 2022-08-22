import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

type Props = {
  images: string[];
  title: string;
  price: string;
  address: string;
  school: string;
  createdAt: string;
  paymentPeriod: string;
  id: string;
};

const Card = ({
  images,
  title,
  price,
  address,
  school,
  createdAt,
  paymentPeriod,
  id,
}: Props) => {
  const [liked, setLiked] = React.useState(false);
  //   Format date to check if it's today or yesterday
  const date = new Date(createdAt);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const dateString = date.toLocaleDateString();
  const todayString = today.toLocaleDateString();
  const yesterdayString = yesterday.toLocaleDateString();
  const dateFormatted =
    dateString === todayString
      ? "Today"
      : dateString === yesterdayString
      ? "Yesterday"
      : dateString;

  //   Get time from date with AM or PM
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  //   Format price to currency withouth decimals
  const priceFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(parseInt(price));

  return (
    <div className="mb-5 cursor-pointer">
      <div className="shadow-[#D2D2D2] flex rounded-md shadow-sm">
        {/* Image */}
        <div className="w-[120px] h-[120px] relative mr-2">
          <Image
            src={images[1]}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="rounded-bl-md rounded-tl-md"
          />
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="mt-1">
            <p className="text-[#121212] text-sm font-medium">{title}</p>
            <p className="text-[#908D8D] text-sm">{school}</p>
            <p className="text-[#908D8D] text-sm">
              {dateFormatted}, {time}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-[#096A6A] text-base font-medium">
              {priceFormatted}/{paymentPeriod}
            </p>

            {liked ? (
              <HeartIconFilled
                className="mr-2 w-5 h-5 text-red-500 cursor-pointer"
                onClick={() => setLiked(false)}
              />
            ) : (
              <HeartIcon
                className="mr-2 w-5 h-5 text-gray-500 cursor-pointer"
                onClick={() => setLiked(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
