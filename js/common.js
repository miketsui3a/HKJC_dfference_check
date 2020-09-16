$(document).ready(function () {
    $('a[data-rel="fb-share"]').click(function (e) {
        e.preventDefault();
        var cid = $(this).attr('data-share-event-id');
        var url = $(this).attr('href');
        url += "?u=" + encodeURIComponent('https://2020seasonopening.com/fb/'+$(this).attr('data-id')+'?cid='+cid);
        window.open(url, "_blank", "width=800,height=600");
    });
    
    $('.submit-form').on('submit', function () {
        WATracker.trackClickEvent('2021SO_GAME_SFORM');
    });
    
    $('[data-watracker="click"]').on('click', function (e) {
        WATracker.trackClickEvent($(this).attr('data-event-id'));
    });
    
    
    $('.submit-btn.btn').click(function () {
        $('.alert').addClass('show');
    });
});