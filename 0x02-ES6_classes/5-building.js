export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Sqft must be a number.');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new Error('Sqft must be a number.');
    }
    this._sqft = newSqft;
  }

  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage.');
  }
}

// Define Skyscraper class outside of Building
export class Skyscraper extends Building {
  static evacuationWarningMessage() {
    return 'Please evacuate the building immediately!';
  }
}
