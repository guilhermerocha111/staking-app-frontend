import { w3cwebsocket as W3CWebSocket } from "websocket";

export const wsClient = new W3CWebSocket(`ws://${process.env.REACT_APP_WS_URL}:3005`);