let list = []
//ES6 function that appends the table where we can see our professors from local storage
let professortable = () => {
    $('#myNav').css('width', '0%')
    $('#mainsection').empty()
    $('#mainsection').append(`
    <table class="table table-md-responsive" id="mytable2">
    <thead class="thead-light">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Subject</th>
            <th>Email</th>
            <th>Date of entry</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
`)
    //here we are getting our professors back from localstorage so we could display them
    list = JSON.parse(localStorage.getItem('professors'))
    //also we are adding timestamp when someone is added,this is going to be removed to localstorage aswell
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    dateNow2 = day + "/" + month + "/" + year
    //checks local storage and appends rows equal to amount of professors with their info
    if (localStorage.getItem('professors') === null) {
        alert('No professors here!')
    }
    else {
        for (i = 0; i < list.length; i++) {
            $('#mytable2 tbody').append(`
                <tr>
                <td>` + list[i].profname + `</td>
                <td>`+ list[i].proflastname + `</td>
                <td>`+ list[i].profsubject + `</td>
                <td>`+ list[i].profmail + `</td>
                <td>`+ dateNow2 + `</td>
                </tr>`)
        }
    }
}