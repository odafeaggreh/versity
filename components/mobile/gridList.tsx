/** @format */

import Card from "./card";
import useSWR from "swr";

import Group from "../../assets/svg/group.svg";
import Building from "../../assets/svg/building.svg";
import IPhone from "../../assets/svg/iphone.svg";
import Bookshelf from "../../assets/svg/bookshelf.svg";
import Sneakers from "../../assets/svg/sneakers.svg";
import Laptop from "../../assets/svg/laptop.svg";
import Makeover from "../../assets/svg/makeover.svg";
import Calendar from "../../assets/svg/calendar.svg";
import Scholarship from "../../assets/svg/scholarship.svg";
import Classroom from "../../assets/svg/classroom.svg";
import FastFood from "../../assets/svg/fast-food.svg";
import Delivery from "../../assets/svg/delivery.svg";
import Briefcase from "../../assets/svg/briefcase.svg";
import Puzzle from "../../assets/svg/puzzle.svg";
import Gym from "../../assets/svg/gym.svg";

const categories = [
	{ svg: <Group className='mx-auto w-20 h-20' />, name: "Community" },
	{ svg: <Building className='mx-auto w-20 h-20' />, name: "Accomodation" },
	{ svg: <IPhone className='mx-auto w-20 h-20' />, name: "Phone, Tablets & Accessories" },
	{ svg: <Bookshelf className='mx-auto w-20 h-20' />, name: "Books" },
	{ svg: <Sneakers className='mx-auto w-20 h-20' />, name: "Fashion" },
	{ svg: <Laptop className='mx-auto w-20 h-20' />, name: "Electronics" },
	{ svg: <Makeover className='mx-auto w-20 h-20' />, name: "Health & Beauty" },
	{ svg: <Calendar className='mx-auto w-20 h-20' />, name: "Events & Parties" },
	{ svg: <Scholarship className='mx-auto w-20 h-20' />, name: "Scholarships" },
	{ svg: <Classroom className='mx-auto w-20 h-20' />, name: "Tutorials & Training" },
	{ svg: <FastFood className='mx-auto w-20 h-20' />, name: "Resturants & Food Services" },
	{ svg: <Delivery className='mx-auto w-20 h-20' />, name: "Services" },
	{ svg: <Briefcase className='mx-auto w-20 h-20' />, name: "Part Time Jobs" },
	{ svg: <Puzzle className='mx-auto w-20 h-20' />, name: "Artwork and Board Games" },
	{ svg: <Gym className='mx-auto w-20 h-20' />, name: "Sporting Equipment" },
];

// getStaticProps() WORKS ONLY ON PAGES NOT COMPONENTS 

// export async function getStaticProps() {
// 	const data = await fetch(`${process.env.BASE_URL}/categories`);

// 	console.log(data);
// 	return data.json;
// }

// async function fetcher(url: string) {
// 	const res = await fetch(url);
// 	return res.json();
// }

export default function MobileGridList() {	
	// const { data, error } = useSWR(
	// 	`${process.env.BASE_URL}/categories`,
	// 	fetcher
	// );
	// console.log(data);
	// console.log(error);

	return (
		<div className='flex flex-col gap-y-6 z-0 mb-24 mt-4 mx-auto'>
			<div className='text-gray-500 ml-6'>Browse Categories</div>
			<div className='flex flex-wrap gap-4 justify-center'>
				{categories.map((category) => (
					<Card key={category.name} svg={category.svg} name={category.name} />
				))}
			</div>
		</div>
	);
}
