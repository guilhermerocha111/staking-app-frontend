import {types} from "../types";

export const initialState = {
    tx_loader: false,
    max_apr: null,
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
};