import Base from "./Base";

interface stakingPayload {
  staker_address: string;
  pool_address: string;
  amount: number;
  coin_ticker: string;
  pool: string;
}

export default class ApiClient extends Base {
  async getPriceSMCW() {
    return await super.get(`price`);
  }

  async getTelemetryRewards(wallet_id: string) {
    return await super.get(`rewards/${wallet_id}`);
  }

  async getTelemetryAssets() {
    return await super.get(`assets`);
  }

  async getAppInfo() {
    return await super.get("info");
  }

  async getRewardsByTxHash(tx_hash: string) {
    return await super.get(`tx/${tx_hash}`);
  }

  async getAPR() {
    return await super.get("apr");
  }

  async getStakings(staker_address: string, pool_address: string) {
    return await super.get(`staking/${staker_address}/${pool_address}`);
  }

  async postStaking(payload: stakingPayload) {
    const { staker_address, pool_address, amount, coin_ticker, pool } = payload;
    return await super.post(`staking`, {
      staker_address,
      pool_address,
      amount,
      coin_ticker,
      pool,
    });
  }

  async postPledging(payload: stakingPayload) {
    const { staker_address, pool_address, amount, coin_ticker, pool } = payload;
    return await super.post(`staking`, {
      staker_address,
      pool_address,
      amount,
      coin_ticker,
      pool,
    });
  }

  async setStakingClaimed(id: string) {
    return await super.put(`staking`, { id });
  }
}
