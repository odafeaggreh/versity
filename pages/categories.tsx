import { PageSlug } from "../components/slug";
import Layout from "../components/desktop/layout";
import { AdCard } from "../components/cards/";
import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";

import useSWR from "swr";
import Image from "next/image";
import Heart from "../assets/svg/heart.svg";

// import React from "react";

// const url = `${process.env.BASE_URL}/api/products`;
const url = "http://varsity-api.herokuapp.com/api/categories";

const fetcher = async () => {
    const res = await fetch(url); //.then((res) => res.json());
    let data = await res.json();
    data = data.payload;
    return data;
};

const View = () => {
    const { data, error } = useSWR(url, fetcher);
    console.log("data from categories: ", data);

    if (error) return error; // "An error has occurred"
    if (!data) return "Loading...";

    return (
        <Layout search>
            <>
                <PageSlug />

                <div className="flex flex-wrap gap-6">
                    {/* {Array(data.length)
                        .fill(0)
                        .map((index) => (
                            <AdCard data={data} key={index} />
                        ))} */}

                    {data.map((ads2) => (
                        <AdCard ads={ads2} />
                    ))}
                </div>
            </>
        </Layout>
    );
};

export default View;
