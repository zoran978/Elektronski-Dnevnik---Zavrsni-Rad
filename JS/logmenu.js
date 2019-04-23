// function newmn() {
//     $(".overlay").append('<div id="newcontent" class="newcnt"></div>');
//     $("#newcontent").append(`
//     <form>
//     <div class="form-group"><input type="text" class="form-control" placeholder="User Name" id="usernamett"></div><div class="form-group"><input type="password" class="form-control" placeholder="Password" id="passww"></div>
//     <button class="btn btn-outline-info dugme"  id="buttn">Log In</button>
//     </form>
//     `)
// }

// function deletingchildelem() {
//     $("#newcontent").remove();
// }

// //funkcija koja nam daje mogucnost da se vracamo unazad kroz meni bez automatskog zatvaranja istog
// function returntomeni() {
//     //uslov kojim omogucavamo da se vratimo na prethodnu stranicu
//     if ($(".overlay-content").css("display", "none")) {
//         //uklanjamo event za zatvaranje menija kako bi mu dodali drugu funkciju za vracanje na prethodnu stranicu//
//         $(".closebtn").removeAttr("onclick");
//         //funkcija za prethodno navedenu radnju
//         $(".closebtn").click(function () {
//             //zatvaranje trenutne stranice koju gledamo
//             $(".newcnt").fadeOut(400);
//             //ponovno vracanje contenta
//             //animacija za prelaz sa stranice na stranicu
//             $(".overlay-content").show(500);
//             $(".overlay-content").css("display", "block");
//             //uslov kojim se vraca dugme za zatvarnje na prvobitno stanje
//             if ($(".overlay-content").css("display", "block")) {
//                 $(".closebtn").attr("onClick", "closeNav()");
//             }
//         });
//     }
// }

// function login() {
//     $(".overlay-content").css("display", "none");
//     deletingchildelem();
//     newmn();
//     returntomeni();
// }