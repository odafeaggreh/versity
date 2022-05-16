// THIS GETS ALL THE ID'S OF ALL THE CATEGORIES

export default async function getCategoryIds() {
	const res = await fetch(`${process.env.BASE_URL}/categories`);
	const categories = await res.json();
	const paths = categories.payload.map((category) => {
		return {
			params: {
				id: category._id,
			},
		};
	});
	return paths;
}
