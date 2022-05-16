/** @format */
import Image from "next/image";
import MenuSvg from '../../assets/svg/menu_1.svg';
import CategorySvg from '../../assets/svg/menu.svg';
import { CategoryDrawer, MenuDrawer } from "../drawers/menu";
import { useEffect, useState } from "react";

interface Props {
	closeDrawers?: boolean;
	setAreOpen: Function;
}
export const Drawer = ({ closeDrawers, setAreOpen }: Props) => {
	const [openMenu, setOpenMenu] = useState(false);
	const [openCategories, setOpenCategories] = useState(false);

	useEffect(() => {
		if (closeDrawers) {
			setOpenMenu(false)
			setAreOpen(false)
			setOpenCategories(false)
			return
		}

		if (openMenu || openCategories) {
			setAreOpen(true)
			return
		}

	}, [closeDrawers, openMenu, openCategories])

	return (
		<div
			className={openMenu || openCategories ? 'z-[50] top-4 mt-20 mb-0 w-full h-20 bg-black shadow-md bg-opacity-5' : 'fixed z-[50] top-4 mt-16 w-full h-20 bg-white shadow-md' } 
			// REMOVE HANDLER AFTER ADDING CLOSE WHERE IT SHOULD BE!
			// onClick={() => setOpenMenu(!openMenu)}
		>
			<div className='container mx-auto px-16'>
				<div className='flex flex-row justify-between'>
					<div className='my-4'>
						<div
							onClick={() => setOpenMenu(!openMenu)}
							className='flex flex-row px-4 py-2 text-center text-atoll hover:text-white hover:bg-atoll bg-white border border-atoll rounded-full shadow-md cursor-pointer uppercase'
						>
							<MenuSvg className="fill-current h-5 w-5" />
							<div className='ml-6 my-auto text-base'>Menu</div>
						</div>
					</div>

					<div className='my-4'>
						<div
							onClick={() => setOpenCategories(!openCategories)}
							className='flex flex-row px-4 py-2 text-center text-atoll hover:text-white hover:bg-atoll bg-white border border-atoll rounded-full shadow-md cursor-pointer uppercase'
						>
							<CategorySvg className="fill-current h-5 w-5" />
							<div className='ml-6 my-auto text-base'>
								Categories
							</div>
						</div>
					</div>
				</div>
			</div>
			<MenuDrawer isOpen={openMenu} />
			<CategoryDrawer isOpen={openCategories} />
		</div>
	);
};
