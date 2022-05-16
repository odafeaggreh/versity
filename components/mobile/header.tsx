/** @format */

import { useState } from "react";
import Logo from "../../assets/svg/logo-mobile.svg";
import Menu from "../../assets/svg/menu_1.svg";
import { MobileDrawer } from "./drawer";

interface Props {
	subcategory?: string;
}

export const Header = ({ subcategory }) => {
	const [open, setOpen] = useState(false);

	if (subcategory) {
		return (
			<>
				<header className='fixed z-50 top-0 w-full text-atoll bg-gray-200'>
					<div className='flex flex-row justify-between pb-4 pt-8 px-6 shadow-md'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M10 19l-7-7m0 0l7-7m-7 7h18'
								/>
							</svg>
						</div>

						<div className='text-black text-lg'>{subcategory}</div>

						<div>
							<Menu
								onClick={() => setOpen(!open)}
								className='w-6 text-atoll fill-current'
							/>
						</div>
					</div>
				</header>

				<MobileDrawer isOpen={open} setOpen={setOpen} />
			</>
		);
	} else {
		return (
			<>
				<header className='fixed z-50 top-0 w-full text-atoll bg-gray-200'>
					<div className='flex flex-row justify-between pb-4 pt-8 px-6 shadow-md'>
						<div>
							<Logo className='w-32' />
						</div>

						<div>
							<Menu
								onClick={() => setOpen(!open)}
								className='w-6 text-atoll fill-current'
							/>
						</div>
					</div>
				</header>

				<MobileDrawer isOpen={open} setOpen={setOpen} />
			</>
		);
	}
};
