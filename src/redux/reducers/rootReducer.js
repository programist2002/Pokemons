import ACTION_CHANGE_COLLAPSED_FLAG from '../constans/actionCollapsedFlag';
import ACTION_CHANGE_CURRENT_PAGE from '../constans/actionCurrentPage';
import ACTION_CHANGE_LIMIT_VALUE from '../constans/actionLimitValue';
import ACTION_CHANGE_POKEMON_ALL from '../constans/actionPokemonAll';
import ACTION_CHANGE_SEARCH_TYPE_POKEMON from '../constans/actionSearchTypePokemon';
import ACTION_CHANGE_STATUS_LOADER from '../constans/actionStatusLoader';
import ACTION_CHANGE_SEARCH_VALUE_ENTERED from '../constans/actoinSearchValueEntered';
import initialState from '../initial-state';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_COLLAPSED_FLAG:
      return { ...state, collapsed: action.payload };
    case ACTION_CHANGE_POKEMON_ALL:
      return { ...state, allPokemon: action.payload };
    case ACTION_CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case ACTION_CHANGE_STATUS_LOADER:
      return { ...state, loader: action.payload };
    case ACTION_CHANGE_LIMIT_VALUE:
      return { ...state, limitValue: action.payload };
    case ACTION_CHANGE_SEARCH_VALUE_ENTERED:
      return { ...state, searchValueEntered: action.payload };
      case ACTION_CHANGE_SEARCH_TYPE_POKEMON: 
      return { ...state, searchTypePokemon: action.payload };
  }

  return state;
};

export default rootReducer;