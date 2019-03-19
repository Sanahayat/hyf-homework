
class StudentBook {
    constructor(...students) {
        this.students = students;
    }

    //method that can return list is all HYF students
    getAllStudents() {
        return this.students;
    }

    //method that can return a filtered list of students by class name
    getStudentsByClass(searchClassId) {
        return this.students.filter(student => student.classId == searchClassId)
    }

    //method that can return one student's detailed information
    getInfoOfStudent(searchStudent) {
        let foundStudent = this.students.find(student => student.name.toLowerCase() === searchStudent.toLowerCase());
        if (foundStudent)
            return foundStudent;
        else
            return "Sorry! student not found!"
    }

    //method that can add a new student to HYF
    addNewStudent(newStudent) {
        if (this.students.find(student => student.name.toLowerCase() === newStudent.name.toLowerCase()))
            return "Failed: " + newStudent.name + " already exists in Student List!";
        else {
            this.students.push(newStudent);
            return newStudent.name + " added to the Student List!"
        }
    }

    //method that can edit existing student information
    editStudentInfo(updateStudentInfo) {
        let studentToBeEdited = this.students.find(student => student.name.toLowerCase() === updateStudentInfo.name.toLowerCase());
        
        studentToBeEdited.classId = updateStudentInfo.classId;
        studentToBeEdited.email = updateStudentInfo.email;
        studentToBeEdited.phone = updateStudentInfo.email;

        return "Student Information edited for: " + studentToBeEdited.name;
    }
}




module.exports = StudentBook;
