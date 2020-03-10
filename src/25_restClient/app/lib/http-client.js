export default class HttpClient {
    get(url) {
        // HTML5 Fetch API
        return fetch(url)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .catch(() => {
                console.warn('Server down');
                return [];
            })
    }
}