let gradingarray = new Array();
let testsname = /^[a-z\s]*$/i

function Studentobj(nameandlastname, jsgrade, cssgrade, htmlgrade, fngrade) {
  this.nameandlastname = nameandlastname
  this.jsgrade = jsgrade
  this.cssgrade = cssgrade
  this.htmlgrade = htmlgrade
  this.fngrade = fngrade
}

let gradestudent = () => {
  let ids = $('#nameandlastname').val()
  let jsgr = $('#jsgrade').val()
  let cssgr = $('#cssgrade').val()
  let htmlgrade = $('#htmlgrade').val()
  let finalgrade = parseFloat((parseInt(jsgr) + parseInt(cssgr) + parseInt(htmlgrade)) / 3)

  let testing = testsname.test(ids)

  if (ids == "" || jsgr == "" || cssgr == "" || htmlgrade == "") {
    alert('Please fill out all of the fields above')
  }
  else {
    if (testing == false) {
      alert('Please enter valid name')
    }
    else {
      if ((jsgr < 6 || jsgr > 10) || (cssgr < 6 || cssgr > 10) || (htmlgrade < 6 || htmlgrade > 10)) {
        alert('Grade must be between 6-10')
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
  }
}

function table() {
  $('#myNav').css('width', '0%')
  $('#mainsection').empty()
  $('#gradcont').hide()
  $(".overlay-content").css("display", "block");
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