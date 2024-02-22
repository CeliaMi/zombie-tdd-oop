import { defaultActions } from "./helpers/defaultOptions";
export class Survivor {
    public name: string;
    public wounds: number 
    public alive: boolean;
    public actions: string[];
    
    constructor(name : string) {
        this.name = name;
        this.wounds = 0;
        this.alive = true;
        this.actions = defaultActions;
    }
    public injure(attack = 1) {
        this.wounds += attack;
        if (this.wounds >= 2) {
           this.alive = false;
        }
    }
}
