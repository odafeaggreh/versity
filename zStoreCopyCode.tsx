import Image from "next/image";

// {data.map((ad) => (
//     <div className="w-[450px] h-[150px] relative border border-gray-200 rounded-md shadow-md overflow-hidden">
//         <div className="flex flex-row w-full h-full">
//             <Image
//                 src={`/iphoneXr.jpg`}
//                 alt={"IPhone XR"}
//                 width={"200"}
//                 height={"100"}
//                 className="h-full object-cover"
//             />

//             <div className="ml-6">
//                 <div className="flex flex-col justify-evenly py-2">
//                     <div className="font-semibold">
//                         {ad.title}
//                     </div>
//                     <div className="text-gray-500">
//                         {ad.address}
//                     </div>
//                     <div className="text-gray-500">
//                         {ad.createdAt}
//                     </div>
//                     <div className="mt-4 text-atoll-500 font-semibold">
//                         {ad.price}
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className="absolute bottom-0 right-0 mr-2 pb-2 cursor-pointer">
//             {/* <Image src='/heart.svg' alt='like' width='20' height='20' /> */}
//             {/* <Heart className="w-5 h-5 hover:text-atoll-400 fill-current" /> */}
//         </div>
//     </div>
// ))}
//////////////////////////////////////////////////////////////////////////////////////////////

// from categories, getStaticProps that's working, bt wanna change to useSwr

/* export const getStaticProps = async () => {
    const endpoint = "http://varsity-api.herokuapp.com/api/products";

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = await axios.get(endpoint, config);
    console.log("res.data: ", res.data); // .payload

    const data = res.data.payload;

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data }, // data  //ads: res.data.payload
    };
}; */

//////////////////////////////////////////////////////////////////////////////////////////////
// also from categories page

// const { data, error } = useSWR("allAds", fetcher); // where allAds is just a unique key
// use this useSWR when fetcher has no spread operator, so allAds is not a url, just a unique key

/*
const fetcher = async () => {
    /* Using fetch  // working
    
    const res = await fetch("http://varsity-api.herokuapp.com/api/products"); //.then((res) => res.json());
    let data = await res.json();
    data = data.payload;
    return data; 
    
    */

// using axios  // also working

/* 
    
    const endpoint = "http://varsity-api.herokuapp.com/api/products";
    // const endpoint = `${process.env.BASE_URL}/api/products`;
    const config = {
        headers: {
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        },
    };

    const response = await axios.get(endpoint, config);
    const data = response.data.payload;
    return data; 
    
    
};

*/
