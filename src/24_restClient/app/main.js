import {devUrl, liveUrl} from "./config.js";

console.log('EcmaScript 6 für Angular');

// Add .js extension manually!
import CustomerList from "./customer-list/customer-list.js";

let customerList = new CustomerList();

customerList
    .loadCustomers()
    .then(() => {
       let result = customerList.searchForName('Hans');
       console.log(result);
    });


console.log(liveUrl, devUrl);

let o1 = {
    a: 1,
    b: 2
};

let {a, b} = o1;
console.log(a, b);