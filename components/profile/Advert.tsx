import Link from "next/link";
import { useState } from "react";
import { UserAd } from "../cards";
import AdNav from "./AdNav";
import NewPost from "../../assets/svg/new_post.svg";

export default function Advert() {
	const [index, setIndex] = useState(0);

	const pages = [<Active />, <Review />, <Hidden />, <Draft />, <Declined />];

	return (
		<div className='flex flex-col gap-y-6'>
			<div>
				<AdNav index={index} setIndex={setIndex} />
			</div>

			<div>{pages[index]}</div>
		</div>
	);
}

function Active() {
	return (
		<div className='flex flex-wrap gap-4'>
			{Array(12).length > 0 ? (
				<>
					{Array(12)
						.fill(0)
						.map((item) => (
							<UserAd />
						))}
				</>
			) : (
				<div className='flex flex-col mx-auto'>
					<div className='text-center text-atoll text-2xl'>
						No Ad here!
					</div>

                    <div>
                        <NewPost />
                    </div>

					<div>
						<Link href='/'>
							<div className="cursor-pointer text-atoll">
								Click here to post your own Ad now, For Free!!
							</div>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}

function Review() {
	return (
		<div className='flex flex-wrap gap-4'>
			{Array(1).length > 0 ? (
				<>
					{Array(1)
						.fill(0)
						.map((item) => (
							<UserAd />
						))}
				</>
			) : (
				<div className='flex flex-col mx-auto'>
					<div className='text-center text-atoll text-2xl'>
						No Ad here!
					</div>

                    <div>
                        <NewPost />
                    </div>

					<div>
						<Link href='/'>
							<div className="cursor-pointer text-atoll">
								Click here to post your own Ad now, For Free!!
							</div>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}

function Hidden() {
	return (
		<div className='flex flex-wrap gap-4'>
			{Array(2).length > 0 ? (
				<>
					{Array(2)
						.fill(0)
						.map((item) => (
							<UserAd />
						))}
				</>
			) : (
				<div className='flex flex-col mx-auto'>
					<div className='text-center text-atoll text-2xl'>
						No Ad here!
					</div>

                    <div>
                        <NewPost />
                    </div>

					<div>
						<Link href='/'>
							<div className="cursor-pointer text-atoll">
								Click here to post your own Ad now, For Free!!
							</div>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}

function Draft() {
	return (
		<div className='flex flex-wrap gap-4'>
			{Array(3).length > 0 ? (
				<>
					{Array(3)
						.fill(0)
						.map((item) => (
							<UserAd />
						))}
				</>
			) : (
				<div className='flex flex-col mx-auto'>
					<div className='text-center text-atoll text-2xl'>
						No Ad here!
					</div>

                    <div>
                        <NewPost />
                    </div>

					<div>
						<Link href='/'>
							<div className="cursor-pointer text-atoll">
								Click here to post your own Ad now, For Free!!
							</div>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}

function Declined() {
	return (
		<div className='flex flex-wrap gap-4'>
			{Array(0).length > 0 ? (
				<>
					{Array(0)
						.fill(0)
						.map((item) => (
							<UserAd />
						))}
				</>
			) : (
				<div className='flex flex-col mx-auto'>
					<div className='text-center text-atoll text-2xl'>
						No Ad here!
					</div>

                    <div>
                        <NewPost />
                    </div>

					<div>
						<Link href='/'>
							<div className="cursor-pointer text-atoll">
								Click here to post your own Ad now, For Free!!
							</div>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
