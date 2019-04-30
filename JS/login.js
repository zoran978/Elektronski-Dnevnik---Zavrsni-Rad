//pre-defined admin info for login
const usernameadmin = 'admin1'
const passwordadmin = 1234
//function that allows us to go back to the main menu without refreshing page or closing entire menu
function returntomeni() {
    if ($(".overlay-content").css("display", "none")) {
        $(".closebtn").removeAttr("onclick");
        $(".closebtn").click(function () {
            $(".newcntnt").fadeOut(400);
            $(".overlay-content").show(500);
            $(".overlay-content").css("display", "block");
            if ($(".overlay-content").css("display", "block")) {
                $(".closebtn").attr("onClick", "fclose()");
            }
        });
    }
}
//function that appends new menu with log in form
function newmenu() {
    $(".overlay").append('<div id="newcontent22" class="newcntnt"></div>');
    $("#newcontent22").append(
        `<form><div class="form-group"><input type="text" class="form-control"  placeholder="Username" id="username"></div><div class="form-group"><input type="password" class="form-control" placeholder="Password" id="passwrd"></div>
      <button type="button" class="btn btn-primary" id="darkmdd"  onclick="logIn()">Log In</button></form>`
    );
}
//function that removes log in form menu
function deletingchildelem() {
    $("#newcontent22").remove();
}
/*function that executes other functions in next order:
1.we remove main meni
2.then we delete log in menu,if there is no such menu we do nothing
3.then we append new log in form menu
4.then we call final function that changes what our exit button does,allowing us to return to main menu without refreshing
page or closing entire thing
*/
function loginmeni() {
    $(".overlay-content").css("display", "none");
    deletingchildelem();
    newmenu();
    returntomeni();
}
//login function that will check if our values match pre-defined ones
function logIn() {
    let userr = $('#username').val()
    let passw = $('#passwrd').val()
    //if they do we get our entire menu back with extra options
    if (userr == usernameadmin && passw == passwordadmin) {
        $('#disp').css('display', 'block')
        deletingchildelem()
        $(".overlay-content").show(500);
        $(".overlay-content").css("display", "block");
        $('.overlay-content').append('<button type="button" class="btn btn-primary" onclick="logOut()" id="logger">Log Out</button>')
        $('#loggs').css('display', 'none')
    }
    //if not we get notification
    else {
        alert('Incorrect username or password!')
    }
}
//log out button that will remove options that require you to log in
function logOut() {
    $('#disp').css('display', 'none')
    $('#loggs').css('display', 'block')
    $('#logger').css('display', 'none')
}