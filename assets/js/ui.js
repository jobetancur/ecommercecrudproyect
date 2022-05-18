function printProducts(products) {
    // Identificar el contenedor
    const container = document.getElementById('products-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < products.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="card-body">
                            <div>
                                <img src="${products[i].image}" alt="image" height="250" width="100%" >
                            </div>
                            <h5 class="card-title">${products[i].name}</h5>
                            <p class="card-text">${products[i].price}</p>
                            <div class="text-end">
                                <button class="btn btn-danger" onclick="deleteProduct(${products[i].id})">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-warning" onclick="editProduct(${products[i].id})">
                                    <i class="fas fa-pen"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}

export { printProducts }