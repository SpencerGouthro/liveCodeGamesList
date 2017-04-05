import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Game from './Game';

class GamesList extends Component {

    state = { games: [] }

    componentDidMount() {
        fetch('http://localhost/games', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json().then(json => {
                this.setState({ games: json.message });
            });
        });
    }

    generateGames() {
        return this.state.games.map(theGame => 
            <Game key={theGame._id} game={theGame} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.generateGames()}
            </ScrollView>
        );
    }
}

export default GamesList;
