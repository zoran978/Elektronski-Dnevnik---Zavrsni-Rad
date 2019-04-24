let profname = $('#profname').val()
let proflastName = $('#proflastname').val()
let profbirthdayx = $('#profbirthday').val()
let profgmail = $('#profemail').val()
let profsocial = $('#profjmbg').val()

let profnamereg = /^[a-z\s]*$/i
let proflastnamereg = /^[a-z\s]*$/i
let profbirthdayreg = /^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\,\<\.\>\/\?\;\:\'\"\[\]\{\}]+$/i
let profmailreg = /^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\,\<\.\>\/\?\;\:\'\"\[\]\{\}]+$/i
let profjmbgreg = /^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\,\<\.\>\/\?\;\:\'\"\[\]\{\}]+$/i
let subjctreg = /^[a-z\s]*$/i

let professors = new Array;

function professorInfo() {
    $('#myNav').css('width', '0%')
    $('#mainsection').empty()
    $('#mainsection').append(`<div id="profform" class"profinf">
        <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input type="text" class="form-control" id="profname" placeholder="Name">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Last Name</label>
          <input type="text" class="form-control" id="proflastname" placeholder="Last Name">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Year of Birth</label>
          <input type="text" class="form-control" id="profbirthday" placeholder="Year of Birth">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Email</label>
          <input type="text" class="form-control" id="profemail" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">JMBG</label>
          <input type="text" class="form-control" id="profjmbg" placeholder="JMBG">
        </div>
        <div class="form-group">
        <label for="formGroupExampleInput">Subject</label>
        <input type="text" class="form-control" id="profsubject" placeholder="Subject">
      </div>
        </form>
        <button type="button" value="Submit" id="addprof" class="btn btn-warning">Submit</button>
        </div>`)
}

function Prof(profname, proflastname, profbirthdate, profmail, profjmbgnum, profsubject) {
    this.profname = profname
    this.proflastname = proflastname
    this.profbirthdate = profbirthdate
    this.profmail = profmail
    this.profjmbg = profjmbgnum
    this.profsubject = profsubject
}

$(document).on('click', "#addprof", function () {
    let profname = $('#profname').val()
    let proflastName = $('#proflastname').val()
    let profbirthday = $('#profbirthday').val()
    let profgmail = $('#profemail').val()
    let profsocial = $('#profjmbg').val()
    let profsubject = $('#profsubject').val()

    let prtestnam = profnamereg.test(profname)
    let prtestlname = proflastnamereg.test(proflastName)
    let prtestbirthd = profbirthdayreg.test(profbirthday)
    let prtestmail = profmailreg.test(profgmail)
    let prtestsoc = profjmbgreg.test(profsocial)
    let prtestsub = subjctreg.test(profsubject)

    if (prtestnam == false) {
        $('#profname').css('border', '1px solid red')
    }
    else {
        $('#profname').css('border', '1px solid green')
    }

    if (prtestlname == false) {
        $('#proflastname').css('border', '1px solid red')
    }
    else {
        $('#proflastname').css('border', '1px solid green')
    }

    if (prtestbirthd == false) {
        $('#profbirthday').css('border', '1px solid red')
    }
    else {
        $('#profbirthday').css('border', '1px solid green')
    }

    if (prtestmail == false) {
        $('#profemail').css('border', '1px solid red')
    }
    else {
        $('#profemail').css('border', '1px solid green')
    }

    if (prtestsoc == false) {
        $('#profjmbg').css('border', '1px solid red')
    }
    else {
        $('#profjmbg').css('border', '1px solid green')
    }

    if (prtestsub == false) {
        $('#profsubject').css('border', '1px solid red')
    }
    else {
        $('#profsubject').css('border', '1px solid green')
    }

    if (prtestnam && prtestlname && prtestbirthd && prtestsoc && prtestmail && prtestsub) {
        professors.push(new Prof(profname, proflastName, profbirthday, profgmail, profsocial, profsubject))
        console.log(professors)
        localStorage.setItem('professors', JSON.stringify(professors))
        alert('Professor added!')
        $('#profform').hide(500)
        $('#mainsection').append(` <div class="tt">
        <h2 id="maintitle" class="mainttl">Dnevnik</h2>
        <h3 id="secondarytitle" class="secondaryttl">HighSchool</h3>
    </div>`)
    }
    else {
        alert('Please fill out all of the fields above')
    }
})