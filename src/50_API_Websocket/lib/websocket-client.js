export default class WebsocketClient {
    constructor(uri) {
        this.websocket = new WebSocket(uri);
    }

    sendMessage (msg) {
        this.websocket.send(msg);
    }
    open() {
        return new Promise((resolve) => {
            this.websocket.onopen = resolve;
        });
    }

    listen () {
        return new Promise((resolve) => {
            this.websocket.onmessage = resolve;
        });
    }

}