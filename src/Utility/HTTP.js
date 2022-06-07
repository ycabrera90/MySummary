export class HttpReq {
    constructor(PROTOCOL, SERVER_URL, PORT) {
        this.protocol = PROTOCOL;
        this.serverUrl = SERVER_URL;
        this.port = PORT;
    }
    sendHttpRequest(method, url, data) {
        return fetch(`${this.protocol}://${this.serverUrl}:${this.port}/${url}`, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    return response.json().then((errData) => {
                        throw new Error('Something went wrong - server-side.');
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                throw new Error('Something went wrong!');
            });
    }
}

