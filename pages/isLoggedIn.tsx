/** @format */

import React, { useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
	const { query } = context;
	const { token } = query;

	if (!token) {
		return {
			notFound: true,
		};
	}

	return { props: { token } };
}

export default function IsLoggedIn({ token }) {
	console.log(token);
    const router = useRouter();

	if (typeof window !== "undefined") {
		localStorage.setItem("token", token);
	}

	useEffect(() => {
        router.push("/");
    }, [])

	return <div>Loading....</div>;
}
