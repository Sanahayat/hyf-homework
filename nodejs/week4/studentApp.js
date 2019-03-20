//import { createServer } from "http";
/*eslint global-require: 0*/
/*eslint-env es6*/

const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const StudentBook = require('./studentBook.js');
const hyf_students = new StudentBook();

app.get('/', (req, res) => res.send('Welcome to HYF API'));

app.get('/getAllStudents', (req, res) => {
    console.log("---getting list of all HYF students---");
    res.statusCode = 201;
    res.end(JSON.stringify(hyf_students.getAllStudents()));
});

app.get('/getStudentsByClass', (req, res) => {
    console.log('user-query: ', req.query.id);
    if (req.query.class) {
        res.statusCode = 201;
        res.end(JSON.stringify(hyf_students.getStudentsByClass(req.query.class)));
    } else {
        res.status(404);
        res.send("OOps! Something went wrong! Check if you put class in query.");
    }
});

app.get('/getInfoOfStudent', (req, res) => {
    console.log("---getting one student's detailed information---");
    if (req.query.name) {
        res.statusCode = 201;
        res.end(JSON.stringify(hyf_students.getInfoOfStudent(req.query.name)));
    } else {
        res.status(404);
        res.send("OOps! Something went wrong! Check if you put name in query.");
    }
});

app.post('/addNewStudent', (req, res) => {
    console.log("---adding a new student to HYF---");

    if (req.body) {
        const newStudent = req.body;
        JSON.stringify(hyf_students.addNewStudent(newStudent));
        res.statusCode = 201;
        res.end("Student added suuccesfully!");
    } else {
        res.status(404);
        res.send("OOps! Something went wrong!");
    }
});

app.put('/editStudentInfo', (req, res) => {
    console.log("---edit existing student information---");

    if (req.body) {
        const newStudentInfo = req.body;
        JSON.stringify(hyf_students.editStudentInfo(newStudentInfo));
        res.statusCode = 201;
        res.end("Info edited successfully!");
    } else {
        res.status(404);
        res.send("OOps! Something went wrong!");
    }
});

app.listen(port, () => console.log(`Student app listening on port ${port}!`));

