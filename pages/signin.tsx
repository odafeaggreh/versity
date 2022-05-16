import { SignInSlider } from "../components/sliders";
import Image from "next/image";
import { GoogleButton, FaceBookButton } from "../components/buttons";
import Illustration from "../assets/svg/access_account.svg";
import Logo from "../assets/svg/logo-mobile.svg";

import { useMediaQuery } from "react-responsive";

import React from "react";
import Link from "next/link";

import axios from "axios";

// GET API URL
export async function getStaticProps() {
    // let api = process.env.BASE_URL;
    let api = "http://varsity-api.herokuapp.com";

    return { props: { api } };
}

export default function SignIn({ api }) {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1224px)",
    });
    const isTabletOrMobileDevice = useMediaQuery({
        query: "(max-device-width: 1224px)",
    });

    function Auth() {
        axios({
            url: `${api}/auth/google`,
            headers: { "Access-Control-Allow-Origin": "*" },
            method: "get",
        })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    }

    return (
        <>
            {isDesktopOrLaptop && (
                <div className="container mx-auto">
                    <div className="flex flex-row justify-around w-full h-screen">
                        {/* <div className="m-auto h-96 bg-atoll-50">Animation</div> */}
                        <div className="m-auto pt-20 w-82">
                            <SignInSlider />
                        </div>

                        <div className="my-auto w-px h-3/4 bg-gray-400"></div>

                        <div className="flex flex-col justify-center mx-auto pt-20">
                            <div>
                                <Illustration />
                            </div>
                            {/* <div className="h-96 bg-gradient-to-br from-atoll-100 via-atoll-200 to-atoll-300">SVG</div> */}

                            <Link href={`${api}/auth/facebook`}>
                                <div className="my-6">
                                    <FaceBookButton />
                                </div>
                            </Link>

                            {/* <Link href={`${api}/auth/google`}> */}
                            <div onClick={Auth} className="">
                                <GoogleButton />
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            )}

            {isTabletOrMobileDevice && (
                <div className="flex flex-col justify-center mt-20 mx-auto px-10">
                    <div>
                        <Logo className="w-40" />
                    </div>

                    <div className="mt-2 text-gray-700 font-light">
                        The marketplace for university students
                    </div>

                    <div>
                        <Illustration className="w-11/12" />
                    </div>
                    {/* <div className="h-96 bg-gradient-to-br from-atoll-100 via-atoll-200 to-atoll-300">SVG</div> */}

                    <div className="my-6">
                        <Link href={`${api}/auth/facebook`}>
                            <FaceBookButton />
                        </Link>
                    </div>

                    <Link href={`${api}/auth/google`}>
                        <div className="">
                            <GoogleButton />
                        </div>
                    </Link>

                    <div className="mt-14">
                        By signing in, you agree to our{" "}
                        <span className="text-atoll underline">
                            Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-atoll underline">
                            Privacy Policy
                        </span>
                    </div>
                </div>
            )}
        </>
    );
}
