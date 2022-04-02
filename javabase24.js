/*$('section > div')
.eq(0) //첫번쨰
.css('height', '100px')
.css('background-color', 'red')
.css('margin', '20px')

$('section > div')
.eq(1) //두번쨰
.css('height', '100px')
.css('background-color', 'gray')
.css('margin', '20px')

$('section > div')
.eq(2) //세번쨰
.css('height', '100px')
.css('background-color', 'gold')
.css('margin', '20px')*/

/*$('button').click(function(){
    $('section > div').each(function(index, node){
        var bgColor = $(node).data('bg-color');
        var height = $(node).data('height');
        var width = $(node).data('width');
    
        if(bgColor){
            $(node).css('background-color', bgColor);
        }
    
        if(height){
            $(node).css('height', height);
        }
        
        if(width){
            $(node).css('width', width);
        }
    
        $(node).text(index + ' : ' + bgColor);
    })
})*/

$('button').click(function(){
    $('section > div').each(function(index, node){
        var className = $(node).data('click-class');
        $(node).addClass(className);
    })
})