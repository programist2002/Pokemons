const initialState = {
  urlAPI: "https://pokeapi.co/api/v2",
  allPokemon: [],
  loader: false,
  collapsed: true,
  currentPage: 1,
  limitValue: 20,
  offsetValue: 0,
  numberOfPokemon: 800,
  searchTypePokemon: '',
  searchValueEntered: null
};

export default initialState;