import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Pokemon from "./Pokemon";

import { GET_POKEMONS } from "../graphql/getPokemons";

const PokemonContainer = () => {
  const { data: { pokemons = [] } = {}, error, loading } = useQuery(GET_POKEMONS, {
    variables: { first: 9 }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <div className="container">
      { pokemons && pokemons.map(pokemon => (
        <Pokemon key={ pokemon.id } pokemon={ pokemon } />) 
      )}
    </div>
  );
}

export default PokemonContainer;
