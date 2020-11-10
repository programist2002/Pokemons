import ACTION_CHANGE_LIMIT_VALUE from "../constans/actionLimitValue";

const action_change_limit_value = (value) => {
  return {
    type: ACTION_CHANGE_LIMIT_VALUE,
    payload: value
  }
}

export default action_change_limit_value;