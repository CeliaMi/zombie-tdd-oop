import { defaultActions } from "./helpers/defaultOptions";
import { Character } from "./Character";

export class Survivor extends Character{
    private wounds: number 
    private alive: boolean;
    private actions: string[];
    private equipment: string[];
    public permittedEquipment: number;
    
    constructor(name : string) {
        super(name) 
        this.wounds = 0;
        this.alive = true;
        this.actions = defaultActions;
        this.equipment = [];
        this.permittedEquipment = 5;
    }

    public getWounds() {
        return this.wounds;
    }

    public setWounds(wounds: number) {
         this.wounds = wounds;
    }

    public getAlive() {
        return this.alive;
    }

    public getActions() {
        return this.actions;
    }

    public getEquipment() {
        return this.equipment;
    }

    

    public injure(attack = 1) {
        this.wounds += attack;
        if (this.wounds >= 2) {
           this.alive = false;
        }
    }

    addEquipament(newEquipment : string ){
        if(this.equipment.length < this.permittedEquipment){
            this.equipment.push(newEquipment)
        } else {
            return (`The maximum number of pieces of equipment is ${this.permittedEquipment}`);
        }
    }
    
}
