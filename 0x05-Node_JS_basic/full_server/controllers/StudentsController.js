import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.dbFile);
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      res.status(200).send(`This is the list of our students\n${
        fields.map((field) => `Number of students in ${field.toUpperCase()}: ${students[field].length}. List: ${students[field].join(', ')}`).join('\n')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(req.dbFile);
      const studentsInMajor = students[major] || [];

      res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }

    // Explicitly return undefined at the end
    return undefined;
  }
}

export default StudentsController;
