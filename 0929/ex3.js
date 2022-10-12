
let memnum;
 
let now = new Date();
let year = now.getFullYear();
// document.write(year);

while(true){
    memnum = prompt("주민번호를 입력하세요 : ('-'포함)" , "");
    let len = memnum.length;
    if(len != 14) alert("입력 오류 : 다시 입력하세요.")
    else{
        if(memnum.indexOf("-") == -1) alert("하이픈이 누락하였습니다.")
        else break;
    }
}

if (memnum.indexOf("-") == 6 ){
    if(memnum.charAt(7) == "2" || memnum.charAt(7) == "1") {
        let bir1 = "19"+memnum.charAt(0)+memnum.charAt(1);
        let age1 = Number(year - bir1);
        // document.write(`${age1}세 `);
        if(memnum.charAt(7) == "2"){
            document.write("<div id=woman>"+ age1 +"세 " + "여성입니다." + "</div>");
        }if(memnum.charAt(7) == "1"){
            document.write("<div id=man>"+ age1 +"세 " + "남성입니다." + "</div>");
        }
        // document.write("<div>당신은 "+ gender + "인 "+ age1 +"입니다.</div>" );
    }if(memnum.charAt(7) == "3" || memnum.charAt(7) == "4" ){
        let bir2 = "20"+memnum.charAt(0)+memnum.charAt(1);
        let age2 = Number(year - bir2); 
        // document.write(`${Number(year - age1)}세 `);
        if(memnum.charAt(7) == "4"){
            document.write("<div id=woman>"+ age2 +"세 " + "여성입니다."+ "</div>");
        }if(memnum.charAt(7) == "3"){
            document.write("<div id=man>"+ age2 +"세 " + "남성입니다."+ "</div>");
        }
    }

}
