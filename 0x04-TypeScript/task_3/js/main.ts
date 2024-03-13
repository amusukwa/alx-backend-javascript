/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
// Import all functions from crud.js as CRUD
import * as CRUD from './js/crud.js';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)\n// Insert row ${newRowID}`);

// Update the row with age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(${newRowID}, updatedRow);\n// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID});\n// Delete row id ${newRowID}`);

