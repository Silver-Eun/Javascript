$('button.left').click(function(){
    /*$actived = $('div.a.active');

    $actived.append('123');

    var $next = $actived.next();

    var $nenext = $next.next();

    $next.append('123');
    $nenext.append('123');*/

    var $now = $('div.active');

    var $next = $now.next();

    $next.addClass('active');
    $now.removeClass('active');

})

$('button.right').dblclick(function(){
    var $now = $('div.active');

    var $next = $now.prev();

    $next.addClass('active');
    $now.removeClass('active');

})