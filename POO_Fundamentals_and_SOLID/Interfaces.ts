//Polimorfismo: Las multiples formas que puede obtener un objeto al compartir una clase o interface
//Interface: Es un contrato que obliga a la clase que la implementa a implementar sus metodos y atributos, implementaciones ilimitadas en una clase y no puede definir logica

//Polimorfismo con Interface

interface IPerson {
    profession: String;
    goWork();
}

interface IExtraInformation {
    phoneNumber: String;
    goLunch();
}


class Plumber implements IPerson {

    profession: String;
    constructor() {
    }

    goWork() {
        throw new Error("Method not implemented.");
    }
}

class Teacher implements IPerson, IExtraInformation {

    phoneNumber: String;
    profession: String;
    constructor(_phoneNumber: string) {
        this.phoneNumber = _phoneNumber;
    }

    goLunch() {
        throw new Error("Method not implemented.");
    }

    goWork() {
        throw new Error("Method not implemented.");
    }
}

function showProfession(person: IPerson) {
    console.log(person.profession);
}

let plumber = new Plumber();
let teacher = new Teacher('88888888');

showProfession(plumber);
showProfession(teacher);