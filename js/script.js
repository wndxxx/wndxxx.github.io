(function($) {
    var duration = 3000;  // change this to change rotation time in milliseconds
    var current = 1;
    var tricker = $(".tricker");
    var height = tricker.height();
    var number = tricker.children().length;
    var first = tricker.children().first();

    setInterval(function() {
        var interv = current * -1 * height;
        first.css("margin-top", interv + "px");
        if (current == number) {
        first.css("margin-top", "0px");
        current = 1;
        } else {
        current++;
        }
    }, duration);
    })(jQuery);

    function switchClass(i) {
        var lis = $('#home-news > div');
        lis.eq(i).removeClass('home_header_on');
        lis.eq(i).removeClass('home_header_out');
         lis.eq(i = ++i % lis.length).addClass('home_header_on');
         lis.eq(i = ++i % lis.length).addClass('home_header_out');
         setTimeout(function() {
             switchClass(i);
         }, 3500);
     }
     
     $(window).load(function() {
        switchClass(-1);
     });