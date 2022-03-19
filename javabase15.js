console.clear();

// 스타일 작업할 엘리먼트들을 불러옴

// getElements - 엘리먼트들을 요구
// ByTagName - 힌트로 테그네임 제공
// div - 테그네임힌트
var divElements = window.document.getElementsByTagName('div');

divElements[0].style.color = 'red';
divElements[1].style.color = 'red';
divElements[2].style.color = 'red';
divElements[3].style.color = 'red';

for(var i = 0; i < divElements.length; i++){
    divElements[i].style.color ='red';
}

$('div').css('color', 'red');