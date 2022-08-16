import Base from "./Base";

export default class ApiClient extends Base {
    async getPriceSMCW() {
        return await super.get(`price`)
    }
}