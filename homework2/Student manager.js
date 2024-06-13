const class07Students = [];
function addStudentToClass(studentName) {
    if (!studentName)  {
        console.log("Cannot add an empty string");
    }
    if (class07Students.length >= 6) {
        if (studentName === "Queen") {
          class07Students.push(studentName);
        } else {
          console.log("Cannot add more students to class 07");
        }
    }
    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
        return;
      }
      class07Students.push(studentName);    
}
function getNumberOfStudents() {
    return class07Students.length;
}