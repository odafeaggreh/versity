/** @format */
import Image from "next/image";
import Menu from "../../../assets/svg/menu.svg";
import Edit from "../../../assets/svg/edit.svg";
import Location from "../../../assets/svg/location.svg";
import { SelectorIcon } from "@heroicons/react/solid";

interface Props {
	show?: boolean;
}

export const Search = ({ show = false }: Props) => {
	if (show) {
		return (
			<div className='container mx-auto px-16'>
				<div className='flex flex-wrap justify-between mt-4 mx-auto'>
					<div className='w-1/4'>
						<div className='dropdown-container relative mt-1 rounded-md shadow-sm'>
							<div className='absolute inset-y-0 left-0 flex items-center mt-1 my-auto pl-3 pointer-events-none'>
								<span className='text-gray-500 sm:text-sm'>
									<Menu className='-mt-1 w-5 h-5 text-gray-500 fill-current' />
								</span>
							</div>
							{/* CONSIDER FETCHING CATEGORIES FROM BACKEND EVENTUARRY */}
							<select className='block pl-12 pr-12 py-3 w-80 text-gray-500 focus:border-atoll-500 border-gray-300 rounded-md appearance-none focus:ring-atoll-500 sm:text-sm'>
								<option>All Categories</option>
								<option>Community</option>
								<option>Accommodation</option>
								<option>
									Phone, Tablets {"&"} Accessories
								</option>
								<option>Books</option>
								<option>Fashion</option>
								<option>Electronics</option>
								<option>Health {"&"} Beauty</option>
								<option>Events {"&"} Parties</option>
								<option>Scholarships</option>
								<option>Tutorials {"&"} Training</option>
								<option>Food {"&"} Drinks</option>
								<option>Services</option>
								<option>Part Time Jobs</option>
								<option>Artwork {"&"} Board Games</option>
								<option>Sporting Equipments</option>
							</select>

							<span className='absolute inset-y-0 right-0 flex items-center mr-8 pr-2 pointer-events-none'>
								<SelectorIcon
									className='w-5 h-5 text-gray-400'
									aria-hidden='true'
								/>
							</span>
						</div>
						{/* <div className='relative mt-1 rounded-md shadow-sm'>
							<div className='absolute inset-y-0 left-0 flex items-center mt-1 my-auto pl-3 pointer-events-none'>
								<span className='text-gray-500 sm:text-sm'>
									<Menu className='w-5 h-5 -mt-1 text-gray-500 fill-current' />
								</span>
							</div>
							<input
								type='text'
								name='price'
								id='price'
								className='block pl-12 pr-12 py-3 w-80 border-gray-300 focus:border-atoll-500 rounded-md focus:ring-atoll-500 sm:text-sm placeholder-gray-400 text-2xl'
								placeholder='All Categories'
							/>
	
							<div className='absolute inset-y-0 right-0 flex items-center'>
								<label htmlFor='currency' className='sr-only'>
									Currency
								</label>
								<select
									id='currency'
									name='currency'
									className='pl-2 pr-7 py-0 h-full text-gray-500 bg-transparent focus:border-atoll-500 border-transparent rounded-md focus:ring-atoll-500 sm:text-sm'
								>
									<option>USD</option>
									<option>CAD</option>
									<option>EUR</option>
								</select>
							</div>
						</div> */}
					</div>

					<div className='w-1/4'>
						<div className='relative mt-1 rounded-md shadow-sm'>
							<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
								<span className='text-gray-500 sm:text-sm'>
									{/* <Image
										src={"/edit.svg"}
										alt={"KeywordSearch"}
										width={15}
										height={15}
										className='text-gray-500'
									/> */}
									<Edit className='-mt-1 w-5 h-5 text-gray-500 fill-current' />
								</span>
							</div>
							<input
								type='text'
								name='keyword'
								id='price'
								className='block pl-12 pr-12 py-3 w-80 focus:border-atoll-500 border-gray-300 rounded-md focus:ring-atoll-500 sm:text-sm'
								placeholder='Enter Keyword'
							/>
						</div>
					</div>

					<div className='w-1/4'>
						<div className='relative mt-1 rounded-md shadow-sm'>
							<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
								<span className='text-gray-500 sm:text-sm'>
									{/* <Image
										src={"/location.svg"}
										alt={"LocationSearch"}
										width={15}
										height={15}
										className='text-gray-500'
									/> */}

									<Location className='-mt-1 w-5 h-5 text-gray-500 fill-current' />
								</span>
							</div>
							<input
								type='text'
								name='keyword'
								id='price'
								className='block pl-12 pr-12 py-3 w-80 focus:border-atoll-500 border-gray-300 rounded-md focus:ring-atoll-500 sm:text-sm'
								placeholder='School'
							/>
						</div>
					</div>

					<div className='w-auto'>
						<button className='mt-1 px-16 py-3 text-white bg-atoll rounded-md'>
							SEARCH
						</button>
					</div>
				</div>
			</div>
		);
	} else {
		return <div></div>
	}
};
