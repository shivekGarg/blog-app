import react, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddQuote from './components/AddQuote';
import Home from './components/Home';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Quote from './components/Quote';

function App() {
	const [quotes, setQuotes] = useState([]);
	async function fetchQuotes() {
		const res = await axios.get('https://blog-api-shivek.herokuapp.com/getQuotes');
		setQuotes(res.data);
	}
	useEffect(() => {
		fetchQuotes();
	}, []);
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Home data={quotes} />
				</Route>
				<Route path="/addQuote" exact>
					<AddQuote fetchQuotes={fetchQuotes} />
				</Route>
				<Route path="/quote/:id">
					<Quote data={quotes} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
