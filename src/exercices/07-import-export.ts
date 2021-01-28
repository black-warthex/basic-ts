import { calcular, Product } from './06-desestructuracion-callback-argumentos';
/*
    ===== Código de TypeScript =====
*/

const carritCompras: Product[] =[
    {
        price:5,
        desc:'Tel 1'
    },
    {
        price:10,
        desc:'tel 2'
    }
];

const [total,isv] = calcular(carritCompras);

console.log('total :',total);
console.log('isv :',isv);
