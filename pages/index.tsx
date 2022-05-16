/** @format */

import Layout from "../components/desktop/layout";
import GridList from "../components/desktop/categories/gridList";
import useSWR from "swr";
import { AdCard } from "../components/cards";
import { useMediaQuery } from "react-responsive";

import MobileGridList from "../components/mobile/gridList";
// import Camera from "/camera.svg";
import Image from "next/image";
import axios from "axios";
import { fetcher } from "../lib/fetcher";
import React from "react";
import getCategoryDetails from "../lib/getCategoryDetails";

import Camera from "../assets/svg/camera.svg";

//MOBILE VIEW SCREENS
import { Verify } from "../components/mobile/auth";
import MobileLayout from "../components/mobile/layout";
import { SignInSlider } from "../components/mobile/sliders";
import { useState } from "react";

interface Data {
    success: boolean;
    payload: [];
}

export async function getStaticProps() {
    const url = `${process.env.BASE_URL}/categories`;
    // // const url = "http://:3000/api/categories/1234";
    // // return { props: { url } };

    const res = await fetch(url);
    const data: Data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    let allCategories: object[] = data.payload;

    // allCategories[0]['index'] = 9;

    return { props: { allCategories } };

    // let test = await getCategoryDetails('6060dda7c9791620707908ca')
    // return { props: { test } };
}

export default function Home({ allCategories }) {
    // console.log(allCategories);
    const categories = [];
    // data.payload.map((data) => {
    // 	categories.push({ name: data.name, key: data._id });
    // });
    // console.log(categories);

    // console.log(data.payload);

    // if (error) return <h1>Something went wrong!</h1>
    // if (!categories) return <h1>Loading...</h1>

    // const { data, error } = useSWR(
    // 	`${process.env.BASE_URL}/categories`,
    // 	fetcher
    // );

    // THIS WORKS
    // const { data, error } = useSWR(
    // 	`/api/categories/1234`,
    // 	fetcher
    // );

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1224px)",
    });
    const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    const isTabletOrMobileDevice = useMediaQuery({
        query: "(max-device-width: 1224px)",
    });
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
    const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

    // console.log(test);

    const [mobileIndex, setMobileIndex] = useState(0);
    const mobilescreens = [
        <SignInSlider setMobileIndex={setMobileIndex} />,
        <Verify setMobileIndex={setMobileIndex} />,
        <Mobilehome />,
    ];

    return (
        <>
            {isDesktopOrLaptop && (
                <Layout home search>
                    <div>
                        <GridList categories={allCategories} />
                        {/* {!data ? "Loading" : { data }} */}

                        <div className="container mx-auto">
                            <div className="mb-4 pl-20">Recent Ads</div>

                            <div className="flex flex-wrap gap-4 justify-center mb-4">
                                {Array(9)
                                    .fill(0)
                                    .map((item) => (
                                        <AdCard ads={item} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </Layout>
            )}

            {isTabletOrMobileDevice && mobilescreens[mobileIndex]}
        </>
    );
}

function Mobilehome() {
    return (
        <MobileLayout home search>
            <MobileGridList />

            <button className="left-[50%] translate-x-[-50%] fixed bottom-6 flex flex-row gap-x-6 justify-center py-3 w-2/4 bg-white border-2 border-atoll rounded-lg outline-none shadow-md">
                <div className="">
                    <Camera
                        className="my-auto w-7 h-7 text-atoll fill-current"
                        stroke={"green"}
                    />
                </div>

                <div className="my-auto text-atoll text-sm">Post An Ad</div>
            </button>
        </MobileLayout>
    );
}
