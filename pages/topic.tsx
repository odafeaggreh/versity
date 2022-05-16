// TEMP PAGE MADE TO SHOW HOW A FILTER PAGE WOULD LOOK LIKE

import React from "react";
import { MobileCategoriesCard } from "../components/cards";
import MobileLayout from "../components/mobile/layout";

const categories = [
    {name: 'General', topics: ['Crime', 'Romance', 'Family', 'Culture', 'Education', 'Religion', 'Politics', 'Travel', 'Health', 'Job Listings', 'Career']},
    {name: 'Animals & Pets', topics: ['Contains topics and discussions from general issues']},
    {name: 'Business', topics: ['Start ups', 'Career', 'Agriculture', 'Investment']},
    {name: 'Entertainment', topics: ['TV', 'Movies', 'Music', 'Celebrity Gists', 'Events', 'Clubbing', 'Fashion', 'Gaming', 'Art']},
    {name: 'Poll', topics: ['Create a poll where users can vote one out of a maximum of four options you pose to them']},
    {name: 'Sports & Hobbies', topics: ['Football', 'Basketball', 'F1', 'Kayaking', 'Mountain Climbing', 'Amusement Parks', 'Beaches']},
    {name: 'Science & Tech', topics: ['Phones', 'Computers', 'Programming', 'Apps', 'Artificial Intelligence', 'Machine Learning', 'Cyber Security', 'IoT', 'Crypto']},
]

export default function Topic() {
	return (
		<MobileLayout subcategory='Choose Topic'>
			<div className='flex flex-col px-8 mt-32 gap-y-4'>
                {categories.map(item => (
				    <MobileCategoriesCard category={item} />
                ))}

				
			</div>
		</MobileLayout>
	);
}
