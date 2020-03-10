class CustomerListComponent extends HTMLElement {
    constructor(props) {
        super(props);

        this.innerHTML = `
            <h2>Kundenliste</h2>
        `;

        this.addEventListener('click', function () {
            console.log('ok');
        });

        console.log(this.getAttribute('data-customers'));
    }

}
customElements.define('customer-list', CustomerListComponent);