import { useState } from "react";
import { UserFeedback } from "../cards";
import FeedbackNav from "./FeedbackNav";

export default function Feedback() {
	const [index, setIndex] = useState(0);

    const pages = [<Sent />, <Received />];

	return (
		<div className='flex flex-col gap-y-6'>
			<div>
				<FeedbackNav index={index} setIndex={setIndex} />
			</div>

			<div>
				{pages[index]}
			</div>
		</div>
	);
}

function Sent() {
	return (
		<div className='flex flex-wrap gap-4'>
			{Array(2).length > 0 ? (
				<>
					{Array(2)
						.fill(0)
						.map((item) => (
							<UserFeedback />
						))}
				</>
			) : (
				<div className='mx-auto text-atoll text-2xl'>No Ad here!</div>
			)}
		</div>
	);
}

function Received() {
	return (
		<div className='flex flex-wrap gap-4'>
			{Array(1).length > 0 ? (
				<>
					{Array(1)
						.fill(0)
						.map((item) => (
							<UserFeedback />
						))}
				</>
			) : (
				<div className='mx-auto text-atoll text-2xl'>No Ad here!</div>
			)}
		</div>
	);
}