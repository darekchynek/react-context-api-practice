import React, { Component } from 'react';
import './App.scss';
import Main from './components/Main/Main';
import { AppContext } from './AppContext';

class App extends Component {
  state = {
    header: "POKEMON",
    title: "First generation pokemon list !",
    showTitle: true,
    pokemons: [],
    pokemonInfo: [],
    fetchPokemon: null
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/generation/1')
      .then(res => res.json())
      .then(res => this.setState({pokemons: res.pokemon_species}));
    this.setState({fetchPokemon: (name) => this.fetchPokemonHandler(name)})
  }

  fetchPokemonHandler = async (name) => {
    if (this.state.pokemonInfo.some(poke => poke.name === name)) {
      console.log('includes')
    } else {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(res => this.setState({pokemonInfo: [
        ...this.state.pokemonInfo,
        res
      ]}))
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Main  />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
