import ACTION_CHANGE_COLLAPSED_FLAG from './../constans/actionCollapsedFlag'


const action_change_collapsed_flag = (newCollapsed) => {

  return {
    type: ACTION_CHANGE_COLLAPSED_FLAG,
    payload: !newCollapsed
  }
}

export default action_change_collapsed_flag;