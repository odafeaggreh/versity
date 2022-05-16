/** @format */
import Link from "next/link";
import Logo from "../../assets/svg/logo.svg";

// export const Header = () => {
// 	return (
// 		<header className='body-font fixed z-30 top-0 w-full text-white bg-atoll-500'>
// 			<div className='container mx-auto px-16'>
// 				<div className='flex flex-col flex-wrap items-center mx-auto py-5 md:flex-row'>
// 					<Link href='/'>
// 						<Logo className="h-32 -mt-10 cursor-pointer text-white fill-current" />
// 						{/* <a className='title-font flex items-center mb-4 text-white font-medium md:mb-0'>
// 							<svg
// 								xmlns='http://www.w3.org/2000/svg'
// 								fill='none'
// 								stroke='currentColor'
// 								strokeLinecap='round'
// 								strokeLinejoin='round'
// 								strokeWidth='2'
// 								className='p-2 w-10 h-10 text-white bg-indigo-500 rounded-full'
// 								viewBox='0 0 24 24'
// 							>
// 								<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
// 							</svg>
// 							<span className='ml-3 text-xl'>varsityhub.ng</span>
// 						</a> */}
// 					</Link>

// 					<nav className='flex flex-wrap items-center justify-center text-base md:ml-auto -mt-14'>
// 						<a className='p-2 text-white border rounded-full'>
// 							<svg
// 								fill='currentColor'
// 								strokeLinecap='round'
// 								strokeLinejoin='round'
// 								strokeWidth='2'
// 								className='w-4 h-4'
// 								viewBox='0 0 24 24'
// 							>
// 								<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
// 							</svg>
// 						</a>

// 						<a className='ml-3 p-2 text-white border rounded-full'>
// 							<svg
// 								fill='currentColor'
// 								strokeLinecap='round'
// 								strokeLinejoin='round'
// 								strokeWidth='2'
// 								className='w-4 h-4'
// 								viewBox='0 0 24 24'
// 							>
// 								<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
// 							</svg>
// 						</a>

// 						<a className='ml-3 p-2 text-white border rounded-full'>
// 							<svg
// 								fill='none'
// 								stroke='currentColor'
// 								strokeLinecap='round'
// 								strokeLinejoin='round'
// 								strokeWidth='2'
// 								className='w-4 h-4'
// 								viewBox='0 0 24 24'
// 							>
// 								<rect
// 									width='20'
// 									height='20'
// 									x='2'
// 									y='2'
// 									rx='5'
// 									ry='5'
// 								></rect>
// 								<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
// 							</svg>
// 						</a>

// 						<div className='mx-6 text-2xl'>|</div>

// 						<Link href='/signin'>
// 							<a className='hover:text-gray-100'>Sign In</a>
// 						</Link>

// 						<div className='mx-6 text-2xl'>|</div>

// 						<a className='hover:text-gray-100'>Register</a>

// 						<div className='mx-6 text-2xl'>|</div>
// 					</nav>

// 					<div className='px-14 py-1 border rounded-2xl -mt-14'>Sell</div>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };

export const Header = () => {
	return (
		<header className='body-font min-h-28 fixed z-30 top-0 py-6 w-full max-h-28 text-white bg-atoll-500'>
			<div className='container -mt-2 m-auto px-16'>
				<div className='flex flex-col flex-wrap items-center justify-between mx-auto md:flex-row'>
					<Link href='/'>
						{/* ================================= */}
						{/* THIS SVG NO COOPERATE LIKE THE MOBILE ONE WHEN HOVERED CHECK IT AGAIN  */}
						{/* I AM HERE AGAIN O! THIS ONE'S STROKE WORKS ON HOVER BUT NOT THE TEXT! SIGH! 😮‍💨 */}
						{/* ================================= */}
						<Logo className='w-36 h-10 hover:text-atoll-600 text-white stroke-current stroke-1 fill-current cursor-pointer' />
						{/* <a className='title-font flex items-center mb-4 text-white font-medium md:mb-0'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='p-2 w-10 h-10 text-white bg-indigo-500 rounded-full'
								viewBox='0 0 24 24'
							>
								<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
							</svg>
							<span className='ml-3 text-xl'>varsityhub.ng</span>
						</a> */}
					</Link>

					<nav className='flex flex-wrap items-center justify-center text-base md:ml-auto'>
						<a className='p-2 hover:text-atoll-500 text-white hover:bg-white border rounded-full'>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4'
								viewBox='0 0 24 24'
							>
								<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
							</svg>
						</a>

						<a className='ml-3 p-2 hover:text-atoll-500 text-white hover:bg-white border rounded-full'>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4'
								viewBox='0 0 24 24'
							>
								<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
							</svg>
						</a>

						<a className='ml-3 p-2 hover:text-atoll-500 text-white hover:bg-white border rounded-full'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4'
								viewBox='0 0 24 24'
							>
								<rect
									width='20'
									height='20'
									x='2'
									y='2'
									rx='5'
									ry='5'
								></rect>
								<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
							</svg>
						</a>

						<div className='mx-6 text-2xl'>|</div>

						<Link href='/signin'>
							<a className='hover:text-atoll-300 font-light'>
								Sign In
							</a>
						</Link>

						<div className='mx-6 text-2xl'>|</div>

						<a className='hover:text-atoll-300 font-light cursor-pointer'>
							Register
						</a>

						<div className='mx-6 text-2xl'>|</div>
					</nav>

					<div className='px-12 py-3 hover:text-atoll-500 font-light hover:bg-white border rounded-full cursor-pointer'>
						SELL
					</div>
				</div>
			</div>
		</header>
	);
};
