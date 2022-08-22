import React from "react";
import MobileLayout from "../../../components/mobile/layout";
import ProductDetails from "../../../components/ProductDetails";

// apartment dummy data
const apartments = {
  feedbacks: [],
  images: [
    "/apartment/jarek-ceborski-jn7uVeCdf6U-unsplash.jpeg",
    "/apartment/a2.jpeg",
    "/apartment/a3.jpeg",
  ],
  adStatus: "Active",
  _id: "6060e5579a32442064ff5844",
  title: "Diamond Hostel",
  school: "UNILAG",
  price: "350000",
  delivery: true,
  author: {
    _id: "6060dd5dc9791620707908c7",
    email: "the.real.el.honrado@gmail.com",
    userName: "El_Honrado",
  },
  category: {
    _id: "6060dda7c9791620707908c8",
    name: "Accommodation",
  },
  createdAt: "2022-08-05T20:21:43.977Z",
  updatedAt: "2021-03-28T20:21:43.977Z",
  __v: 0,
  categoryName: "Accommodation",
  paymentPeriod: "Year",
  adDetails: [
    {
      name: "Type",
      value: "one man room",
    },
    {
      name: "Bedrooms",
      value: "1",
    },
    {
      name: "Bathrooms",
      value: "1",
    },
    {
      name: "Toilets",
      value: "1",
    },
    {
      name: "Generator",
      value: "Yes",
    },
    {
      name: "Air Conditioner",
      value: "Yes",
    },
    {
      name: "Study Room",
      value: "Yes",
    },
    {
      name: "Tv Room",
      value: "Yes",
    },
    {
      name: "Wi-fi",
      value: "Yes",
    },
    {
      name: "Furnished",
      value: "Yes",
    },
  ],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis dolores, explicabo minima nemo asperiores, amet aut commodi ipsa sapiente, mollitia officia molestiae tempora ipsam illum ea doloremque earum obcaecati.",
  address: "25, Unilag Road, Abule-Oja Bus-Stop, Yaba, Lagos",
  seller: {
    name: "Monica Lewinsky",
    registered: "15 Jan 2020",
    lastSeen: "4 hours ago",
    profileImage: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  feedback: [
    {
      name: "Chris Anyanwu",
      impression: "happy",
      profileImage: "https://xsgames.co/randomusers/avatar.php?g=male",
      message:
        "Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      createdAt: "2022-08-05T20:21:43.977Z",
    },
  ],
  shareLinks: {
    facebook: "https://facebook.com/versity/apartmentDetails",
    twitter: "https://twitter.com/versity/apartmentDetails",
    linkedin: "https://linkedin.com/versity/apartmentDetails",
    whatsapp: "whatsapp://versity/apartmentDetails",
  },
};

function apartmentDetails() {
  return (
    <MobileLayout home subcategory="Accommodation Ad">
      <div>
        <ProductDetails data={apartments} />
      </div>
    </MobileLayout>
  );
}

export default apartmentDetails;
