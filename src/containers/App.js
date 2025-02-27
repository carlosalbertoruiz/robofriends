import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	
	constructor() {
		super ();
		this.state = {
			robots: [],
			searchfield: '' //Test with the "Clementine" as a default value
		}
	}

	componentDidMount()	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots: users})});
	}


	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render () {
		const { robots, searchfield } = this.state; // para acceder directo a robots y searchfield
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		// Se modifica el if, optimizando el código
		 return !robots.length ?
			<h1>Loading</h1> :
			(
				<div className="tc">
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox  searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots = {filteredRobots} />
					</Scroll>
				</div>
			);
		}
}

export default App;