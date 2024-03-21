# Principios OOP

Dentro de esta Kata podrás encontrar los 4 principios de programación Orientada a Objetos

la OOP responde a un Paradigma de programación, es decir, una manera de programar. Podemos encontrar diferentes paradigmas dentro del mundo de la programación y estan muy ligados al tipo de lenguaje que estes utilizando

En este caso JavaScript es un lenguaje multiparadigma.
con él podrás programar tanto con paradigma funcional como con paradigma orientado a objetos.Pero no nos andemos por las ramas...

## ¿Qué es la OOP?
La programación orientada a objetos se basa en la organización de nuestro código a través de objetos, toda la funcionalidad de nuestro código se va a encontrar guardada y estructurada en forma de objetos

Para ello utilizaremos las clases,“una plantilla” para crear objetos que comparten la misa estructura. En el caso de Js aparecen con ES6, son una adaptación al modelo de herencias de prototipos, en realidad Js por detrás está trabajando con prototipos pero para asemejarse más a otros lenguajes de programación añadió la palabra reservada class

Yo personalmente opino que Js no es el mejor lenguaje para este tipo de programación, ya que la mayoría de su desarrollo es con paradigma funcional, pero cómo es el lenguaje con el que más cómoda me siento lo voy aplicar en esta Kata y así conocer todas las cosas de Js que no suelo utilizar, en mi caso he decidido hacerlo con TypeScript para disponer de todas esas cosas de las que Js anda un poco "cojo"🙃

Bien ahora vamos a encontar los principios en los que se basa la OOP dentro del código de este repositorio


## 1 Abstracción

La abstracción en OOP es el proceso por el cual conseguimos definir un tipo ( una clase) en el contexto que necesitamos, para poder hacer la abstracción hay que hacer lo que se conoce como el dominio "La Lógica del negocio" Encontrarás más acerca de este proceso que llevará después a la definición de mis clases en este archivo 👉[Dominio-process](./Dominio_process.md)

## 2 Herencia
La herencia se refiere a la capacidad de una clase de heredar atributos y comportamientos de otra clase.
En este caso tenemos una clase superior Character que hereda "extiende" a las inferiores Zombie y Survivor, en este caso solo tiene un atributo, pero es extensible al resto de cosas que tengan en común

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
## 3 Encapsulamiento
 Se produce cuando limitamos el acceso o damos un acceso restringido de una propiedad. Tenemos que pensar en ello como un mecanismo que nos permite disponer datos y métodos dentro de una estructura ocultando la implementación del objeto, es decir, impidiendo el acceso a los datos por cualquier medio que no sean los servicios propuestos.

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

También encontrarás encapsulamiento con la palabra reservada static 

```JavaScript
    private static MAX_PERMITED_EQUIPMENT: number = 5;
    
```

## 4 Polimorfismo
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
