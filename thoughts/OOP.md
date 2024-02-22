# Principios OOP

Dentro de esta Kata podrás encontrar los 4 principios de programación Orientada a Objetos


## 1 Abstracción

La abstracción en OOP es el proceso por el cual conseguimos definir un tipo ( una clase) en el contexto que necesitamos, para poder hacer la abstracción hay que hacer lo que se conoce como el dominio "La Lógica del negocio" Encontrarás más acerca de este proceso que llevará después a la definición de mis clases en este archivo

## Herencia
Tenemos una clase superior Character que hereda "extiende" a las inferiores Zombie y Survivor, en este caso solo tiene un atributo, pero es extensible al resto de cosas que tengan en común

``` JavaScript
 abstract class Character {
     name: string;
    constructor(name : string) {
        this.name = name;
    }   
}

 class Survivor extends Character {
    constructor(name : string) {
        super(name) }
 }


```
## Encapsulamiento

Podemos encontrar el encapsulamiento en los atributos privados de la clase survivor que podemos acceder a ellos solo a partir de sus métodos get y set 

``` JavaScript
 class Survivor extends Character{
    private wounds: number 
    constructor() {
        this.wounds = 0;
    }

        public getWounds() {
        return this.wounds;
    }

    public setWounds(wounds: number) {
         this.wounds = wounds;
    }

    }


```

## Poliformismo
Este principio lo vemos aplicado en este proyecto a través de polimorfismo por herencia, la misma función tendrá compartamientos diferentes dependiendo de su clase



``` JavaScript

abstract class Character{

     public abstract  greet(): string;
 
}

class Survivor extends Character{
    public greet(): string {
        return `Hello, my name is ${this.name}, i'm a survivor.`;
    }
}



```