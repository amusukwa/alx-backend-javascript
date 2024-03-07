export default class Currency {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error('Invalid input types. Name and code must be strings.');
    }

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string.');
    }
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new Error('Code must be a string.');
    }
    this._code = newCode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
