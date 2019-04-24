let studentlist = new Array();

let studenttable = () => {
    $('#myNav').css('width', '0%')
    $('#mainsection').empty()
    $('#mainsection').append(`
    <table class="table table-md-responsive" id="mytable">
    <thead class="thead-light">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>JMBG</th>
            <th>Date of entry</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
`)

    studentlist = JSON.parse(localStorage.getItem('students'))

    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    dateNow = day + "/" + month + "/" + year

    if (localStorage.getItem('students') === null) {
        alert('No students here')
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
}