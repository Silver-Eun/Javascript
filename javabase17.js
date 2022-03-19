console.clear();

/*var click_work = function(){
    alert('hi');
}

//윈도우에게 태그가 body인 엘리먼트를 포장하게 함
//윈도우는 body 엘리먼트가 들어있는 상자를 우리에게 줌
var $body = window.$('body');

$body.click(click_work);*/

//1단계 함수 만들기
function click_work(){
    alert('hi');
}
//2단계 생성
var $div = $('section > div');

//3단계 실행
//dblclick = double click
$div.click(click_work);