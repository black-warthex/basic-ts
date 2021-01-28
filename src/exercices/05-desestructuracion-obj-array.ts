/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;

}


interface Detalles{
    autor:string;
    anio:number;
}


const reproductor: Reproductor = {

    volumen:90,
    segundo:36,
    cancion:'Mess',
    detalles:{
        anio:1999,
        autor:'Ed sheeran'
    }

}
// desestructuracion OBJETOS
//desestructuracion no aconsejable
/*
console.log('EL volumen actual es: ',reproductor.volumen);
console.log('EL segundo actual es: ',reproductor.segundo);
console.log('La cancion actual es: ',reproductor.cancion);
console.log('EL autor es: ',reproductor.detalles.autor);
*/
//definir propiedades dentro de llaves-recomendado para object
const {volumen,segundo,cancion,detalles} = reproductor;
console.log('EL autor es: ',detalles.autor);
//desestructurar el objecto anidado
const{autor} = detalles;
console.log('EL autor es: ',autor);

//second option medium recomended  tambien se puede con cualquiera  {volumen:vol}
//const {volumen,segundo,cancion,detalles:{autor}} = reproductor; -detalles traeria al autor
/*
genera error por tener dos autor se renombra : renombre
const autor = 'other';
const {volumen,segundo,cancion,detalles:{autor:autorDetalle}} = reproductor; 

*/

console.log('EL volumen actual es: ',volumen);
console.log('EL segundo actual es: ',segundo);
console.log('La cancion actual es: ',cancion);

// desestructuracion ARREGLOS

const dbz:string[] = ['goku','vegetta','Trunks'];

console.log('personaje 1: ',dbz[0]);
console.log('personaje 2: ',dbz[1]);
console.log('personaje 3: ',dbz[2]);
//mostrar personajes
//const[ p1,p2,p3 ] = dbz; extraer todas las posiciones 
//mostrar solo 3er personaj - extraer solo 1 posicion
const [,,p3] = dbz;

console.log('personaje 3: ',p3);




