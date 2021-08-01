//Polimorfismo: Las multiples formas que puede obtener un objeto al compartir una clase o interface
//Interface: Es un contrato que obliga a la clase que la implementa a implementar sus metodos y atributos, implementaciones ilimitadas en una clase y no puede definir logica
var Plumber = /** @class */ (function () {
    function Plumber() {
    }
    Plumber.prototype.goWork = function () {
        throw new Error("Method not implemented.");
    };
    return Plumber;
}());
var Teacher = /** @class */ (function () {
    function Teacher(_phoneNumber) {
        this.phoneNumber = _phoneNumber;
    }
    Teacher.prototype.goLunch = function () {
        throw new Error("Method not implemented.");
    };
    Teacher.prototype.goWork = function () {
        throw new Error("Method not implemented.");
    };
    return Teacher;
}());
function showProfession(person) {
    console.log(person.profession);
}
var plumber = new Plumber();
var teacher = new Teacher('88888888');
showProfession(plumber);
showProfession(teacher);
