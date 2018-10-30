import React from 'react';

export const AppContext = React.createContext({
    header: "To jest header",
    title: "To jest title",
    showTitle: false,
    pokemonInfo: [],
    fetchPokemon: (pokemon) => console.log(pokemon)
});

