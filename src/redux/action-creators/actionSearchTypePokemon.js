import ACTION_CHANGE_SEARCH_TYPE_POKEMON from "../constans/actionSearchTypePokemon";

const action_search_type_pokemon = (value) => {
  return {
    type: ACTION_CHANGE_SEARCH_TYPE_POKEMON,
    payload: value
  }
}

export default action_search_type_pokemon;