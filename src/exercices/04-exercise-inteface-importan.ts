/*
    ===== Código de TypeScript =====
*/
//interface with object and fuction 
/*
interface SuperHero{
    name:string;
    age:number;
    address:{
        street:string,
        country:string,
        city:string
    },
    showAddress:()=>string;
}
*/

//se recomienda no anidar object 
//correcto

interface SuperHero{
    name:string;
    age:number;
    address: Address,
    showAddress:()=>string;
}

interface Address{
    street:string,
    country:string,
    city:string
}

//------------------------
const superHero:SuperHero = {
    name:'Spiderman',
    age:30,
    address:{
        street:'Main St',
        country:'USA',
        city:'NY'
    },
    showAddress(){
        return this.name+',' +this.address.city+', '+this.address.country;
    }    
}

const address = superHero.showAddress();

console.log(address);