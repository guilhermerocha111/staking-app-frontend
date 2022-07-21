import axios from "axios";

export default class Base {
    BASE_URL: string | undefined;

    constructor() {
        this.BASE_URL = process.env.REACT_APP_SERVER_URL;
    }

    getUrl(path: string) {
        return `${this.BASE_URL}/${path}`;
    }

    errorCatch(error: any) {
        const code: number | undefined = error?.response?.status;
        const message: string | undefined = error?.response?.data?.message;

        switch (code) {
            case 401:
                return {status: false, message};
            default:
                return {status: false, message};
        }
    }

    get(url: string, config?: any) {
        return axios
            .get(this.getUrl(url), {...config})
            .then((res) => res.data)
            .catch(this.errorCatch);
    }

    post(url: string, data: any, config?: any) {
        return axios
            .post(this.getUrl(url), data, {...config})
            .then((res) => res.data)
            .catch((error) => ({status: false, message: error}));
    }

    put(url: string, data: any, config?: any) {
        return axios
            .put(this.getUrl(url), data, {...config})
            .then((res) => res.data)
            .catch((error) => ({status: false, message: error}));
    }

    delete(url: string, data: any, config?: any) {
        return axios
            .delete(this.getUrl(url), {...config})
            .then((res) => res.data)
            .catch((error) => ({status: false, message: error}));
    }

    postThirdParty(url: string, data: any, config: any) {
        return axios
            .post(url, data, config)
            .then((res) => res.data)
            .catch((error) => ({status: false, message: error}));
    }
}