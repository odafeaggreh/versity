/** @format */

import Image from "next/image";
import Heart from "../../../assets/svg/heart.svg";
import useSWR from "swr";
// import axios from "axios";

// const url = `${process.env.BASE_URL}/api/products`;
let url = "http://varsity-api.herokuapp.com/api/products";

/* 
const fetcher = async () => {
    const res = await fetch(url);
    let data = await res.json();
    data = data.payload;
    return data;
}; 
*/

const AdCard = ({ ads }) => {
    const { title, address, createdAt, price } = ads;
    // url = "http://varsity-api.herokuapp.com/api/products" + name;

    /* 

    const { data, error } = useSWR(url, fetcher);
    console.log("data from adCard: ", data);

    if (error) return <div>An error has occured: {error}</div>;
    if (!data) return <div>Loading...</div>; 
    
    */

    return (
        <>
            <div className="w-[450px] h-[150px] relative border border-gray-200 rounded-md shadow-md overflow-hidden">
                <div className="flex flex-row w-full h-full">
                    <Image
                        src={`/iphoneXr.jpg`}
                        alt={"IPhone XR"}
                        width={"200"}
                        height={"100"}
                        className="h-full object-cover"
                    />

                    <div className="ml-6">
                        <div className="flex flex-col justify-evenly py-2">
                            <div className="font-semibold">{title}</div>
                            <div className="text-gray-500">{address}</div>
                            <div className="text-gray-500">{createdAt}</div>
                            <div className="mt-4 text-atoll-500 font-semibold">
                                {price}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 mr-2 pb-2 cursor-pointer">
                    <Heart className="w-5 h-5 hover:text-atoll-400 fill-current" />
                </div>
            </div>
        </>
    );
};

export default AdCard;
