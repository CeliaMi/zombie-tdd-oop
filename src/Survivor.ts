export class Survivor {
    public name: string;
    public wounds: number 
    public alive: boolean;
    
    constructor(name : string) {
        this.name = name;
        this.wounds = 0;
        this.alive = true;
    }
    injure(attack = 1) {
        this.wounds += attack;
        if (this.wounds >= 2) {
           this.alive = false;
        }
    }
}
