/* 
 Created on : 27/03/2016, 4:09:14 AM
 Author     : Han.D.Phan
 Purpose    : Javascript for index.html
 */

$(document).ready(function () {
    $('#socialButtonLarge').click(function () {
        $('#socialButtons').slideToggle("fast");
        $("#socialButtons").position({
            my: "right",
            at: "right+35%",
            of: "#socialButtonLarge"
        });
    });
    $('#socialButtonMedium').click(function () {
        $('#socialButtons').slideToggle("fast");
        $("#socialButtons").position({
            my: "right",
            at: "right+35%",
            of: "#socialButtonMedium"
        });
    });
});