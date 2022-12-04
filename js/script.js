$(document).ready(function() {
    $('.bars').click(function(event) {
        $('.bars-menu').toggleClass('active');
        $('body').toggleClass('overflow');
          
    });
});

$(document).ready(function() {
    $('.button-close-bars').click(function(event) {
        $('.bars-menu').removeClass('active')
        $('body').removeClass('overflow');
    });
});

