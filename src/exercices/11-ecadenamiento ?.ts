/*
    ===== Código de TypeScript =====
*/
//Encadenamiento ? -> opcional

interface Pasajero{
    name:string;
    hijos?:string[];
}

const pasajero1:Pasajero ={
    name:'pepe'
}

const pasajero2:Pasajero={
    name:'Yonathan',
    hijos:['oriana']
    
}

function imprimeHijso (pasajero:Pasajero):void{
    //error
    //const countChildre = pasajero.hijos.length; -> si es undefine definimos 0
    const countChildre = pasajero.hijos?.length || 0;
    console.log('hijos : ',countChildre);
}   

imprimeHijso(pasajero1);