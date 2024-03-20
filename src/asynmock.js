export const getProducts = () => {
    return new Promise((resolve) => {

        setTimeout(() => {

            const products = [
                {
                    id: 1,
                    nombre: 'Mate Colon',
                    descripcion: "",
                    precio: 10,
                    categoria:'mate',
                    imageUrl: '../src/assets/img/mates/mate1.jpg',
                },

                {
                    id: 1,
                    nombre: 'Mate Skull',
                    descripcion: "mate Calavera",
                    precio: 10,
                    categoria:'mate',
                    imageUrl: '../src/assets/img/mates/mate2.jpg',
                },

                {
                    id: 1,
                    nombre: 'Muñeco Messi',
                    descripcion: "El Messias",
                    precio: 10,
                    categoria:'Muñeco',
                    imageUrl: '../src/assets/img/muñecos/muñe1.jpg',
                },

                {
                    id: 1,
                    nombre: 'Muñeco Nezuko',
                    descripcion: "Nezuko",
                    precio: 10,
                    categoria:'Muñeco',
                    imageUrl: '../src/assets/img/muñecos/muñe2.jpg',
                },

                {
                    id: 1,
                    nombre: 'Soporte Sheng-Long',
                    descripcion: "Dragon ball",
                    precio: 10,
                    categoria: 'Soportes',
                    imageUrl: '../src/assets/img/soportes/sopor2.jpg',
                },

                {
                    id: 1,
                    nombre: 'Soporte Hachas GoW',
                    descripcion: "Hachas God Of War",
                    precio: 10,
                    categoria:'soportes',
                    imageUrl: '../src/assets/img/soportes/sopor3.jpg',
                },

            ];

            resolve(products);
        }, 2000);
    });
};






