function getFullName(firstname, lastname, useFormalName){
    if (useFormalName) {
       return "Lord" + " " + getFullName(firstname, lastname)  ;
   } else {
       return firstname + " " + lastname;
   }

}

const fullName1 = getFullName("Hussein", "Oyelaja");
const fullName2 = getFullName("Kenny", "Akorede");
console.log(fullName1);
console.log(fullName2);

// If the person is a woman, we are going to add Mrs as a paramter to the function then use boolean to check.