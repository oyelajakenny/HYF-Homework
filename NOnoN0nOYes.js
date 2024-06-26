//Save a note

const notes = [];

function saveNote(content, id) {
  const note = {
    content: content,
    id: id,
  };
  notes.push(note);
}
saveNote("Pick up groceries", 2);
saveNote("Take a walk", 5);
console.log(notes);

//Get a note

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Id is not specified or not a number");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  console.log(`No note found with ${id}`);
}
//Log out notes

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  }
}
//delete a note
function deleteNote(id) {
  if (id === undefined || typeof id !== "number") {
    console.log("id is not specified or not a number");
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      notes.splice(i, 1);
      console.log(`Note with ${id} has been deleted`);
      return;
    }
  }
  console.log(`No note with ${id}`);
}
logOutNotesFormatted();
deleteNote(2);
logOutNotesFormatted();
