console.clear();

var fun = function(){
    var $this = $('this');

    $this.addClass('active');
}

$('div.a').click(fun);