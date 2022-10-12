// fetch("http://localhost:3000/comments")
//     .then((response) => response.json())
//     .then((json) => console.log(json)); //전체 데이터 조회

// fetch("http://localhost:3000/comments/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json)); //id로 조회

let isLoading = false;

if(isLoading == false){
        fetch("http://192.168.10.231:3000/posts",{
        method: "POST",
        body: JSON.stringify({
            title: "시나몬 공부 준비",
            author: "곰돌이사육사"
        }),
        headers:{
            "content-type" : "application/json; charset=UTF-8",
        },
    })
    .then((rsp) => rsp.json())
    .then((json) => console.log(json));
    isLoading = ture;
}

