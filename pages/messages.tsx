import Layout from "../components/desktop/layout";
import { useState } from "react";
import React from "react";
import { Sidebar, Chat, View } from "../components/messages";
import Link from "next/link";
import Empty from "../../assets/svg/empty.svg";
import { useMediaQuery } from "react-responsive";
import MobileLayout from "../components/mobile/layout";

export default function Profile() {
	const [selectedMenu, setSelectedMenu] = useState(0);

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-device-width: 1224px)",
	});
	const isTabletOrMobileDevice = useMediaQuery({
		query: "(max-device-width: 1224px)",
	});

	// ARRAY OF  ALL MENU VIEWS
	const menu = [];

	return (
		// MAYBE I'LL MAKE A BOOLEAN PROP TO SHOW SEARCH
		<>
			{isDesktopOrLaptop && (
				<Layout>
					<div className='mt-6 px-16'>
						<div className='text-gray-500 text-lg'>My Messages</div>
						<div className='flex flex-row gap-x-4 justify-between mt-6'>
							{/* SIDEBAR*/}
							<Sidebar
								selectedMenu={selectedMenu}
								setSelectedMenu={setSelectedMenu}
							/>
							{/* SIDEBAR END*/}

							{/* OPEN MENU */}
							<div className='w-3/4 overflow-hidden'>
								<Chat />
							</div>
						</div>
					</div>
				</Layout>
			)}

			{isTabletOrMobileDevice && (
				<MobileLayout subcategory='Messages'>
					<div className="mt-20">
                        <View />
                    </div>
				</MobileLayout>
			)}
		</>
	);
}
