/* 3. 1~ 1000 사이의 7의 배수를 구하고 한줄에 10개씩 출력하기*/

let i;
i = Number(i);
for(i = 1; i<= 1000; i++){
    if(i % 7 == 0){
        document.write("<span class='double'>"+i +" "+"</span>");
    }if(i % 70 == 0){
        document.write("<br>");
    }
}