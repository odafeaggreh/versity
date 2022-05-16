/** @format */

import Card from "./card";
import useSWR from "swr";
import Group from "../../../assets/svg/group.svg";
import Building from "../../../assets/svg/building.svg";
import IPhone from "../../../assets/svg/iphone.svg";
import Bookshelf from "../../../assets/svg/bookshelf.svg";
import Sneakers from "../../../assets/svg/sneakers.svg";
import Laptop from "../../../assets/svg/laptop.svg";
import Makeover from "../../../assets/svg/makeover.svg";
import Calendar from "../../../assets/svg/calendar.svg";
import Scholarship from "../../../assets/svg/scholarship.svg";
import Classroom from "../../../assets/svg/classroom.svg";
import FastFood from "../../../assets/svg/fast-food.svg";
import Delivery from "../../../assets/svg/delivery.svg";
import Briefcase from "../../../assets/svg/briefcase.svg";
import Puzzle from "../../../assets/svg/puzzle.svg";
import Gym from "../../../assets/svg/gym.svg";

const icons = [
	{ svg: <Group className='mx-auto w-24 h-24' />, name: "Community" },
	{ svg: <Building className='mx-auto w-24 h-24' />, name: "Accommodation" },
	{
		svg: <IPhone className='mx-auto w-24 h-24' />,
		name: "Phones, Tablets & Accessories",
	},
	{ svg: <Bookshelf className='mx-auto w-24 h-24' />, name: "Books" },
	{ svg: <Sneakers className='mx-auto w-24 h-24' />, name: "Fashion" },
	{ svg: <Laptop className='mx-auto w-24 h-24' />, name: "Electronics" },
	{
		svg: <Makeover className='mx-auto w-24 h-24' />,
		name: "Health & Beauty",
	},
	{
		svg: <Calendar className='mx-auto w-24 h-24' />,
		name: "Events & Parties",
	},
	{
		svg: <Scholarship className='mx-auto w-24 h-24' />,
		name: "Scholarships",
	},
	{
		svg: <Classroom className='mx-auto w-24 h-24' />,
		name: "Tutorials & Training",
	},
	{ svg: <FastFood className='mx-auto w-24 h-24' />, name: "Food & Drinks" },
	{ svg: <Delivery className='mx-auto w-24 h-24' />, name: "Services" },
	{
		svg: <Briefcase className='mx-auto w-24 h-24' />,
		name: "Part Time Jobs",
	},
	{
		svg: <Puzzle className='mx-auto w-24 h-24' />,
		name: "Artwork and Board Games",
	},
	{ svg: <Gym className='mx-auto w-24 h-24' />, name: "Sporting Equipment" },
];

const svgs = {
	Community: <Group className='mx-auto w-24 h-24' />,
	Accommodation: <Building className='mx-auto w-24 h-24' />,
	"Phones, Tablets & Accessories": <IPhone className='mx-auto w-24 h-24' />,
	Books: <Bookshelf className='mx-auto w-24 h-24' />,
	Fashion: <Sneakers className='mx-auto w-24 h-24' />,
	Electronics: <Laptop className='mx-auto w-24 h-24' />,
	"Health & Beauty": <Makeover className='mx-auto w-24 h-24' />,
	"Events & Parties": <Calendar className='mx-auto w-24 h-24' />,
	Scholarships: <Scholarship className='mx-auto w-24 h-24' />,
	"Tutorials & Training": <Classroom className='mx-auto w-24 h-24' />,
	"Restaurant & Food Services": <FastFood className='mx-auto w-24 h-24' />,
	Services: <Delivery className='mx-auto w-24 h-24' />,
	"Part Time jobs": <Briefcase className='mx-auto w-24 h-24' />,
	"Art, Board Games & Sports Equipment": <Puzzle className='mx-auto w-24 h-24' />,
	"Sporting Equipment": <Gym className='mx-auto w-24 h-24' />,
};

export default function GridList({ categories }) {
	// const { data, error } = useSWR(`${process.env.BASE_URL}/categories`, fetch);

	// console.log(categories);

	return (
		<div className='container z-0 mt-4 mx-auto px-16 w-full'>
			<div className=''>Browse Categories</div>
			<div className='flex flex-wrap gap-x-10 gap-y-4 justify-center mx-auto py-6'>
				{/* FRONTEND CATEGORIES COMING FROM THE ICONS OBJECT. TO BE REPLACED WITH THE BACKEND ONE */}
				{/* {icons.map((category) => (
					<Card svg={category.svg} name={category.name} />
				))} */}

				{categories.sort((i, j) => i.index - j.index).map(category => (
					<Card svg={svgs[category.name]} name={category.name} />
				))}

				{/* BACKEND ONE 😈 */}
				{/* {categories.map((category) => (
					<Card
						svg={svgs[category.name]}
						category={category}
						key={category.key}
					/>
				))} */}
			</div>
		</div>
	);
}
