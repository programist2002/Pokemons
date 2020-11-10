import ACTION_CHANGE_POKEMON_ALL from '../constans/actionPokemonAll';


const action_change_pokemon_all = (pokemons) => {

  return {
    type: ACTION_CHANGE_POKEMON_ALL,
    payload: pokemons
  }
}

export default action_change_pokemon_all;