import {types} from "../types";

export const initialState = {
    tx_loader: false,
    max_apr: null,
    active_tx: '',
    telemetry_rewards: [],
    telemetry_assets: []
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
    [types.SET_ACTIVE_TX]: (state, active_tx) => ({
        ...state,
        active_tx,
    }),
    [types.SET_TELEMETRY_ASSETS]: (state, telemetry_assets) => ({
        ...state,
        telemetry_assets,
    }),
};