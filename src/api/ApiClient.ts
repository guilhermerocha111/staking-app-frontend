import Base from "./Base";

export default class ApiClient extends Base {
    async getPriceSMCW() {
        return await super.get(`price`)
    }
    async mint(enjinAddress: string, claimAmount: string) {
        return await super.get(`mint?walletId=${enjinAddress}&value=${claimAmount}`)
    }
}