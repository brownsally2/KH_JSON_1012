// 입력 값 가져오기
let id = document.querySelector("#idInput");
let pw = document.querySelector("#pwInput");
let pwRight = document.querySelector("#pwrightInput");

// 메세지 뿌리기
// 아이디
let elIdClickmessage = document.querySelector(".idfailure-message");
let elPwClickmessage = document.querySelector(".pwClick-message");
// 비밀번호
let elPwFailuremessage = document.querySelector(".pwfailure-message");
// 비밀번호 확인 
let elPWrightCilckmessage = document.querySelector(".pwrightfailure-message");


function pw_click(){
    if(id.value == "") {
        elIdClickmessage.classList.remove('hide');
    }else{
        elIdClickmessage.classList.add('hide');
    }

    elPwClickmessage.classList.remove('hide');
}

function pw_clickright(){
    if(pw.value == ""){
        elPwFailuremessage.classList.remove('hide');
    }else{
        elPwFailuremessage.classList.add('hide');
    }
}

function email_click(){
    if(pwRight.value == ""){
        elPWrightCilckmessage.classList.remove('hide');
    }else{
        elPWrightCilckmessage.classList.add('hide');
    }
}

