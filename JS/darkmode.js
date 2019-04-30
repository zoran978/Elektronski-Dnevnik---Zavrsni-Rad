function darkmode() {
    $('.dark').css('color', 'ghostwhite')
    $('.hdr').css('background-color', 'black')
    $('.overlay').css('background-color', 'black')
    $('.overlay').css('color', 'ghostwhite')
    $('.dark').removeAttr('onclick')
    $('.dark').attr('onClick', 'lightmode()')
}

function lightmode() {
    $('.dark').css('color', 'darkgrey')
    $('.hdr').css('background-color', 'rgba(122, 23, 23, 0.9)')
    $('.overlay').css('background-color', 'ghostwhite')
    $('.overlay').css('color', '#818181')
    $('.dark').removeAttr('onclick')
    $('.dark').attr('onClick', 'darkmode()')
}