import ACTION_CHANGE_STATUS_LOADER from "../constans/actionStatusLoader";

const action_change_status_loader = (status) => {

  return {
    type: ACTION_CHANGE_STATUS_LOADER,
    payload: !status
  }
}

export default action_change_status_loader;
