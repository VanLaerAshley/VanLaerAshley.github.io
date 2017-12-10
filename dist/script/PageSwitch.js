$(document).ready(function(){
    var fadeInTime = 100;
    var fadeOutTime = 100;
    var popupWindow = $('.contact');
    var closeWindow = $('.ApiDashboard');


    function fadein(el) {
        $(el).fadeIn(fadeInTime);
    }
    function fadeout(el) {
        $(el).fadeOut(fadeOutTime);
    }

    $('#popup-trigger').on('click touchend', function(){
        fadein(popupWindow);
        closeWindow.css("display", "none");
    })

    $('.popup-close1').on('click touchend', function() {
        fadeout(popupWindow);
        closeWindow.css("display", "");
    });

})