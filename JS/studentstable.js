let studentlist = new Array();
//appends table for out students
let studenttable = () => {
  $('#myNav').css('width', '0%')
  $('#mainsection').empty()
  $('#mainsection').append(`
    <table class="table table-md-responsive" id="mytable">
    <thead class="thead-light">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Email</th>
            <th>Date of entry</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
`)
  //we get students from localstorage
  studentlist = JSON.parse(localStorage.getItem('students'))
  //date when student is added,to be moved to localstorage aswell!!
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()

  dateNow = day + "/" + month + "/" + year
  //appends amount of rows equal to amount of students
  if (localStorage.getItem('students') === null) {
    alert('No students here!')
  }
  else {
    for (i = 0; i < studentlist.length; i++) {
      $('#mytable tbody').append(`
                <tr>
                <td>` + studentlist[i].name + `</td>
                <td>`+ studentlist[i].lastname + `</td>
                <td>`+ studentlist[i].birthdate + `</td>
                <td>`+ studentlist[i].mail + `</td>
                <td>`+ dateNow + `</td>
                </tr>`)
    }
  }
  //here we append from with where we can match student name and last name in order to delete them
  //same should be done for professors
  //NOT FINISHED!!!
  $('#mainsection').append(`
    <div class="remform">
    <form>
    <div class="form-group">
      <label for="formGroupExampleInput">Name</label>
      <input type="text" class="form-control" placeholder="Name" id="removestudentn">
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Last</label>
      <input type="text" class="form-control" placeholder="Last name" id="removestudentln">
    </div>
  </form>
  <button class="btn btn-warning" onclick="removeStudentnow()">Remove Student</button>
    </div>
    `)
}