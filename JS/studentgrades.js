let gstud = new Array();
function studentgrade() {
    $('#myNav').css('width', '0%')
    $('#mainsection').empty()
    $('#mainsection').append(`
    <div id="tabel">    
    <table id="gradtable" class="table">
    <thead>
    <tr>
    <th>Name</th>
    <th>Lastname</th>
    <th>Final Grade</th>
    </tr>
    </thead>
    <tbody>
    </tbody>
    </table>
    </div>
    `)

    //we get students from localstorage
    gstud = JSON.parse(localStorage.getItem('students'))

    if (localStorage.getItem('students') === null) {
        alert('No students here!')
    }
    else {
        for (i = 0; i < gstud.length; i++) {
            $('#gradtable tbody').append(`
            <tr>
            <td onclick="clicktocalc()">` + gstud[i].name + `</td>
            <td>`+ gstud[i].lastname + `</td>
            <td><input type="text" name="finalgrade" readonly id="finalgrade"></td>
            </tr>
            `)
            //dodati for petlju slicnu onoj iz studenttable fajla koja ce konacnoj oceni davati poseban id
            //treba for petlja kooja ce da prolazi korz tabelu i appenduje rezultate na osnovu polja koje smo kliknuli
            //npr ako sam kliknuo na sestog ucenika po redu da kada popunim njegove ocene one budu izracunate i upisane
            //u polje koje odgovara njegovom redu
        }
    }
}

function delelem() {
    $('.gradesdiv').hide(500)
}

var val = document.getElementsByName('grade')
var total = 0
function calc() {
    for (i = 0; i < val.length; i++) {
        if (parseInt(val[i].value)) {
            total += parseInt(val[i].value)
        }
    }
    document.getElementById('finalgrade').value = total / 3
    delelem()
}

function clicktocalc() {
    $('#mainsection').append(`
    <div class="gradesdiv">
    <form>
  <div class="form-group">
    <label for="formGroupExampleInput">JavaScript Grade</label>
    <input type="number" class="form-control" name="grade" placeholder="JavaScript">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">CSS grade</label>
    <input type="number" class="form-control" name="grade" placeholder="CSS">
  </div>
  <div class="form-group">
  <label for="formGroupExampleInput2">HTML grade</label>
  <input type="number" class="form-control" name="grade" placeholder="HTML">
</div>
</form>
<button id="gradit" class="btn btn-danger" onclick="calc()">Calculate</button>
</div>
`)
}