function studentgrade() {
    $(".overlay-content").css("display", "none");
    deletion()
    newovmenu()
    backtrack()
}

function backtrack() {
    if ($(".overlay-content").css("display", "none")) {
        $(".closebtn").removeAttr("onclick");
        $(".closebtn").click(function () {
            $("#gradcont").fadeOut(400);
            $(".overlay-content").show(500);
            $(".overlay-content").css("display", "block");
            if ($(".overlay-content").css("display", "block")) {
                $(".closebtn").attr("onClick", "fclose()");
            }
        });
    }
}

function newovmenu() {
    $('.overlay').append("<div class='gradecontent' id='gradcont'></div>")
    $('#gradcont').append(`
    <div class="gradesdivoverlay">
         <form>
       <div class="form-group">
         <label for="formGroupExampleInput">Name and lastname</label>
         <input type="text"  class="form-control" id="nameandlastname" placeholder="Name and Lastname">
       </div>
       <div class="form-group">
         <label for="formGroupExampleInput2">JavaScript grade</label>
         <input type="number" min="6" max="10"  class="form-control" id="jsgrade" placeholder="Javascript grade">
       </div>
       <div class="form-group">
         <label for="formGroupExampleInput2">CSS grade</label>
         <input type="number" min="6" max="10" class="form-control" id="cssgrade" placeholder="Css grade">
       </div>
       <div class="form-group">
         <label for="formGroupExampleInput2">HTML grade</label>
         <input type="number" min="6" max="10" class="form-control" id="htmlgrade" placeholder="HTML grade">
       </div>
     </form>
     <button class="btn btn-warning" onclick="gradestudent()">Complete</button>
         </div>
    `)
}

function deletion() {
    $('#gradcont').remove()
}