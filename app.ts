
//tipos de datos de typescript

export {};

let name :string = "Carlos";
let age : number = 22;
let animal : boolean = true;
let numberList : number[] = [1,2,3,4,5];
let nameList : string[] = ["Carlos","pedro","Jose"];
let cualquiera : any = "cualquiera";

function addNumbers ( a :number , b:number):number  {
    return a+b
}

let numero :number = addNumbers(12 , 20);
// console.log(numero)

function showSize(size:string):void{
    console.log('Your size is ' + size)
}

let size = showSize("M");

console.log(size)
