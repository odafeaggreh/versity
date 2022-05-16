export default async function fetchData(req, res) {
	const { token } = req.query;

	res.redirect('/');
	localStorage.setItem('token', token);
}
