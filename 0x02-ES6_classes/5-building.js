export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate abstract class Building.');
    }
    if (typeof sqft !== 'number') {
      throw new Error('Square footage must be a number.');
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
}
if (require.main === module) {
  const b = new Building(100);
  console.log(b);

  class TestBuilding extends Building {
    evacuationWarningMessage() //eslint-disable-line class-methods-use-this
	  {
      console.log('Custom evacuation warning message.');
    }
  }

  function createTestBuilding() {
    try {
      new TestBuilding(200);
    } catch (err) {
      console.log('Class extending Building must override evacuationWarningMessage.');
    }
  }

  createTestBuilding();
}
