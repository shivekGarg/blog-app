import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Home = ({ data: quotes }) => {
	const history = useHistory();
	return (
		<div className="container">
			{quotes.length === 0 ? (
				<div className="card">
					<div className="card-header">
						<h1>No Blog Found!</h1>
					</div>
					<button
						className="btn btn-success"
						onClick={() => history.push('/addQuote')}
					>
						Add Blog
					</button>
				</div>
			) : (
				<ul className="list-group" style={{ width: '40vw' }}>
					{quotes.map((quote) => {
						return (
							<li
								key={quote._id}
								className="list-group-item d-flex justify-content-between align-items-start"
							>
								<div className="card">
									<div className="card-body">
										<h5 className="card-title">
											{quote.title}
										</h5>
										<p className="card-text">
											{quote.author}
										</p>
									</div>
								</div>
								<button className="btn btn-primary">
									<Link
										to={`/quote/${quote._id}`}
										style={{
											color: 'white',
											textDecoration: 'none',
											fontSize: '80%',
										}}
									>
										View Full Screen
									</Link>
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default Home;
