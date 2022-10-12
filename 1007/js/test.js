// 6. 자바스크립트에서 태그 앨리먼트의 객체정보를 가져오는 document 메소드 
// 사용 구문 2가지기술:getElementById
// document.getElementById("id")
// document.getElementsByClassName("class")
// document.getElementsByTagName("tag")

// 7. HTML의 영역을 구분하는 태그 중에 div 태그와 span태그의 차이점
// span: 자기 구성 요소만 영역을 가짐 
// div: 문단 전체 영역을 가짐
// 8. NaN : Not-A-Number, 연산 결과가 숫자가 아님을 의미
// 9. 배열 만드는 2가지 방법
// let arr = [];
// let arr2 = new Array(개수); 

// 10. 전역객체(Window)의 Infinity 속성에 대해 서술 : 숫자를 0으로 나누면 발생 
// 11. 자바스크립트의 스코프 중 functional scope에 대해서 설명 : 변수가 선언된 함수에서만 접근 가능 
// function test() {
//     let kkk = 10;
//     console.log(kkk);
// }
// test();
// console.log(kkk); => 함수내에서 선언되어 있으면 부를 수 없음(오류 뜸)

// 12. 블록스코프 : 블록 안에서만 변수에 접근할 수 있는 스코프 
// {
//     // var은 블록 밖에서 에러나지 않음 
//     let kkk = 1000; 
//     console.log(kkk);
// }
// 블록 밖에서 let은 에러남 
// console.log(kkk);

// 13.자바스크립트 원시타입 3가지 이상 : boolean, number, string, null, undefined(값이 없는 상태)
// console.log(test);
// var test = 100; 
// 호이스팅 때문에 선언만 되어있고 값이 비어 있음
// 14.원시타입과 참조타입의 차이점 : 값을 저장하는지, 값의 주소를 저장하는지 
// 15.js에서 변수에 담겨있는 값의 타입을 알기 위해 사용하는 연산자과 사용하는 방법
// typeof(변수명);
// 16.인자로 전달받은 문자열을 자바스크립트 코드로 변환하여 실행하는 전역함수의 명칭과 사용법
// eval(문자열로 된 코드); => ES5부터 사용하지 않는 함수임
// 17. undefined : 변수를 선언하고 값을 할당하지 않으면 자동으로 할당되는 값
// *querySelector 관련 문제있음
// 18. window 객체의 onload 속성에 대해 서술 : 페이지에 load이벤트가 발생했을 때 호출되는 콜백함수
// (html이 없을때 js를 부르면 오류가 남)
// (body 밑에 js를 넣으므로 화면이 이미 그려져 있기때문에 쓰지 않음)
// 자바스크립트의 브라우저 객체 모델에 속한 객체 3개 이상 : window, location, histoty, navigaton, screen



