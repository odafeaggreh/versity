import Link from "next/link";
import React from "react";
import Card from "../../../components/accomodation/Card";
import MobileLayout from "../../../components/mobile/layout";
import { apartments } from "../../../constants/apartments";

function accommodation() {
  return (
    <MobileLayout home search subcategory="Accommodations">
      <div className="mt-5 mx-3">
        {apartments.map((apartment) => {
          const {
            images,
            title,
            price,
            address,
            school,
            createdAt,
            paymentPeriod,
            _id,
          } = apartment;

          console.log(apartment);

          return (
            <Link href="/categories/accommodation/apartmentDetails" key={_id}>
              <a>
                <Card
                  id={_id}
                  images={images}
                  title={title}
                  price={price}
                  address={address}
                  school={school}
                  createdAt={createdAt}
                  paymentPeriod={paymentPeriod}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </MobileLayout>
  );
}

export default accommodation;
