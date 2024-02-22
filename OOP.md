# Principios OOP

Dentro de esta Kata podrás encontrar los 4 principios de programación Orientada a Objetos


## 1 Abstracción

En el planteamiento de las clases, estamos abstrayendo la idea de negocio o también llamado dominio, tenemos una clase personaje que deriva en dos Zombies y Supervivientes.

## Herencia
Tenemos una clase superior Character que hereda " extiende" a las inferiores Zombie y Survivor, en este caso solo tiene un atributo, pero es extensible al resto de cosas que tengan en común

``` Bash
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

``` Bash
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

