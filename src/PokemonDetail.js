import React, { Component } from 'react';
import axios from 'axios';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            pokemon: null
        };
    }

    componentDidMount() {
        axios.get('https://api.pokemontcg.io/v1/cards/' + this.props.match.params.id)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pokemon: result.data.card
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, pokemon } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div>
                        <img src={pokemon.imageUrl} />
                        <p>Name: {pokemon.name}</p>
                        <p>HP: {pokemon.hp}</p>
                        <p>National Pokedex Number: {pokemon.nationalPokedexNumber}</p>
                        <p> Type:
                            {pokemon.types.map(type => type)}
                        </p>

                    </div>
                </div>
            );
        }
    }
}

export default PokemonDetail;