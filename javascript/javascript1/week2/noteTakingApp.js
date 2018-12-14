/*Step:3
NOnoN0nOYes (Note taking app)
*/ 

//Save a note
let notes = [];
function addNotes( note, noteId, subject, week) {
    notes.push( {
        note: note,
        noteId: noteId,
        noteType: {
            subject: subject,
            week: week
        }
    } )
};

// function to Get a note
function getNoteFromId(id){
    for( let i=0; i<=id; i++){
        if( id === notes[i].noteId ){
            return notes[i];
        } else if( isNaN(id) ){
            console.log("Oops given Id is not a number") ;
        } else {
            return "Id doesn't exists";
        }
    }
};

//function to read all notes:
function showAllNotes(){
    for( let i=0; i<notes.length; i++){
        console.log("The note with id: " + notes[i].noteId + " has the following note text: " + notes[i].note);
    }
}
addNotes("good" , 1 , "JS", 2);
console.log(notes);
console.log(getNoteFromId("life"));
showAllNotes();

//Unique feature Part:
// function for displaying notes from specic week.
function showNotesByWeek(week){
    for( let i=0; i<notes.length; i++){
        if(week === notes[0].noteType.week){
            return  "notes for week: " + week + " are: " + notes[i].note;
        } else {
            return "Week doesn't exist."
        }
    }
}
// function for displaying notes from specic subject.
function showNotesBySubject(subject){
    let numberOfNotes = 0;
    for( let i=0; i<notes.length; i++){
        if(subject === notes[0].noteType.subject){
            numberOfNotes++; 
            return  "there are " + numberOfNotes + " notes for subject: " + subject + " which are: \n " + notes[i].note;
        } else {
            return "Subject doesn't exist."
        }
    }
}
console.log(showNotesByWeek(2));
console.log(showNotesBySubject("J"));