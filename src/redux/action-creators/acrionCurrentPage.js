import ACTION_CHANGE_CURRENT_PAGE from "../constans/actionCurrentPage"

const action_change_current_page = (newCurrentPage) => {

  return {
    type: ACTION_CHANGE_CURRENT_PAGE,
    payload: newCurrentPage
  }

}

export default action_change_current_page;