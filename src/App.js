import React, { lazy, Suspense, Component } from 'react';
import './App.scss';
import { AppContext } from './AppContext';
const Main = lazy(() => import('./components/Main/Main'));

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

  fetchPokemonHandler = (name) => {
    if (this.state.pokemonInfo.some(poke => poke.name === name)) {
      console.log('includes')
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
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
        <Suspense fallback={<h3>Wait for pokemons...</h3>}>
          <Main  />
        </Suspense>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
