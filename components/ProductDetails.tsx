import React from "react";
import ProductImageSlider from "./ProductImageSlider";

type Props = {
  data: {
    feedbacks: any[];
    images: string[];
    adStatus: string;
    _id: string;
    title: string;
    price: string;
    address: string;
    school: string;
    delivery: boolean;
    author: {
      _id: string;
      email: string;
      userName: string;
    };
    category: {
      _id: string;
      name: string;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
    categoryName: string;
    paymentPeriod: string;
    adDetails: {
      name: string;
      value: string;
    }[];
    description: string;
    seller: {
      name: string;
      registered: string;
      lastSeen: string;
      profileImage: string;
    };
    feedback: {
      name: string;
      impression: string;
      profileImage: string;
      message: string;
      createdAt: string;
    }[];
    shareLinks: {
      facebook: string;
      twitter: string;
      whatsapp: string;
      linkedin: string;
    };
  };
};

function ProductDetails({ data }: Props) {
  return (
    <div className="mx-1">
      <div className="container mx-auto">
        <ProductImageSlider images={data.images} />
      </div>
    </div>
  );
}

export default ProductDetails;
