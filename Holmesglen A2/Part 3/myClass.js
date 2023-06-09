class student
{
  constructor(studentId, firstName,lastName, Qualification)
  {
    this.studentId = studentId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.Qualification = Qualification;
  }
}

class StudentList
{
    // displayId is element Idm students is an array
    constructor(displayId, students)
    {
        this.displayId = displayId;
        this.studentList = students;
        this.refresh();
    }

    search(searchId)
    {
        let shortList = [];
        var elementString = "";
        console.log(shortList)
        //for( let i = 0 , len = studentList.length ; i < len ; i++ )
       for( let student of this.studentList )
        {
            if( student.studentId.toString() === searchId.toString())
            {
                console.log("find the student: ", student.studentId)
                shortList.push(student);
                elementString = this.studentListString(shortList);
                break;
              }

        }
        if (elementString === "")
        {
           //elementString = "Not found student with this Id:" + searchId ;
           elementString ="0 result" ;
           console.log(elementString)
       }

        let displayElement = document.getElementById(this.displayId);
        displayElement.innerHTML = elementString;
    }


    sortascending()
    {
        this.studentList.sort(function (a, b) {  return (a.studentId - b.studentId); });

        this.refresh();
    }

    // refresh the list with the students
    refresh()
    {
        let elementString = this.studentListString(this.studentList);
        let displayElement = document.getElementById(this.displayId);
        displayElement.innerHTML = elementString;
        // alternative to above
       // document.getElementById(this.displayId).innerHTML = elementString;
    }

    studentListString(students)
    {
        let htmlStr = ``;   // make surethat you have back ticks  NOT ''
        for( let i = 0, len = students.length ; i < len ; i++ )
        {
            let student = students[i];
            htmlStr += this.studentItemString(student.studentId, student.firstName, student.lastName, student.Qualification);
        }
        return htmlStr;
    }

    studentItemString(studentId, firstName, lastName,Qualification)
    {
        return `<div class="row">${studentId}. ${firstName}.${lastName}.${Qualification}</div>`;

    }

    // add a new element onto the page
    submit(studentid,firstName,lastName,Qualification)
    {
        // add a new student objects to the array
        console.log(firstName)
        this.studentList.push({"studentId" : studentid, "firstName" : firstName, "lastName":lastName, "Qualification": Qualification });
        this.refresh();

    }
}
