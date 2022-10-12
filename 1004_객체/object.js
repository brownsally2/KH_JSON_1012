// 객체 리터럴로 객체를 생성하는 방법 
// let memberInfo = {
//     name: "유나",
//     age: 20,
//     addr: "경기도 수원시",
//     gender: "여성" 
// };
// console.log(memberInfo);

// 생성자로 생성하는 방법
// function MemberInfo(name, age, addr, gender){
//     this.name = name;
//     this.age = age;
//     this.addr = addr;
//     this.gender = gender;
// }
// let memberInfo = new MemberInfo("유나", 20, "경기도 수원시", "여성");
// let memberInfo1 = new MemberInfo("안유진", 20, "서울시 강남구", "여성");
// console.log(memberInfo1);

// Object.create로 생성하는 방법
// 지정된 프로토타입 객체와 프로퍼티를 가지고 새로운 객체를 만들어 줌 
let member = Object.create(Object.prototype, {
    name:{
        value: "유나",
        writable: true,
        enumerable: true,
        configurable: true 
    },
    age:{
        value: 20,
        writable: true,
        enumerable:true,
        configurable: true
    },
    addr:{
        value:"경기도 수원시",
        writable:true,
        enumerable:true,
        configurable:true
    },
    gender: {
        value: "여성",
        writable:true,
        enumerable:true,
        configurable:true
    }
});
//console.log(member);

function Circle(center, radius){ // 함수 선언식 : 불러주기 전까지 행동하지 않음
    //(호이스팅으로 끌어올려짐)
    this.center = center; // 프로퍼티
    this.radius = radius;
    // this.area = function(){ // 함수 표현식 : 호이스팅 되지 않음 
    //     return Math.PI * this.radius * this.radius;
    // }
}
Circle.prototype.area = function(){
    return Math.PI * this.radius * this.radius;
}
// let c1 = new Circle(1, 2.0);
// let c2 = new Circle({x:0, y:1}, 3.0);
// let c3 = new Circle(3, 2.0);

// console.log(c2.area());

// 프로토타입 상속
// 자바스크립트는 프로토 타입 상속에 기반을 둔 객체지향 언어 입니다.
// let objA = {
//     name : "Tom",
//     sayHello : function(){
//         console.log("Hello!" + this.name);
//     }
// }
// let objB = {
//     name:"Huck"
// };
// objB.__proto__= objA;
// let objC = {};
// objC.__proto__= objB;
// objC.sayHello();



let person = {
    name : {
        firstName : "유진",
        lastName: "안"
    },
    age : 20,
    isAdult : true,
    printInfo : function(){
        return this.name;
    }
};
// 객체에 대한 속성(프로퍼티, 함수)에 대한 접근은 (.) 연산자를 사용하거나 []사용 
// console.log(person["name"]);
// console.log(person.printInfo());

//객체의 속성값 변경하기
// person.name.firstName = "Youjin";
// person.name.lastName = "An";
// console.log(person.name);

// 객체 속성을 동적으로 추가하기
// const carInfo = {} // 빈 객체 생성
// carInfo.name = "제네시스";
// carInfo.year = "2022/10/04";
// carInfo.maxSpeed = "250KM";
// console.log(carInfo);

// //객체 속성을 동적으로 삭제하기
// delete carInfo.year;
// console.log(carInfo);

// 자바스크립트의 깊은 복사: 기본자료형에서는 변수 자체에 값이 저장됨
// 기본자료형끼리 복사를 하면 깊은 복사 
let num = 10; // Number형이기 때문에 변수에 값이 저장 됨
let copyNum = num; // 깊은 복사
// console.log(typeof(copyNum));

// 얕은 복사 : 참조 자료형에서는 변수공간에 데이터가 저장되는 것이 아니고 
// 데이터가 위치한 주소가 저장됨. 
// 참조 자료형을 복사하면 값이 아닌 주소가 복사되기 때문에 얕은 복사가 일어남 
// const car = "소나타";
// car = "싼타페";

// 주소 변경하려고 함

// 얕은 복사: object복사 해당
// let car = {
//     name:"싼타페"
// };
// let car2 = car; // car2도 object타입이 됨 
// car.name ="제네시스";
//console.log(car2.name);
// 주소 복사되므로 car, car2가 주소가 같음 

// 표준 내장 객체 : 자바스크립트에서 개발 편의를 위해 수많은 객체가 미리 만들어져 있음
// 스코프에 상관 없이 모든 영역에서 공통으로 사용 할 수 있습니다.
const pw = "123";
if(pw.length < 4){ // 문자열 길이 확인
    console.log(pw.length+ "비밀번호는 최소한 4자리 이상으로 입력하세요.");
}

// 특정 문자열 포함 여부 확인 : include(), indexOf()
// - include() : true/false
// - indexOf() : 해당 문자열의 인덱스를 반환, 없으면 -1 

const email = "test!name.com";
if(email.includes("@") === false){
    console.log("올바른 이메일 형식이 아닙니다.");
}

const email2 ="test!name.com";
if(email2.indexOf("@") === -1){
    console.log("올바른 이메일 형식이 아닙니다.");
}
//slice() : 시작 위치와 종료 위치를 지정하면 문자열에서 해당 부분 잘라서 반환
// let str = "Apple, Banana, Kiwi";
// let result = str.slice(7,13); //해당 인덱스부터 지정 인덱스 미만까지 
// console.log(result);
// substring() : 시작 위치와 종료 위치를 지정하면 잘라서 반환
// let str = "Apple, Banana, Kiwi";
// let result = str.substring(7, 13);
// console.log(result);

// replace() : 문자열 내의 특정 문자열을 지정한 문자열로 변경
// let str = "지구오락실, 이영지, 안유진, 미미, 이은지";
// let newStr = str.replace("이은지", "나영석");
// console.log(newStr);
// toUpperCase(), toLowerCase() : 대문자, 소문자 변경
// concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수
let txt1 = "Hello";
let txt2 = "JavaScript";
// let txt3 = txt1+" "+txt2;
// console.log(txt3);
let txt3 = txt1.concat(" ", txt2);
console.log(txt3);

// trim(): 문자열 앞, 뒤의 공백 제거
// let str = "             Hello        JavaScript trim          ";
// console.log(str.trim());

//padStart(), padEnd(): 문자열 앞과 뒤에 지정된 문자를 지정된 길이 만큼 추가
let str = "55";
str = str.padStart(4,0); // 총 길이를 정하고 입력 받은 문자열에서 남는 공간을 채움 
console.log(str);

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자를 반환하는 함수
let addr = "서울시 강남구 역삼동 KH정보교육원";
// console.log(addr.charAt(2));
// console.log(addr.charCodeAt(12)); // 해당 유니코드값 반환
// split() : 특정 문자 기준으로 문자열을 분리 
let birthday = "1997-06-12";
let arr = birthday.split("-");
// console.log(arr);

// Number 객체 : 숫자 관련 작업을 위해 사용되는 메소드
// console.log(Number.parseFloat("12")); // 문자열을 실수로 변환
// console.log(Number.parseFloat("12.33"));

// console.log(Number.parseInt("12.33")); // 문자열을 정수로 변환
// console.log(Number.parseInt("12.kk"));
// console.log(Number.parseInt("kk 11")); // NaN(Not a number의 약자)

//배열을 다루는 Array 객체 : 자바의 스트림과 유사
// 파괴적  -> 배열을 바꿀 수 있음 
//비파괴적 -> 배열을 바꿀 수 없음 
// forEach(function(k){}) : 내부를 순회, k: 내부를 순회하는 요소
// const arr1 =[10, 20, 30, 40, 50];
// arr1.forEach(function(k){
//     console.log(k);
// });
// //위와 같음 
// arr1.forEach(x => console.log(x));

// toString() : 배열 안의 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// join() : 배열 안의 모든 문자열을 지정한 문자를 지정한 문자를 이용해 결합
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join("/")); // 비파괴적인 메소드 (원본이 변경되지 않음)
// console.log(fruits);

// pop() : 배열에서 마지막 데이터를 제거하고 반환 (스택) -> 파괴적 메소드
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.pop());
// console.log(fruits);

// push() : 새로운 요소 추가 (스택)
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits);
//큐 -> FILO

// shift() : 배열의 첫번째 요소를 제거하고 반환
// let fruits = ["Banana" , "Orange", "Apple", "Mango"];
// console.log(fruits.shift());
// console.log(fruits);

//unshift() : 배열의 첫번째 요소에 값을 추가하고 배열의 길이를 반환
// let fruits= ["Banana" , "Orange", "Apple", "Mango"];
// console.log(fruits.unshift("lemon"));
// console.log(fruits);

//배열의 요소의 변경 : ??
// for(let i =0; i < fruits.length; i++){
//     fruits[i] = "사과";
// }
// // 향상된 for문 : 요소의 값을 변경해도 원본 배열은 변경되지 않음
// for(let e of fruits){
//     e = "딸기";
//     console.log(e);
// }

// for(let e of fruits){
//     console.log(e);
// }

// concat() : 2개 이상의 배열을 하나의 배열로 결합
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
// let totFruits = arr5.concat(arr6, arr7, arr8);
// console.log(totFruits);

// slice() : 해당 인덱스부터 끝까지 표시
// 매개변수가 두개이면 시작인덱스부터 종료 인덱스번호까지 잘라냄
// let fruits = ["사과", "딸기", "포도", "수박", "참외"];
// console.log(fruits.slice(2)); 
// console.log(fruits.slice(2, 3)); // 시작 인덱스에서 종료 인덱스 미만까지

// sort() : 정렬(기본적으로는 오름차순 정렬을 함)
// let fruits88 = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
// console.log(fruits88.sort()); // 오름차순 
// console.log(fruits88.reverse()); // 내림차순

// filter() : 비파괴적인 메소드, 조건에 맞는 값을 추출해 새로운 배열 생성, 자주 사용됨
// 자바 : 중개연산 스트림 
let persons = [
    {
        name : "유재석",
        point : 78,
        city :"서울"
    },
    {
        name : "김종국",
        point : 92,
        city : "서울"
    },
    {
        name : "양세찬",
        point : 76,
        city : "제주"
    },
    {
        name : "하하",
        point : 81,
        city : "경기도"    
    }
];

// 한줄이면 {}생략 가능 
// 조건에 맞는 pass 배열 생성 
// let pass = persons.filter(e => e.point > 80);
// console.log(pass);

// 날짜와 시간을 다루는 Date 객체
// node js시간은 영국 천문대(GMT) 기준
// html 콘솔에서 한국시간으로 찍힘 
// const date = new Date();
// console.log(date);

// const date1 = new Date(2022, 10, 04);
// // 배열에서 10번째
// console.log(date1);

// const date2 = new Date(2022, 10, 04, 16, 20, 50);
// // 영국 천문대 기준 9시간 빠름 
// console.log(date2);

// const date3 = new Date("2022-10-04"); // 원하는 달로 입력 됨
// console.log(date3);
// const date4 = new Date("2022/12/25/18:30:50"); // 원하는 달로 입력 됨
// console.log(date4);

// // 연도 출력
// console.log(date.getFullYear());
// // 월 출력 
// console.log(date.getMonth()); // 배열인덱스로 반환됨을 유의 +1을 해야 원하는 달을 얻음 

//Set 객체 : 중복 허용하지 않는 특성을 가집니다.
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet.size);
console.log(mySet.has());
console.log(mySet);

// Map 객체 : 키와 값을 맵핑 시켜서 값을 저장하고 저장된 순서대로 요소에 접근 
let map = new Map();
map.set("name", "유나");
map.set("email", "yuna@gmail.com");
map.set("age", 20);
map.set("addr", "경기도 수원시");


console.log(map.size);
console.log(map.get("name")); // 키에 대한 값을 반환 
console.log(map.has("email")); // 존재 여부 확인
map.delete("name");
map.forEach(e => console.log(e));

// 수학 연산을 다루는 Math 객체
const floatNum = 10.49;
console.log(Math.floor(floatNum)); // 소수점 이하를 내림
console.log(Math.ceil(floatNum)); // 소수점 이하를 올림
console.log(Math.round(floatNum)); // 소수점 반올림

// Math.random() : 0보다 크고 1보다 작은 숫자형 값을 반환 합니다.
 // 1 ~ 10사이의 난수 
while(true){
    let rand = Math.floor(Math.random() * 10) + 1;
    console.log("생성된 랜덤값은 : " + rand);
    if(rand === 10) break;
}



