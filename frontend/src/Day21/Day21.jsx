import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Day21() {
	const [data, setData] = useState([])
	const [page, setPage] = useState(1)

	useEffect(() => {
		fetchData(page)
	}, [page])

	const fetchData = async (page) => {
		const limit = 10
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
			)
			const newData = response.data

			// Calculate the starting index for the current page's data
			const startIndex = (page - 1) * limit

			// Merge the new data with the existing data
			setData((prevData) => {
				const updatedData = [...prevData]
				prevData.splice(startIndex, newData.length, ...newData)
				return updatedData
			})
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	/// Without previous functionality, simply use the following
	/*  
	const fetchData = async (page) => {
		const updatedData = [...data]
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
			)
			response.data.map((e) => updatedData.push(e))
			setData(updatedData)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}
	*/

	const handleNext = () => {
		setPage(page + 1)
	}

	const handlePrevious = () => {
		if (page <= 1) return
		const prevData = [...data]
		const updatedData = prevData.slice(0, -10)
		setData(updatedData)

		setPage(page - 1)
	}

	return (
		<>
			<h2>Simple Pagination App</h2>
			<button id="previous" onClick={handlePrevious}>
				Previous
			</button>
			<button id="next" onClick={handleNext}>
				Next
			</button>
			<p>Page: {page}</p>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.body}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
