import { w3cwebsocket as W3CWebSocket } from "websocket";

export const wsClient = new W3CWebSocket(`${process.env.REACT_APP_WS_PROTOCOL}://${process.env.REACT_APP_WS_URL}:${process.env.REACT_APP_WS_PORT}`);