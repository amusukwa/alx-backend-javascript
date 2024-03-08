import listOfStudents from "./9-hoisting";

console.log(listOfStudents);

const listPrinted = Array.isArray(listOfStudents) ? listOfStudents.map(
    student => student.fullStudentDescription
) : [];

console.log(listPrinted);
