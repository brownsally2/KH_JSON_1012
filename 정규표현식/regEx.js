// let str = "Hello world !!! world!"; // 입력 받은 문자열
// const regEx = /world/; // 검사할 정규식
// console.log(regEx.test(str)); // 대응되는 문자열 포함 여부 확인
// console.log(str.search(regEx)); // 해당 문자열 인덱스 반환 , 없으면 -1 반환

// exex() 메소드 : 인수로 전달된 문자열에서 패턴을 검색하여, 일치하는 문자열 반환
// let inputStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 설정 찾기, 가장 좋은 선물은 용서";
// let regEx = /가장큰/g;
// let result = regEx.exec(inputStr);

// console.log(result); // 찾는 문자열이 없으면 null 반환

// 전화번호 검사 하기
let inputNum = "Hi~~~. 저는 Ryan 이고, 전화번호는 4578654481232, 010-1234-5678, 010-4567-7865, 010-7865-4846 입니다.";
// const regEx = /\d{3}-\d{4}-\d{4}/g; // 숫자 3자리-숫자4-숫자4, g옵션은 매칭되는 항목을 모두 찾음 
// let rst = inputNum.match(regEx);
// for(let e of rst) console.log(e);

// 간단한 매칭
// const regex = /저는/;
// const regex = /[0-9]/g; // 모든 숫자 찾기
// let rst = inputNum.match(regex);
// for(let e of rst) console.log(e);

const regex = /[^0-9]/g; // 숫자가 아닌 것 모두 찾기
let rst = inputNum.match(regex);
for(let e of rst) console.log(e);


