const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log("You cannot add an empty string to a class");
    } else if (studentName.toLowerCase() === "queen") {
        class07Students.push(studentName);
    } else if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
    }else if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class");
    }
    
    else {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
  return class07Students.length;
}