import { printProducts } from "./ui.js";

const baseURL = 'https://e-commerce-api-academlo.herokuapp.com/api';
let editingID = null;

// Caturar los productos que reposan en la API
function getProducts () {
    axios.get(`${baseURL}/products`)
        .then(function (response){
            const products = response.data;
            printProducts(products);
        })
        .catch(function(error){
            console.log(error)
        })
};

// Crear un nuevo producto
function createProduct (){
    const newProduct = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image').value
    };

    axios.post(`${baseURL}/products`, newProduct)
    .then(function (response){
        console.log(response);
        alert('Se creo un nuevo producto');
        getProducts ();
    })
    .catch(function(response){
        alert('No se pudo crear el producto');
    });

    // createProduct.reset();
};

// Editar productos
function editProduct (id) {
    axios.get(`${baseURL}/products/${id}`)
        .then(function (response) {
            editingID = id;
            const products = response.data;
            document.getElementById ('name').value = products.name;
            document.getElementById ('price').value = products.price;
            document.getElementById ('image').value = products.image;
        })
        .catch(function(error){
            alert('No se pudo cargar la tarea')
        })
};

function updateProduct () {
    const confirmation = confirm('¿Seguro que desea modificar el producto?');
    if(!confirmation){
        return
    };
    const productEdited = {
        name: document.getElementById ('name').value,
        price: document.getElementById ('price').value,
        image: document.getElementById ('image').value,
    }

    axios.put(`${baseURL}/products/${editingID}`, productEdited)
        .then(function(response) {
            alert('Producto editado correctamente');
            getProducts();
        })
        .catch(function(error){
            alert('No fue posible editar el producto')
        })
};

// Eliminar productos
function deleteProduct(id){
    const confirmation = confirm('¿Seguro que desea eliminar el producto?');
    if(!confirmation){
        return
    };
    axios.delete(`${baseURL}/products/${id}`)
        .then(function (){
            alert('El producto fue eliminado de manera exitosa');
            getProducts();
        })
        .catch(function(error){
            alert('No es posible eliminar el producto')
        })
};

export { getProducts, createProduct, editProduct, updateProduct, deleteProduct }