// console.log('clasesInterfaces')

export{}

/* interface Person{
    name: string;
    age: number;
}

let Carlos : Person = { name:"Carlos" ,age:33 };

console.log(Carlos) */

/* class Jugador

{
    nombre:string;
    edad:number;

    constructor(nombre:string , edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    getName():string{
        return this.nombre
    }
}

let jugador = new Jugador('carlos',22);
let jugador2 = new Jugador('Fernando',32);

console.log(jugador,jugador2); */


//vamos a combinar clases con interfaces

/* interface PlayerInterface{
    name:string;
    skills: string;
    retired : boolean;
}

class Player implements PlayerInterface{
    name:string;
    skills:string;
    retired: boolean;


    constructor(name : string ,skills: string , retired: boolean){
        this.name = name;
        this.skills = skills;
        this.retired = retired;
    }
}

let jugador = new Player("Carlos","awsome skills",false);
console.log(jugador) */


//vamos a extender propiedades en nuestras clases
/* class Player{
    age: number;
    retired : boolean;

    constructor(age:number , retired:boolean){
        this.age = age;
        this.retired = retired
    }
}

class SoccerMembers extends Player{
    name : string;

    constructor(age:number , name : string , retired:boolean= true){
        super(age , retired);
        this.name = name;
        this.retired = retired
    }
}

let myPlayer = new SoccerMembers(23, "Rodrigo" , true);
let myPlayer2 = new SoccerMembers(23, "Rodrigo" , false);
console.log(myPlayer , myPlayer2); */


//vamos a extender propiedades en las clases

/* interface Player{
    name : string ;
    retired : boolean;
}

interface Member extends Player{
    age: 23;
}

let myPlayer : Member={
    name:"Carlos",
    retired: false,
    age: 23
}

console.log(myPlayer) */

