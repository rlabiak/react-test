import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get('https://api.pokemontcg.io/v1/cards?pageSize=10')
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data.cards
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {items.filter(item => item.supertype == 'Pokémon').map(item => (
                        < div key={item.id} >
                            <Link to={item.id} >
                                <img src={item.imageUrl} />
                            </Link>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default PokemonList;