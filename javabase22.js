var hi = function(){

    var text = $('div').text();
    text = parseInt(text);
    text++;
    $('div').text(text);
}

setTimeout(hi, 1000);

/*var intervalId = setInterval(hi, 1000);

$('div').dblclick(function(){
    clearInterval(intervalId);
})*/