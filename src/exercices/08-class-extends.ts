/*
    ===== Código de TypeScript =====
*/

class NormalPerson{

    constructor(
        public normalName:string,
        public address:number
    ){}
}

//class for instances , interface no get and set
class Hero extends NormalPerson{
    /* NOT ACONSEJABLE
    //private visible in the class
    alterEgo:string;
    //public visible for all
    edad:number;
    //static global access
    realname:number;
    //function when create instance of class-not aconsejable
    constructor(age:number){
        this.edad = age;        
    }*/

    //BEST-crea la propiedad tambien se puede opcional con ?
    constructor(
        public age:number,
        public name:string
    ){
        //se llama al constructor del la clase extendida y se envian los parametros
        super(name,23);

    }
}

const iroman = new Hero(22,'pepe');





console.log(iroman);
