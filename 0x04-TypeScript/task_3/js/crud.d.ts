import { RowID, RowElement } from './interface';

// Declare the types for CRUD functions
declare module CRUD {
    function insertRow(row: RowElement): RowID;
    function deleteRow(rowId: RowID): void;
    function updateRow(rowId: RowID, row: RowElement): RowID;
}
