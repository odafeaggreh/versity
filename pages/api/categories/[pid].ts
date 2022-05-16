// export default function handler(req, res) {
//     const { pid } = req.query
//     // res.send(`Post: ${pid}`)
// 	const url = `${process.env.BASE_URL}/categories`;

//     const data = fetch(url);

//     res.status(200).json({data})
//     // res.status(401).json(data)

//     // res.status(200).json({id: pid})
//   }


export default async function fetchData(req, res) {
	const { pid } = req.query;

	const url = `${process.env.BASE_URL}/${pid}`;

    const data = await fetch(url);
    res.status(200).json({data});
}
