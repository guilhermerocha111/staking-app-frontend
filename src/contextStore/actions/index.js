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
    [types.SET_REWARDS]:
        (dispatch) =>
            (value = {}) => {
                dispatch({
                    type: types.SET_REWARDS,
                    payload: value,
                })
    },
    [types.SET_ALLOWANCE]:
        (dispatch) =>
            (value = {}) => {
                dispatch({
                    type: types.SET_ALLOWANCE,
                    payload: value,
                })
    },
    [types.SET_ACTIVE_TX]:
        (dispatch) =>
            (value = {}) => {
                dispatch({
                    type: types.SET_ACTIVE_TX,
                    payload: value,
                })
    },
    [types.SET_MAX_APR]:
        (dispatch) =>
            (value = {}) => {
                dispatch({
                    type: types.SET_MAX_APR,
                    payload: value,
                })
    },
    [types.SET_TELEMETRY_REWARDS]:
        (dispatch) =>
            (value = {}) => {
                dispatch({
                    type: types.SET_TELEMETRY_REWARDS,
                    payload: value,
                })
    },
    [types.SET_TELEMETRY_ASSETS]:
        (dispatch) =>
            (value = {}) => {
                dispatch({
                    type: types.SET_TELEMETRY_ASSETS,
                    payload: value,
                })
    },
}

export default actions;