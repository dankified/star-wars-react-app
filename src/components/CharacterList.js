import React from 'react';
import Character from './Character';

class CharacterList extends React.Component {

	render() {
		return (
			<div id="character-list">
				{this.props.list.map(function(el, index) {
					return <Character data={el} />
				})}
			</div>
		)
	}

}

export default CharacterList;