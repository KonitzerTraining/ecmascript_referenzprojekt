window.customElements.define('news-article', class extends HTMLElement {
    constructor() {
        super();
        this.id = this.getAttribute('data-id');
        this.populate();
        /*   fetch('https://swapi.co/api/people/1')
               .then((response) => {
                   return response.json();
               })
               .then((data) => {
                   this.innerHTML = `

                   <h2>${data.name}</h2>
                   <p>Haarfarbe: ${data.hair_color}</p>


           `;
               });*/
    }

    async populate() {
        let response = await fetch(`https://swapi.co/api/people/${this.id}`);
        let data = await response.json();
        console.log(data);
        this.innerHTML = `
                <h2>${data.name}</h2>
                <p>Haarfarbe: ${data.hair_color}</p>    
                <ul>${this.films(data)}</ul>
        `;
    }

    films(data) {
        let html = '';
        data.films.forEach((film) => {
            html += `<li>${film}</li>`;
        });
        return html;
    }

});