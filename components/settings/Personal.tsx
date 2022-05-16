import { useState } from "react";

export default function Personal() {
	const [data, setData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		username: "",
		password: "",
	});

	console.log(data);

	return (
		<div className='flex flex-col mx-auto px-60 my-6'>
			<div className='relative'>
				<input
					type='text'
                    name='fname'
					onChange={(e) => setData({...data, fname: e.target.value})}
					value={data.fname}
					className='my-4 py-4 w-full rounded-md placeholder-atoll ring-atoll focus:border-atoll'
				/>
                <label className="absolute top-0" htmlFor="fname">First Name</label>
			</div>

			<div>
				<input
					type='text'
					placeholder='Last Name'
					onChange={(e) => setData({...data, lname: e.target.value})}
					value={data.lname}
                    className='my-4 py-4 w-full rounded-md placeholder-atoll ring-atoll focus:border-atoll'
				/>
			</div>

			<div>
				<input
					type='email'
					placeholder='Email'
					onChange={(e) => setData({...data, email: e.target.value})}
					value={data.email}
                    className='my-4 py-4 w-full rounded-md placeholder-atoll ring-atoll focus:border-atoll'
				/>
			</div>

			<div>
				<input
					type='tel'
					placeholder='Phone Number'
					onChange={(e) => setData({...data, phone: e.target.value})}
					value={data.phone}
                    className='my-4 py-4 w-full rounded-md placeholder-atoll ring-atoll focus:border-atoll'
				/>
			</div>

			<div>
				<input
					type='text'
					placeholder='Username'
					onChange={(e) => setData({...data, username: e.target.value})}
					value={data.username}
                    className='my-4 py-4 w-full rounded-md placeholder-atoll ring-atoll focus:border-atoll'
				/>
			</div>

			<div>
				<input
					type='password'
					name='Password'
					onChange={(e) => setData({...data, password: e.target.value})}
					value={data.password}
                    className='my-4 py-4 w-full rounded-md ring-atoll focus:border-atoll'
				/>
			</div>

			<div>
				<input
					disabled
					type='text'
					value='University of Lagos (UNILAG)'
                    className='my-4 py-4 w-full rounded-md bg-gray-200 text-gray-500 cursor-not-allowed'
				/>
			</div>
		</div>
	);
}
