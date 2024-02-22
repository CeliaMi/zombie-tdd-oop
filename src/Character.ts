export abstract class Character{
     name: string;
    constructor(name : string) {
        this.name = name;
    }
    public abstract  greet(): string;

    
}