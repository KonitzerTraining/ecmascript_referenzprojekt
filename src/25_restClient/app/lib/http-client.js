export default class HttpClient {
    get(url) {
        return fetch(url)
            .then((response) => {
                return response.json();
            })
            .catch(() => {
                console.warn('Server down');
            })
    }
}