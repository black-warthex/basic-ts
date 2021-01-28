/*
    ===== Código de TypeScript =====
*/


function sumar(a: number, b: number): number {
    //return (a+b).toString();
    return a + b;
}

const sumarFecha = (a: number, b: number): number => { return a + b };

//argumentos opcionales-primero obligatorios por ultimo opcional
function multiplicar(numero: number, other?: number, base: number = 2): number {
    return numero * base;
}

interface PersonajeLOR{

    name:string;
    pv:number;
    mostrar:()=>void;

}

function curar(personaje:PersonajeLOR,curarX:number):void{

    personaje.pv += curarX;
    //return undefined;
    console.log(personaje);
}
// se aconseja const para ser mas ligero
const newPersonaje:PersonajeLOR ={
    name:'pepe',
    pv:10,
    mostrar(){
        console.log('puntos de vida: ',this.pv);
    }
}

curar(newPersonaje,20);




