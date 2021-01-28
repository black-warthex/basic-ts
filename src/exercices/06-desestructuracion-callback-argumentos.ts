/*
    ===== Código de TypeScript =====
*/
//desestructuracion de argumentos
 export interface Product {
    desc:string;
    price:number;
}

const telefono:Product ={
    desc:'Samsung J5',
    price:500000
}

const ipad:Product ={
    desc:'Ipad Mini',
    price:1000
}

//calcular

export function calcular(productos:Product[]):[number,number]{

    let total =0;
    /* normal
    productos.forEach((producto:Product)=>{
        total+=producto.price;
    });*/

    //mejor
    productos.forEach(({price}:Product)=>{
        total+=price;
    });

    return [total,total * 0.15];
}

const productos:Product[] = [telefono,ipad];

//const isv = calcular(productos);
//console.log('el producto con inpuesto es: ',isv);

//destructurado

const [total,isv] = calcular(productos);
console.log('el precio es:', total);
console.log('el producto con inpuesto es: ',isv);
