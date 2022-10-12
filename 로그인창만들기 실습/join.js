//태그 변수로 만들기
        //아이디
        let elInput = document.querySelector("#idInput");
        //비밀번호
        let elpwInput = document.querySelector("#pwInput");
        //이메일
        let elemailInput = document.querySelector("#emailInput");
        //전화번호
        let elNumbertype = document.querySelector("#phonenumber");
        //가입
        let elJoinbutton = document.querySelector("#join");

        // elJoinbutton.disabled = true;
        
        //정규식 확인 후 메세지 뿌리기 위해 태그 가져오기
        //아이디
        let elFailuremessage = document.querySelector('.idfailure-message');
        let elSuccessmessage = document.querySelector('.idsuccess-message');
        //비밀번호
        let elPwfailuremessage = document.querySelector('.pwfailure-message');
        let elPwsuccessmessage = document.querySelector('.pwsuccess-message');

        //이메일
        let elmisemailmessage = document.querySelector('.misemail-message');
        let elemailsuccessmessage = document.querySelector('.emailsuccess-message');

        //전화번호
        let elrightmessage = document.querySelector('.numbersuccess-message');
        let elMisnumbermessage = document.querySelector('.misnumber-message');


        //아이디 정규식 확인
        let idRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;

        function id_check(){
            if(!idRegExp.test(elInput.value)) {
                elSuccessmessage.classList.add('hide');
                elFailuremessage.classList.remove('hide');
                // let str = "잘못된 아이디입니다."
                // document.getElementById("id-reg").innerHTML = str;
                return false;
            } else {
                // let str = "사용가능한 아이디입니다."
                // document.getElementById("id-reg").innerHTML = str;
                elSuccessmessage.classList.remove('hide');  
                elFailuremessage.classList.add('hide');
                return true;
            }
        }

        //비밀번호 정규식 확인
        let pwRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,20}$/;
        
        function pw_check(){
            if(!pwRegExp.test(elpwInput.value)){
                elPwsuccessmessage.classList.add('hide');
                elPwfailuremessage.classList.remove('hide');
                return false;
            }else{
                elPwsuccessmessage.classList.remove('hide');
                elPwfailuremessage.classList.add('hide');
                return true;
            }
        }

        //이메일 정규식 확인 
        // let emailregExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        let emailregExp = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
        function email_check(){
            if(!emailregExp.test(elemailInput.value)){
                elemailsuccessmessage.classList.add('hide');
                elmisemailmessage.classList.remove('hide');
                return false;
            }else{
                elemailsuccessmessage.classList.remove('hide');
                elmisemailmessage.classList.add('hide');
                return true;
            }
        }

        // 전화번호 정규식 확인
        // let phonenumber = /^[0-9]*$/;
        let phonenumber = /\d{3}-\d{4}-\d{4}/;

        function phoneche() {
                if (!phonenumber.test(elNumbertype.value)) {
                // alert("잘 못 입력 하셨습니다.");
                elrightmessage.classList.add('hide');
                elMisnumbermessage.classList.remove('hide');
                return false;
                }
                else {
                elrightmessage.classList.remove('hide');
                elMisnumbermessage.classList.add('hide');
                // alert("올바르게 입력하셨습니다.");
                return true;
                }
        }
       
    

        function joinBtn() {
             switch (pwRegExp.test(elpwInput.value) && pwRegExp.test(elpwInput.value) && emailregExp.test(elemailInput.value) 
               && phonenumber.test(elNumbertype.value)) {
                case true :  //elJoinbutton.disabled = false; 
                            alert("가입성공 하였습니다."); break;
                case false : //elJoinbutton.disabled = true;
                            alert("가입실패 하였습니다."); break;
              }
        }