interface Payload {
    massKg: number;
}

class Astronaut implements Payload{
    massKg: number;
    name: string;

    constructor(massKg:number, name:string){
        this.massKg = massKg;
        this.name = name;
    }
}


