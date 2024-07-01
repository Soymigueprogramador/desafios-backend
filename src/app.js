class ProductManager {
    static id = 0;

    constructor() {
        this.products = [];
    }
    
    addProducts( title, description, price, img, code, stock ) {
        
        if ( !title || !description || !price || !img || !code || !stock ) {
            return console.log('Para crear un nuevo producto tienen que estar todos los campos completos');
        }
        if ( this.products.some( item => item.code === code ) ) {
            console.log('El codigo tiene que ser unico para cada producto')
            return;
        }
        const nuevoProducto = {
            id: ProductManager.id ++,
            title,
            description,
            price,
            img,
            code,
            stock
        }
        this.products.push( nuevoProducto );
    }
    getProducts() {
        return this.products;
    }
    getProductsById(id) {
        const producto = this.products.find( item => item.id === id );
        if ( !producto ) {
            return console.log('No existe el producto con ese id');
        }
        return producto;
    }
};

const manager = new ProductManager(); 

console.log(manager.getProducts());

manager.addProducts('Llavero', 'Este es un llavero impreso en 3D', 400, 'Sin imagen', 'abs1', 10,)
manager.addProducts('Tasa', 'Esta es una tasa impresa en 3D', 100, 'Sin imagen', 'abs2', 10,)
manager.addProducts('Planto', 'Este es un plato impreso en 3D', 100, 'Sin imagen', 'abs3', 10,)

console.log('Buscamos los productos por ID')
console.log(manager.getProductsById(3));