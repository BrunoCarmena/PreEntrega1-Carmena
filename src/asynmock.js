export const getProducts = () => {
    return new Promise((resolve) => {

        setTimeout(() => {

            const products = [
                {
                    id: 1,
                    nombre: 'Product 1',
                    descripcion: "mate Colon",
                    precio: 10,
                    imageUrl: '../src/assets/img/mates/mate1.jpg',
                },

                {
                    id: 1,
                    nombre: 'Product 1',
                    descripcion: "mate Colon",
                    precio: 10,
                    imageUrl: '../src/assets/img/mates/mate1.jpg',
                },

                {
                    id: 1,
                    nombre: 'Product 1',
                    descripcion: "mate Colon",
                    precio: 10,
                    imageUrl: '../src/assets/img/mates/mate1.jpg',
                },

                {
                    id: 1,
                    nombre: 'Product 1',
                    descripcion: "mate Colon",
                    precio: 10,
                    imageUrl: '../src/assets/img/mates/mate1.jpg',
                },

                {
                    id: 1,
                    nombre: 'Product 1',
                    descripcion: "mate Colon",
                    precio: 10,
                    categoria: 'mate',
                    imageUrl: '../src/assets/img/mates/mate1.jpg',
                },

                {
                    id: 1,
                    nombre: 'Product 1',
                    descripcion: "mate Colon",
                    precio: 10,
                    imageUrl: '../src/assets/img/mates/mate1.jpg',
                },

            ];

            resolve(products);
        }, 2000);
    });
};






