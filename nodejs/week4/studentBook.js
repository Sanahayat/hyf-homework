
class StudentBook {
    constructor() {
        this.students = [
            {
                "name": "Hakki",
                "classId":"08" ,
                "email": "adahbour54@gmail.com",
                "phone": "(263) 972-6043"
            },
            {
                "name": "Keerthika devi Alampalli",
                "classId": "08",
                "email": "keerthi1822@gmail.com",
                "phone": "(745) 285-6338"
            },
            {
                "name": "Rieko",
                "classId": "08",
                "email": "adahbour54@gmail.com",
                "phone": "(971) 436-6442"
            },
            {
                "name": "Sheila Qasemi",
                "classId": "08",
                "email": "sheilaqasemi2018@gmail.com",
                "phone": "(457) 527-9154"
            },
            {
                "name": "Virgeen",
                "classId": "08",
                "email": "virginrashed4@gmail.com",
                "phone": "(259) 245-5777"
            },
            {
                "name": "Abod",
                "classId": "08",
                "email": "a-hassam@outlook.com",
                "phone": "(939) 553-4886"
            },
            {
                "name": "afshin",
                "classId": "08",
                "email": "afshin_rommel@yahoo.com",
                "phone": "(548) 420-7322"
            },
            {
                "name": "Gordon Fields",
                "classId": "07",
                "email": "wogzijpeg@jusvijsut.lb",
                "phone": "(970) 482-1032"
            },
            {
                "name": "Mitchell Byrd",
                "classId": "07",
                "email": "mucipok@dul.dz",
                "phone": "(480) 835-5405"
            },
            {
                "name": "Agnes Barton",
                "classId": "07",
                "email": "udirulu@kimvuzev.mp",
                "phone": "(781) 210-4210"
            },
            {
                "name": "Viola Newman",
                "classId": "07",
                "email": "zos@owgi.cr",
                "phone": "(857) 583-3775"
            },
            {
                "name": "Charles Norman",
                "classId": "07",
                "email": "lujfi@dodu.lr",
                "phone": "(380) 305-4996"
            },
            {
                "name": "Billy Perry",
                "classId": "06",
                "email": "bud@mauj.pl",
                "phone": "(236) 304-9435"
            },
            {
                "name": "Lou Wilkerson",
                "classId": "06",
                "email": "isade@wonsup.br",
                "phone": "(503) 932-2128"
            },
            {
                "name": "Bobby Weaver",
                "classId": "06",
                "email": "otulean@wole.su",
                "phone": "(482) 478-5946"
            },
            {
                "name": "Carlos Phelps",
                "classId": "06",
                "email": "de@mononpin.sj",
                "phone": "(945) 779-2726"
            },
            {
                "name": "Alfred Washington",
                "classId": "09",
                "email": "kakdat@pih.gb",
                "phone": "(746) 843-2346"
            },
            {
                "name": "Teresa Fitzgerald",
                "classId": "09",
                "email": "vopugaw@gasudnod.cr",
                "phone": "(288) 240-2845"
            },
            {
                "name": "Wayne Long",
                "classId": "09",
                "email": "rasvalif@piuwezu.gi",
                "phone": "(833) 911-1457"
            },
            {
                "name": "Luella Hammond",
                "classId": "09",
                "email": "nimhi@kagukvaj.bn",
                "phone": "(455) 680-1114"
            }
        ];
    }

    //method that can return list is all HYF students
    getAllStudents() {
        return this.students;
    }

    //method that can return a filtered list of students by class name
    getStudentsByClass(searchClassId) {
        return this.students.filter(student => student.classId == searchClassId);
    }

    //method that can return one student's detailed information
    getInfoOfStudent(searchStudent) {
        let foundStudent = this.students.find(student => student.name.toLowerCase() === searchStudent.toLowerCase());
        if (foundStudent)
            return foundStudent;
        else
            return "Sorry! student not found!";
    }

    //method that can add a new student to HYF
    addNewStudent(newStudent) {
        if (this.students.find(student => student.name.toLowerCase() === newStudent.name.toLowerCase()))
            return "Failed: " + newStudent.name + " already exists in Student List!";
        else {
            this.students.push(newStudent);
            return newStudent.name + " added to the Student List!";
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
