//Abstraccioó: Declarar clases para implementar la funcionalidad y reutilizar code.
//Encapsulamiento: Limitacion de acceso a las propiedades de la clase mediante modificadores de acceso y metodos get y set
var SmartPhone = /** @class */ (function () {
    function SmartPhone(brand, color, battery) {
        this.color = color;
        this.brand = brand;
        this.battery = battery;
    }
    SmartPhone.prototype.makeCall = function () {
        if (this.battery <= 0) {
            throw 'Battery Empty';
        }
        this.battery -= 10;
        console.log('Calling');
    };
    SmartPhone.prototype.getBattery = function () {
        return this.battery;
    };
    return SmartPhone;
}());
var phone = new SmartPhone('Iphone', 'White', 100);
for (var index = 0; index < 12; index++) {
    phone.makeCall();
}
