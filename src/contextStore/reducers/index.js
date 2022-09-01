import {types} from "../types";

export const initialState = {
    tx_loader: false,
    max_apr: null,
    telemetry_rewards: []
}

export const reducers = {
    [types.SET_TX_LOADER]: (state, tx_loader) => ({
        ...state,
        tx_loader,
    }),
    [types.SET_MAX_APR]: (state, max_apr) => ({
        ...state,
        max_apr,
    }),
    [types.SET_TELEMETRY_REWARDS]: (state, telemetry_rewards) => ({
        ...state,
        telemetry_rewards,
    }),
};