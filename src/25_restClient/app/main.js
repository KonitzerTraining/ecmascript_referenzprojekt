
// Add .js extension manually!
import CustomerList from "./customer-list/customer-list.js";
let customerList = new CustomerList();

customerList
    .loadCustomers() // Promise
    .then(() => {
       let result = customerList.searchForName('Hans');
       console.log(result);
    });

