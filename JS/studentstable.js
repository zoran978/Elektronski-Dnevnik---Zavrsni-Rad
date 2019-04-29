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
            <th>Delete Student</th>
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
                <tr class="rows">
                <td>` + studentlist[i].name + `</td>
                <td>`+ studentlist[i].lastname + `</td>
                <td>`+ studentlist[i].birthdate + `</td>
                <td>`+ studentlist[i].mail + `</td>
                <td>`+ dateNow + `</td>
                <td><input type="checkbox" class="checkit"></td>
                </tr>`)
    }
  }

  //appending id through for loop so different rows could have different ids
  clsrw = $('.checkit')
  length = clsrw.length
  for (j = 0; j < length; j++) {
    clsrw[j].id = 'a' + (j + 1)
  }
  $('#mainsection').append('<div class="btndiv"><button id="deletion" class="btn btn-danger">Delete Students</button></div>')
}
//ako je nase polje checkovano mozemo ga dohvatiti pomocu appendovanog ida ili neceg drugog,ali ako je checkovano da na klik
//dugmeta proverimo sva polja koja su checkovana i onda redove u kojima se ona nalaze obrisemo