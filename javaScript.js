// $(document).ready(function () {
//     var scroll_start = 0;
//     var startchange = $('#startchange');
//     var offset = startchange.offset();
//     if (startchange.length) {
//         $(document).scroll(function () {
//             scroll_start = $(this).scrollTop();
//             if (scroll_start > offset.top) {
//                 $('#masthead').css('background-color', '#f0f0f0');
//             } else {
//                 $('#masthead').css('background-color', 'transparent');
//             }
//         });
//     }
// });
$(document).ready(function () {
    var myNav = document.getElementById('masthead');
    window.onscroll = function () {
        "use strict";
        if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
        }
        else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
        }
    };
});
