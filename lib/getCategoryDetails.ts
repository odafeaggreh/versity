export default async function getCategoryDetails(id:string) {
    const res = await fetch(`${process.env.BASE_URL}/categories/${id}`);
	const data = await res.json();
    return data;
}