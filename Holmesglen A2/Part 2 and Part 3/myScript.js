let initStudents = [
  {studentId:101, firstName: "John", lastName: "Robson", Qualification: "Ceritficate 4"},
  {studentId:120, firstName: "Jack", lastName: "Nicholson", Qualification: "Ceritficate 2"},
  {studentId:233, firstName: "Marlon", lastName: "Brando", Qualification: "Ceritficate 3"},
  {studentId:14, firstName: "Tom", lastName: "Hanks", Qualification: "Ceritficate 2"},
  {studentId:55, firstName: "Paul", lastName: "Newman", Qualification: "Bachelor"},
  {studentId:666, firstName: "Jack", lastName: "Lemmon", Qualification: "Ceritficate 4"},
  {studentId:187, firstName: "Michael", lastName: "Caine", Qualification: "Master"},
  {studentId:825, firstName: "James", lastName: "Stewart", Qualification: "Phd"},
  {studentId:910, firstName: "Pulp", lastName: "Fiction", Qualification: "Year 12"},
  {studentId:190, firstName: "Morgan", lastName: "Freeman", Qualification: "Diploma"}
];
console.log(initStudents)

const studentList = new StudentList("studentlist", initStudents);

function searchClick()
{
    let formElements = document.getElementById("form-list-control").elements;
    let text = formElements["search-integer"].value;
    studentList.search(text);

}

function ascendingClick()
{
    studentList.sortascending();
}

function refreshClick()
{
    studentList.refresh();
}


function submitClick()
{
    // associative array - using the name attribute of a form element
    let formElements = document.getElementById("add_student_form").elements;
    let studentId = formElements["studentId"].value;
    let firstName = formElements["firstName"].value;
    let lastName = formElements["lastName"].value;
    let Qualification = formElements["Qualification"].value;
    // add error checking here to make sure that the person has actually written something
    studentId = studentId.trim(); // strip away white space before and after words
    firstName = firstName.trim();
    lastName = lastName.trim();
    lastName = lastName.trim();
    if( studentId == "" )
    {
        document.getElementById("msgAdd").innerHTML = "You must enter a studentId!"

    }
    else if ( firstName == "" )
    {
        document.getElementById("msgAdd").innerHTML = "You must a firstName!";

    }
    else if ( lastName == "" )
    {
        document.getElementById("msgAdd").innerHTML = "You must a lastName!";

    }
    else if ( Qualification == "" )
    {
        document.getElementById("msgAdd").innerHTML = "You must a Qualification!";
    }
    else
    {
        studentList.submit(studentId, firstName, lastName, Qualification);
    }
}
