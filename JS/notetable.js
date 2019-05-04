let date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

dateNow = day + "/" + month + "/" + year

let notearr = new Array();

let submitnote = () => {
    let notevalue = $('#noteit').val()

    if (notevalue == "") {
        alert('Please fill out the note')
    }
    else {
        notearr.push(notevalue)
        tablesnote()
        $('#noteit').val(null)
    }
}

function tablesnote() {
    $('#notecont').hide()
    $(".overlay-content").css("display", "block")
    $('#myNav').css('width', '0%')
    $('#mainsection').empty()
    $('#mainsection').append(`
    <table class="table table-md-responsive" id="notetable">
    <thead class="thead-light">
        <tr>
            <th>Notes</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody id="notetablebody">
    </tbody>
  </table>
    `)
    for (i = 0; i < notearr.length; i++) {
        $('#notetablebody').append(`
        <tr>
        <td>`+ notearr[i] + `</td>
        <td>`+ dateNow + `</td>
        </tr>
        `)
    }
}