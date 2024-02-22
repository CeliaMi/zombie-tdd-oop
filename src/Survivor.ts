import { defaultActions } from "./helpers/defaultOptions";
import { Character } from "./Character";

export class Survivor extends Character{
    private wounds: number 
    private alive: boolean;
    private actions: string[];
    private equipment: string[];
    private static MAX_PERMITED_EQUIPMENT: number = 5;
    
    constructor(name : string) {
        super(name) 
        this.wounds = 0;
        this.alive = true;
        this.actions = defaultActions;
        this.equipment = [];
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
        if(this.equipment.length < Survivor.MAX_PERMITED_EQUIPMENT){
            this.equipment.push(newEquipment)
        } else {
            return (`The maximum number of pieces of equipment is ${Survivor.MAX_PERMITED_EQUIPMENT}`);
        }
    }

    public greet(): string {
        return `Hello, my name is ${this.name}, i'm a survivor.`;
    }
    
}
