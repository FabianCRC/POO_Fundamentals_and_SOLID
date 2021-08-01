//Abstracción: Declarar clases para implementar la funcionalidad y reutilizar code.
//Encapsulamiento: Limitacion de acceso a las propiedades de la clase mediante modificadores de acceso y metodos get y set
//Herencia: Es la capacidad de heredar caracteristicas de otra clase(base)

//Abstracción, Encapsulamiento y Herencia
class MobileDevice {
    private brand: string;
    private color: string;
    protected battery: number;

    constructor(_brand: string, _color: string, _battery: number) {
        this.color = _color;
        this.brand = _brand;
        this.battery = _battery;
    }

    public sendMessage(): void {
        if (this.battery <= 0) {
            throw 'Battery Empty';
        }
        this.battery -= 10;
        console.log('Sending');
    }

    public getBattery(): number {
        return this.battery;
    }

    public chargeBattery(): void {
        this.battery = 100;
    }
}

class SmartPhone extends MobileDevice {

    private OS: string;
    constructor(_OS: string, _brand: string, _color: string, _battery: number) {
        super(_brand, _color, _battery);
        this.OS = _OS;
    }

    getOS(): string {
        return this.OS;
    }

    makeCall(): void {
        if (this.battery <= 0) {
            throw 'Battery Empty';
        }
        this.battery -= 10;
    }
}

class Laptop extends MobileDevice {

    private Keyboard: string;
    constructor(_Keyboard: string, _brand: string, _color: string, _battery: number) {
        super(_brand, _color, _battery);
        this.Keyboard = _Keyboard;
    }

    getKeyboard(): string {
        return this.Keyboard;
    }
}

let simplePhone = new MobileDevice('Iphone', 'White', 100);
let advancePhone = new SmartPhone('Android', 'Motorola', 'Red', 90);
let laptop = new Laptop('QWERTY', 'ASUS', 'Black', 60);

