import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-dark bg-success">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					Great Blogs
				</Link>
				<form className="d-flex">
					<Link to="/" className="text-decoration-none text-primary">
						All Blogs
					</Link>
					<Link
						to="/addQuote"
						className="text-decoration-none text-success"
					>
						Add Blog
					</Link>
				</form>
			</div>
		</nav>
	);
};

export default Header;
