let gradingarray = new Array();

function Studentobj(nameandlastname, jsgrade, cssgrade, htmlgrade, fngrade) {
  this.nameandlastname = nameandlastname
  this.jsgrade = jsgrade
  this.cssgrade = cssgrade
  this.htmlgrade = htmlgrade
  this.fngrade = fngrade
}

let gradestudent = () => {
  $('#myNav').css('width', '0%')
  $('#mainsection').empty()

  let ids = $('#nameandlastname').val()
  let jsgr = $('#jsgrade').val()
  let cssgr = $('#cssgrade').val()
  let htmlgrade = $('#htmlgrade').val()
  let finalgrade = parseFloat((parseInt(jsgr) + parseInt(cssgr) + parseInt(htmlgrade)) / 3)

  if (ids == "" || jsgr == "" || cssgr == "" || htmlgrade == "") {
    alert('Please fill out all of the fields above')
  }
  else {
    finalgrade = finalgrade.toFixed(2)
    gradingarray.push(new Studentobj(ids, jsgr, cssgr, htmlgrade, finalgrade))
    table()
    $('#nameandlastname').val(null)
    $('#jsgrade').val(null)
    $('#cssgrade').val(null)
    $('#htmlgrade').val(null)
  }
}

function table() {
  $('#gradtab').remove()
  $('#mainsection').append(`
  <table class="table table-md-responsive" id="gradtab">
  <thead class="thead-light">
      <tr>
          <th>Student Id</th>
          <th>JS grade</th>
          <th>Css grade</th>
          <th>HTMl grade</th>
          <th>Final rade</th>
      </tr>
  </thead>
  <tbody id="tablebody">
  </tbody>
</table>
  `)
  for (i = 0; i < gradingarray.length; i++) {
    $('#gradtab tbody').append(`
    <tr>
    <td>`+ gradingarray[i].nameandlastname + `</td>
    <td>`+ gradingarray[i].jsgrade + `</td>
    <td>`+ gradingarray[i].cssgrade + `</td>
    <td>`+ gradingarray[i].htmlgrade + `</td>
    <td>`+ gradingarray[i].fngrade + `</td>
    </tr>
    `)
  }
}