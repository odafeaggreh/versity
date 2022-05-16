import Sms from "../../../assets/svg/verify-sms.svg";
import Check from "../../../assets/svg/check.svg";
import Left from "../../../assets/svg/left.svg";
import { useState } from "react";
import { useRouter } from "next/router";

interface Props {
	setMobileIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function Verify({setMobileIndex}:Props) {
	const [index, setIndex] = useState(0);
	const router = useRouter();

	function Phone() {
		return (
			<>
				<div className='text-xl'>Enter your phone number</div>

				<div className='relative m-auto mb-4 p-16 w-64 h-64 border border-atoll rounded-full'>
					<Sms className='absolute -mt-4 m-auto w-40 h-40 text-atoll fill-current' />
				</div>

				<div className='flex flex-row gap-x-4 w-full'>
					<div className='w-1/4'>
						<select
							name=''
							id=''
							className='text-md w-full h-12 text-center font-extralight border-2 focus:border-atoll border-gray-300 rounded-md focus:ring-atoll'
						>
							<option className='font-extralight' value='+234'>
								+234
							</option>
						</select>
					</div>

					<div className='relative w-3/4 flex flex-row'>
						<input
							type='text'
							pattern='\d*'
							maxLength={14}
							name=''
							id=''
                            placeholder="Phone number"
							className='text-md w-full h-12 text-left border-2 border-gray-300 rounded-md focus:border-atoll focus:ring-atoll placeholder-gray-400'
						/>

						<div className='absolute right-0 my-3 mr-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-5 h-5 text-gray-400 fill-current'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
							</svg>
						</div>
					</div>
				</div>

				<div className='mt-6'>
					<button
						onClick={() => setIndex(index + 1)}
						className='py-4 w-full text-white text-lg bg-atoll rounded-md'
					>
						Next
					</button>
				</div>
			</>
		);
	}

	function OTP() {
		return (
			<>
				<div className='text-xl'>
					Enter the verification code sent to your phone number
				</div>

				<div className='relative m-auto mb-4 p-16 w-64 h-64 border border-atoll rounded-full'>
					<Sms className='absolute -mt-4 m-auto w-40 h-40 text-atoll fill-current' />
				</div>

				<div className='flex flex-row justify-around'>
					<input
						type='text'
						pattern='\d*'
						maxLength={1}
						name=''
						id=''
						className='w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:ring-atoll'
					/>
					<input
						type='text'
						pattern='\d*'
						maxLength={1}
						name=''
						id=''
						className='w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:ring-atoll'
					/>
					<input
						type='text'
						pattern='\d*'
						maxLength={1}
						name=''
						id=''
						className='w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:ring-atoll'
					/>
					<input
						type='text'
						pattern='\d*'
						maxLength={1}
						name=''
						id=''
						className='w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:ring-atoll'
					/>
					<input
						type='text'
						pattern='\d*'
						maxLength={1}
						name=''
						id=''
						className='w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:ring-atoll'
					/>
					<input
						type='text'
						pattern='\d*'
						maxLength={1}
						name=''
						id=''
						className='w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:ring-atoll'
					/>
				</div>

				<div className='mt-6'>
					<button
						onClick={() => setIndex(index + 1)}
						className='py-4 w-full text-white text-lg bg-atoll rounded-md'
					>
						Continue
					</button>
				</div>

				<div>
					Didn't receive the code?{" "}
					<span className='text-atoll underline'>Resend</span>
				</div>
			</>
		);
	}

	function Verified() {
		return (
			<>
				<div className='text-xl'>
					Phone number successfully verified
				</div>

				<div className='relative m-auto mb-4 p-16 w-72 h-72 border border-atoll rounded-full'>
					<Check className='absolute -mt-4 m-auto w-40 h-40 text-atoll fill-current' />
				</div>

				<div className='mt-72'>
					<button
						onClick={() => setIndex(index + 1)}
						className='py-4 w-full text-white text-lg bg-atoll rounded-md'
					>
						Continue
					</button>
				</div>
			</>
		);
	}

	function School() {
		return (
			<>
				<div className='text-xl'>Pick your school</div>

				<div className='relative'>
					<label
						htmlFor='description'
						className='absolute -mt-3 ml-4 px-2 text-atoll text-lg bg-white'
					>
						School
					</label>
					<input
						name='school'
						id='school'
						className='py-4 w-full border focus:border-atoll border-gray-400 rounded-md resize-y focus:ring-atoll-500'
					/>
				</div>

				<div className='-mt-4 text-left text-red-500 text-sm font-semibold'>
					This cannot be changed later!
				</div>

				<div className='mt-4'>
					<button
						onClick={() => setIndex(index + 1)}
						className='py-4 w-full text-white text-lg bg-atoll rounded-md'
					>
						Continue
					</button>
				</div>
			</>
		);
	}

	function Username() {
		return (
			<>
				<div className='text-xl'>Pick a username</div>

				<div className='relative'>
					<label
						htmlFor='description'
						className='absolute -mt-3 ml-4 px-2 text-atoll text-lg bg-white'
					>
						Username
					</label>
					<input
						name='username'
						id='username'
						className='py-4 w-full border focus:border-atoll border-gray-400 rounded-md resize-y focus:ring-atoll-500'
					/>
				</div>

				<div className='-mt-4 text-left text-red-500 text-sm font-semibold'>
					Validation would show here!
				</div>

				<div className='mt-4'>
					<button
						onClick={() => setMobileIndex(2)}
						className='py-4 w-full text-white text-lg bg-atoll rounded-md'
					>
						Create Account
					</button>
				</div>
			</>
		);
	}

	const view = [<Phone />, <OTP />, <Verified />, <School />, <Username />];

	return (
		<div className='flex flex-col gap-y-6 p-6 w-full text-center'>
			<div
				onClick={() => {
					if (index !== 0) {
						setIndex(index - 1);
					}
				}}
			>
				<Left className='w-8 h-8 text-atoll fill-current' />
			</div>

			{view[index]}
		</div>
	);
}
