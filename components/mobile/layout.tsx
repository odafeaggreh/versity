/** @format */

import Head from "next/head";
import Link from "next/link";
import { Header } from "./header";
// import { Footer } from "./footer";
// import { Drawer } from "./drawer";
import { MobileSearch } from "./search/index";
import { useMediaQuery } from "react-responsive";

interface Props {
	children: JSX.Element[] | JSX.Element;
	home?: boolean;
	subcategory?: string;
	search?: boolean;
}

export default function MobileLayout({
	children,
	home,
	subcategory,
	search,
}: Props) {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const isTabletOrMobileDevice = useMediaQuery({
		query: "(max-device-width: 1224px)",
	});
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
	const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

	return (
		<>
			{isTabletOrMobile && (
				<div className='container'>
					<Head>
						<title>Varsity Hub</title>
						<link rel='icon' href='/varsity.ico' />
					</Head>

					<Header subcategory={subcategory} />

					{search && (
						<div className='mt-24 mx-auto pb-4 border-b'>
							<MobileSearch />
						</div>
					)}

					<main>
						<div className='container mb-6 mx-auto'>{children}</div>
					</main>

					{/* {!home && (
						<div className='text-black text-2xl'>
							<Link href='/'>
								<a>← Back to home</a>
							</Link>
						</div>
					)} */}

					{/* <Footer /> */}
				</div>
			)}
		</>
	);
}
