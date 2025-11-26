import template from "./src/template.hbs"
import products from "./products.js";
import template from "./template.hbs";

const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("search");

render(products);

function render(data) {
    productsContainer.innerHTML = template(data);
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filtered = products.filter(prod =>
        prod.name.toLowerCase().includes(query)
    );

    render(filtered);
});
