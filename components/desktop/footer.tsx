/** @format */

export const Footer = () => {
	const date = new Date();
	const Year = date.getFullYear();

	return (
		<footer className='body-font text-white bg-atoll'>
			<div className='container flex flex-col flex-wrap mx-auto px-5 py-6 md:flex-row md:flex-nowrap md:items-center lg:items-start'>
				<div className='flex flex-grow flex-wrap -mb-10 mt-10 text-center md:mt-0 md:pl-20 md:text-left'>
					<div className='px-4 w-full md:w-1/2 lg:w-1/4'>
						<h2 className='title-font mb-3 text-white text-sm font-medium tracking-widest'>
							About Us
						</h2>
						<nav className='mb-10 list-none'>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									About varsityhub.ng
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									Jobs
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									Terms of Service
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									Privacy Policy
								</a>
							</li>
						</nav>
					</div>
					<div className='px-4 w-full md:w-1/2 lg:w-1/4'>
						<h2 className='title-font mb-3 text-white text-sm font-medium tracking-widest'>
							Support
						</h2>
						<nav className='mb-10 list-none'>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									support@varsityhub.ng
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									Contact Us
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									FAQs
								</a>
							</li>
						</nav>
					</div>
					<div className='px-4 w-full md:w-1/2 lg:w-1/4'>
						<h2 className='title-font mb-3 text-white text-sm font-medium tracking-widest'>
							Socials
						</h2>
						<nav className='mb-10 list-none'>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									Blog
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									Facebook
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									Instagram
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									Twitter
								</a>
							</li>
						</nav>
					</div>
					<div className='px-4 w-full md:w-1/2 lg:w-1/4'>
						<h2 className='title-font mb-3 text-white text-sm font-medium tracking-widest'>
							Our Schools
						</h2>
						<nav className='mb-10 list-none'>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									University
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									Polytechnic
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									College of Education
								</a>
							</li>
							<li className='my-4'>
								<a className='hover:text-gray-100 font-thin text-white'>
									View all
								</a>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div className='bg-gray-100'>
				<div className='container flex flex-col flex-wrap mx-auto px-16 py-4 sm:flex-row'>
					<p className='text-center text-gray-500 text-sm sm:text-left'>
						© {Year} Varsity Hub
					</p>
					<span className='inline-flex justify-center mt-2 sm:justify-start sm:ml-auto sm:mt-0'>
						<a className='text-gray-500'>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
							</svg>
						</a>
						<a className='ml-3 text-gray-500'>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
							</svg>
						</a>
						<a className='ml-3 text-gray-500'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
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
						<a className='ml-3 text-gray-500'>
							<svg
								fill='currentColor'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='0'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path
									stroke='none'
									d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
								></path>
								<circle
									cx='4'
									cy='4'
									r='2'
									stroke='none'
								></circle>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};
