import ACTION_CHANGE_SEARCH_VALUE_ENTERED from "../constans/actoinSearchValueEntered";

const action_search_value_entered = (value) => {
  return {
    type: ACTION_CHANGE_SEARCH_VALUE_ENTERED,
    payload: value
  }
}

export default action_search_value_entered;