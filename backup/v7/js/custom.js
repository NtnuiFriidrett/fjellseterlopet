//custom Javascript



// sticky toTop
$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('#pageTop').height()+$('#menu').height())
        {
            $('#menu').addClass('fixed');
        }
        else
        {
            $('#menu').removeClass('fixed');
        }
    });
});

