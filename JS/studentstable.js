let studentlist = new Array();
//appends table for out students
let studenttable = () => {
  if (localStorage.getItem('students') === null) {
    alert('No students here!')
  }
  else {
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
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    dateNow = day + "/" + month + "/" + year

    for (i = 0; i < studentlist.length; i++) {
      //appends amount of rows equal to amount of students
      $('#mytable tbody').append(`
                <tr class="rows">
                <td>` + studentlist[i].name + `</td>
                <td>`+ studentlist[i].lastname + `</td>
                <td>`+ studentlist[i].birthdate + `</td>
                <td>`+ studentlist[i].mail + `</td>
                <td>`+ dateNow + `</td>
                </tr>`)
    }
  }
}