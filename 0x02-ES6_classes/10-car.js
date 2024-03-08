// 10-car.js
const cloneCarSymbol = Symbol('cloneCar'); // Add a description to the symbol

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Create a new Car object with the same attributes
    const newCar = new Car(this._brand, this._motor, this._color);
    // Assign the cloneCar method to the new object
    newCar[cloneCarSymbol] = this.cloneCar;
    return newCar;
  }
}
