//Polimorfismo: Las multiples formas que puede obtener un objeto al compartir una clase o interface
//Clases Abstractas: Clases que no se pueden instanciar y solo pueden ser implementadas mediante herencia, Solo una implementacion por clase y puede definir logica base
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Polimorfismo con clase Abstracta
var Person = /** @class */ (function () {
    function Person(_profession) {
        this.profession = _profession;
    }
    Person.prototype.work = function () {
    };
    return Person;
}());
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor() {
        return _super.call(this, 'Doctor') || this;
    }
    return Doctor;
}(Person));
var Mechanic = /** @class */ (function (_super) {
    __extends(Mechanic, _super);
    function Mechanic() {
        return _super.call(this, 'Mechanic') || this;
    }
    return Mechanic;
}(Person));
