// console.log('atributos' )

export{};

class House{
    private windows : string; //tan solo se puede usar dentro de esta clase 
    protected price : number; //se puede usar en otra clase que la extienda
    public color : string;

    storeData(house:House):void{
        this.windows = "5";
        this.price  = 200.000;
        this.color = 'red';

        house.windows="3";
        house.price=123.000;
        house.color="yellow"
    }
}

class Chalet extends House{
    getData(house:House , chalet:Chalet){
        this.color="blue";
        this.price = 100.000
    }
}