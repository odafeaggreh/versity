import { PageSlug } from "../components/slug";
import Layout from "../components/desktop/layout";
import { CommunityCard } from "../components/cards";
import React, { useEffect } from "react";
import useSWR from "swr";

import { useMediaQuery } from "react-responsive";
import MobileLayout from "../components/mobile/layout";

// const url = `${process.env.BASE_URL}/api/posts`;
const url = "http://varsity-api.herokuapp.com/api/posts";

const fetcher = async () => {
    const res = await fetch(url); //.then((res) => res.json());
    let data = await res.json();
    data = data.payload;
    return data;
};

const View = () => {
    const { data, error } = useSWR(url, fetcher);
    console.log("data from community: ", data);

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1224px)",
    });
    const isTabletOrMobileDevice = useMediaQuery({
        query: "(max-device-width: 1224px)",
    });

    if (error) return error; // "An error has occurred"
    if (!data) return "Loading...";

    console.log(data);
    
    return (
        <>
            {isDesktopOrLaptop && (
                <Layout search>
                    <>
                        <PageSlug />

                        <div className="flex flex-wrap gap-6">
                            {data.map((community2) => (
                                <CommunityCard community={community2} />
                            ))}
                        </div>
                    </>
                </Layout>
            )}

            {isTabletOrMobileDevice && (
                <MobileLayout subcategory="Community" search>
                    <div className="flex flex-row justify-end mt-4 px-4 w-full">
                        <div className="flex flex-row gap-x-4 justify-center py-2 w-36 text-atoll text-lg border rounded-md shadow-md">
                            <div className="my-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </div>

                            <div className="my-auto">New Post</div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-6 px-4">
                        {data.map((community2) => (
                            <CommunityCard community={community2} />
                        ))}
                    </div>
                </MobileLayout>
            )}
        </>
    );
};

export default View;
