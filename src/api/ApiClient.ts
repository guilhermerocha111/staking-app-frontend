import Base from "./Base";

export default class ApiClient extends Base {
    async getPriceSMCW() {
        return await super.get(`price`)
    }

    async getTelemetryRewards(wallet_id: string) {
        return await super.get(`rewards/${wallet_id}`)
    }

    async getTelemetryAssets() {
        return await super.get(`assets`)
    }
}