import {types} from "../types";

const actions = {
    [types.SET_TX_LOADER]:
        (dispatch) =>
            (value = {}) => {
                dispatch({
                    type: types.SET_TX_LOADER,
                    payload: value,
                })
    },
}

export default actions;