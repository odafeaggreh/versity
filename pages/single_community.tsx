import { PageSlug } from "../components/slug";
import Layout from "../components/desktop/layout";
import { SingleViewCard } from "../components/cards";
import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileLayout from "../components/mobile/layout";

export default function SingleView() {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-device-width: 1224px)",
	});
	const isTabletOrMobileDevice = useMediaQuery({
		query: "(max-device-width: 1224px)",
	});

	return (
		<>
			{isDesktopOrLaptop && (
				<Layout search>
					<>
						<PageSlug />

						<SingleViewCard />
					</>
				</Layout>
			)}

			{isTabletOrMobileDevice && (
				<MobileLayout subcategory='Community'>
					<div className='px-4 mt-24'>
						<SingleViewCard />
					</div>
				</MobileLayout>
			)}
		</>
	);
}
