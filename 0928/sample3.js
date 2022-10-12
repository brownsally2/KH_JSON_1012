/* 2. 정수 n을 입력 받아 n*n 행렬 출력하기
- 예) 3입력 
   1 2 3 
   4 5 6
   7 8 9 */

   let n, k;
   n = prompt("정수를 입력하세요.");
   n = Number(n);
   k = n*n;

   
     for(let i = 1; i <= k; i++){
        document.write("<span class =nbyn>"+ Number(i) + " " +
        "</span>"); 
        if(i % n == 0){
            document.write("<br>");
        }
        }

