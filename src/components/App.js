import React from 'react';
import CharacterList from './CharacterList';
import axios from 'axios';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			characterList: []
		}
	}

	async componentDidMount() {
		let url = 'https://swapi.co/api/people/';

		let char1 = await axios.get(url+'1');
		let char2 = await axios.get(url+'2');
		let char3 = await axios.get(url+'3');

		this.setState({characterList: [char1, char2, char3]});
	}

	render() {
		return <CharacterList list={this.state.characterList} />
	}
}

export default App;