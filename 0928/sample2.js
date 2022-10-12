// 상근이 알람

let H, M, tmp;


tmp = prompt("시간을 입력하세요. : ", "");
H= Number(tmp);
tmp= prompt("분을 입력하세요. : ", "");
M= Number(tmp);



if(M > 45){
    H--;
    M = M - 45;
    if(H < 0){
        H= 23;
    }
}else M = 60 -(45 - M);

document.write(H + ":" + M);