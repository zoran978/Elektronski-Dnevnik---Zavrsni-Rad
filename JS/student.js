let name = $('#name').val()
let lastName = $('#lastname').val()
let birthdayx = $('#birthday').val()
let gmail = $('#email').val()
let social = $('#jmbg').val()

let namereg = /^[a-z\s]*$/i
let lastnamereg = /^[a-z\s]*$/i
let birthdayreg = /^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\,\<\.\>\/\?\;\:\'\"\[\]\{\}]+$/i
let mailreg = /^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\,\<\.\>\/\?\;\:\'\"\[\]\{\}]+$/i
let jmbgreg = /^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\,\<\.\>\/\?\;\:\'\"\[\]\{\}]+$/i

let students = new Array;


function studentinfo() {
    $('#myNav').css('width', '0%')
    $('#mainsection').empty()
    $('#mainsection').append(`<div id="studentform" class"studentinf">
        <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Last Name</label>
          <input type="text" class="form-control" id="lastname" placeholder="Last Name">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Year of Birth</label>
          <input type="text" class="form-control" id="birthday" placeholder="Year of Birth">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">JMBG</label>
          <input type="text" class="form-control" id="jmbg" placeholder="JMBG">
        </div>
        </form>
        <button type="button" value="Submit" id="addstudent" class="btn btn-warning">Submit</button>
        </div>`)
}

function Student(name, lastname, birthdate, mail, jmbgnum) {
    this.name = name
    this.lastname = lastname
    this.birthdate = birthdate
    this.mail = mail
    this.jmbgnum = jmbgnum
}

$(document).on('click', "#addstudent", function () {
    let name2 = $('#name').val()
    let lastName2 = $('#lastname').val()
    let birthdayx2 = $('#birthday').val()
    let gmail2 = $('#email').val()
    let social2 = $('#jmbg').val()

    let testnam = namereg.test(name2)
    let testlname = lastnamereg.test(lastName2)
    let testbirthd = birthdayreg.test(birthdayx2)
    let testmail = mailreg.test(gmail2)
    let testsoc = jmbgreg.test(social2)

    if (testnam == false) {
        $('#name').css('border', '1px solid red')
    }
    else {
        $('#name').css('border', '1px solid green')
    }

    if (testlname == false) {
        $('#lastname').css('border', '1px solid red')
    }
    else {
        $('#lastname').css('border', '1px solid green')
    }

    if (testbirthd == false) {
        $('#birthday').css('border', '1px solid red')
    }
    else {
        $('#birthday').css('border', '1px solid green')
    }

    if (testmail == false) {
        $('#email').css('border', '1px solid red')
    }
    else {
        $('#email').css('border', '1px solid green')
    }

    if (testsoc == false) {
        $('#jmbg').css('border', '1px solid red')
    }
    else {
        $('#jmbg').css('border', '1px solid green')
    }
    if (testnam && testlname && testbirthd && testsoc && testmail) {
        students.push(new Student(name2, lastName2, birthdayx2, gmail2, social2))
        console.log(students)
        localStorage.setItem('students', JSON.stringify(students))
        alert('Student added!')
        $('#studentform').hide(500)
        $('#mainsection').append(` <div class="tt">
        <!--Text koji govori o skoli-->
        <h2 id="maintitle" class="mainttl">Dnevnik</h2>
        <h3 id="secondarytitle" class="secondaryttl">HighSchool</h3>
    </div>`)
    }
    else {
        alert('Please fill out all of the fields above')
    }
})