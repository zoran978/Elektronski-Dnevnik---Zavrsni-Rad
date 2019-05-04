let note = () => {
    $(".overlay-content").css("display", "none");
    deletecontentnow()
    notemenu()
    goback()
}

function goback() {
    if ($(".overlay-content").css("display", "none")) {
        $(".closebtn").removeAttr("onclick");
        $(".closebtn").click(function () {
            $("#notecont").fadeOut(400);
            $(".overlay-content").show(500);
            $(".overlay-content").css("display", "block");
            if ($(".overlay-content").css("display", "block")) {
                $(".closebtn").attr("onClick", "fclose()");
            }
        });
    }
}

function notemenu() {
    $('.overlay').append("<div class='notecontent' id='notecont'></div>")
    $('#notecont').append(`
    <div class="notesoverlay">
    <textarea name="notes" id="noteit" cols="30" rows="10" placeholder="Enter text..."></textarea>
    <button class="btn btn-warning" onclick="submitnote()">Submit</button>
         </div>
    `)
}

function deletecontentnow() {
    $('#notecont').remove()
}