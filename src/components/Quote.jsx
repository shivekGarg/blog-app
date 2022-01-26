import { useParams } from 'react-router-dom';

const Quote = ({ data: quotes }) => {
	const location = useParams();
	const quote = quotes.filter((quote) => quote._id == location.id)[0];
	return (
		<div class="container">
			{quote && (
				<div
					class="card text-white bg-dark mb-3"
					style={{ maxWidth: '18rem' }}
				>
					<div class="card-header">
						<h3>{quote.title}</h3>
					</div>
					<div class="card-body">
						<p class="card-text">{quote.author}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Quote;
