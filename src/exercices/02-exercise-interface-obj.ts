/*
    ===== Código de TypeScript =====
*/
//multiples valores array
//let habilidades:(boolean | string | number)[] = [];
let habilidades:string[] = [];
habilidades.push('hola');

//interface

interface Personaje{
    nombre:string;
    hp:number;
    habilities:string[];
    //opcional
    puebloNatal?:string;
}


//object
const personaje:Personaje = {
    nombre:'Strider',
    hp:100,
    habilities: ['Bash','counter']
}

personaje.puebloNatal='funza';

console.table(personaje);



