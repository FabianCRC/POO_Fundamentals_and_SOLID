//Polimorfismo: Las multiples formas que puede obtener un objeto al compartir una clase o interface
//Clases Abstractas: Clases que no se pueden instanciar y solo pueden ser implementadas mediante herencia, Solo una implementacion por clase y puede definir logica base


//Polimorfismo con clase Abstracta

abstract class Person {
    private profession: String;

    constructor(_profession: string) {
        this.profession = _profession;
    }

    work(): void {

    }
}

class Doctor extends Person {
    constructor() {
        super('Doctor');
    }
}

class Mechanic extends Person {
    constructor() {
        super('Mechanic');
    }
}