import {types} from "../types";
const DEFAULT_PRICE_VALUE = {
    id: 0,
    name: "Space Misfits",
    symbol: "SMCW",
    slug: "space-misfits",
    num_market_pairs: 3,
    date_added: "2022-01-03T03:58:28.000Z",
    tags: ["collectibles-nfts", "gaming", "ethereum-ecosystem", "play-to-earn"],
    max_supply: 200000000,
    circulating_supply: 0,
    total_supply: 200000000,
    platform: {
      id: 1839,
      name: "BNB",
      symbol: "BNB",
      slug: "bnb",
      token_address: "0xb2ea51BAa12C461327d12A2069d47b30e680b69D",
    },
    is_active: 1,
    cmc_rank: 4023,
    is_fiat: 0,
    self_reported_circulating_supply: 12214476,
    self_reported_market_cap: 487704.02951344335,
    tvl_ratio: null,
    last_updated: "2022-07-02T11:43:00.000Z",
    quote: {
      USD: {
        price: 0,
        volume_24h: 67343.53455423,
        volume_change_24h: -28.9032,
        percent_change_1h: 0.01485443,
        percent_change_24h: 0.18992648,
        percent_change_7d: -5.45794101,
        percent_change_30d: -34.47879546,
        percent_change_60d: -52.83405972,
        percent_change_90d: -87.80201594,
        market_cap: 0,
        market_cap_dominance: 0,
        fully_diluted_market_cap: 7985672.57,
        tvl: null,
        last_updated: "2022-07-02T11:43:00.000Z",
      },
    },
  };

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
    },
    tokenInfo: DEFAULT_PRICE_VALUE
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
    [types.SET_PRICE]: (state, tokenInfo) => ({
        ...state,
        tokenInfo,
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
    [types.SET_ALLOWANCE_ONE]: (state, {key, flag}) => {
        return {
            ...state,
            allowance: {
                ...state.allowance,
                [key]: flag
            }
        }
    },
    [types.SET_LP_INFO]: (state, lpInfo) => {
        return {
            ...state,
            lpInfo
        }
    },
};