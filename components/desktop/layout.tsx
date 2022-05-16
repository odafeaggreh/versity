/** @format */

import Head from "next/head";
import Link from "next/link";
import { Header } from "./header";
import { Footer } from "./footer";
import { Drawer } from "./drawer";
import { Search } from "./search/search";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

interface Props {
	children: JSX.Element;
	home?: boolean;
	search?: boolean;
}

export default function Layout({ children, home = false, search }: Props) {
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

	const [closeDrawers, setCloseDrawers] = useState(false)
	const [areOpen, setAreOpen] = useState(false)

	function setAreOpenFunction(param:boolean) {
		setAreOpen(param)
	}

	console.log(areOpen);
	

	return (
		<>
			{isDesktopOrLaptop && (
				<>
					{areOpen && <div className="bg-black bg-opacity-50 h-[100vh] w-screen fixed z-[50] top-0"></div>}

				<div onClick={() => setCloseDrawers(!closeDrawers)}>
				{/* <div onClick={() => setCloseDrawers(!closeDrawers)} className={`${areOpen && 'filter blur-sm'}`}> */}
					<Head>
						<title>Varsity Hub</title>
						<link rel='icon' href='/varsity.ico' />
					</Head>

					<Header />

					<Drawer closeDrawers={closeDrawers} setAreOpen={setAreOpenFunction} />
					

					<div className={areOpen ? '': 'mt-44'} >
						<Search show={search} />
					</div>

					<main>
						<div className='container mx-auto mb-10'>{children}</div>
					</main>

					{/* {!home && (
						<div className='text-black text-2xl'>
							<Link href='/'>
								<a>← Back to home</a>
							</Link>
						</div>
					)} */}

					<Footer />
				</div>

				</>
			)}
		</>
	);
}
