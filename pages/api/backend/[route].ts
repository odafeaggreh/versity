import axios from "axios";

export default async function fetchData(req, res) {
	const { route } = req.query;

	const url = `${process.env.BASE_URL}/${route}`;

	const { data } = await axios.get(url);
	res.status(200).json(data);
}
