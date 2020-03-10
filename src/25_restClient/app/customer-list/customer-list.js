import HttpClient from "../lib/http-client.js";

export default class CustomerList {

    constructor() {
        this.httpClient = new HttpClient();
        // ES6
        Reflect.defineProperty(this, 'customers', {
           value: [],
           writable: true,
           enumerable: true,
           configurable: false
        });
    }

    loadCustomers () {
        return this.httpClient
            .get('http://localhost:3000/customers')
            .then((customers) => {
                console.log(this);
                this.customers = customers;
            });
    }

    searchForName(name) {
        return this.customers.filter((customer) => {
            return customer.name === name;
        })
    }
}