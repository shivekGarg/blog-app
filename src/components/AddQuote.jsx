import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const AddQuote = ({ fetchQuotes }) => {
	const [author, setAuthor] = useState('');
	const [title, setTitle] = useState('');
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		const res = await axios.post('https://blog-api-shivek.herokuapp.com/addQuote', {
			author,
			title,
		});
		if (res.data) {
			fetchQuotes();
			history.push('/');
		}
	}
	return (
		<div className="container">
			<form>
				<div className="form-group">
					<label htmlFor="firstname">Author</label>
					<input
						type="text"
						id="firstname"
						name="firstname"
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastname">Blog</label>
					<textarea
						name="lastname"
						id="lastname"
						cols="30"
						rows="10"
						onChange={(e) => setTitle(e.target.value)}
					></textarea>
				</div>
				<button type="submit" onClick={handleSubmit}>
					Add Blog
				</button>
			</form>
		</div>
	);
};

export default AddQuote;
