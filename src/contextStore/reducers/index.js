import {types} from "../types";

export const initialState = {
    tx_loader: false,
}

export const reducers = {
    [types.SET_TX_LOADER]: (state, tx_loader) => ({
        ...state,
        tx_loader,
    }),
};