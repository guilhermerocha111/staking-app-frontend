import {types} from "../types";

export const initialState = {
    tx_loader: false,
    max_apr: null,
    active_tx: '',
    telemetry_rewards: [],
    telemetry_assets: [],
    telemetry_rewards_by_tx: null,
    allowance: {
        smcw_to_smcw: null,
        lp_to_smcw: null,
        smcw_to_nft: null
    },
    lpInfo: {
        lp_price: 0,
        smcw_price: 0
    }
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
    [types.SET_REWARDS]: (state, telemetry_rewards_by_tx) => ({
        ...state,
        telemetry_rewards_by_tx,
    }),
    [types.SET_ALLOWANCE]: (state, allowance) => {
        return {
            ...state,
            allowance: {
                smcw_to_smcw: allowance.smcw_to_smcw,
                lp_to_smcw: allowance.lp_to_smcw,
                smcw_to_nft: allowance.smcw_to_nft
            },
        }
    },
    [types.SET_LP_INFO]: (state, lpInfo) => {
        return {
            ...state,
            lpInfo
        }
    },
};