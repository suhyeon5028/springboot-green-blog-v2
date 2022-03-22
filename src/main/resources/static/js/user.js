// 1. 이벤트 리스너
$("#btn-login").click(()=>{
    login();
});

$("#btn-join").click(()=>{
    join();
});

// 2. 기능

// 로그인 요청 메서드
async function login(){
  let loginDto = {
    username: $("#username").val(),
    password: $("#password").val()
  }

  let response = await fetch("/api/login",{
        method: "POST",
        body: JSON.stringify(loginDto),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    });
    let responseParse = await response.json();
    console.log(responseParse);

    if (responseParse.code == 1) {
        alert("로그인 완료");
        location.href = "/";
    } else {
        alert("로그인 실패");
    }
}

// 회원가입 요청 메서드
async function join(){
    // (1) username, password, email, addr을 찾아서 오브젝트로 만든다.
    let userDto = {
        username: $("#username").val(),
        password: $("#password").val(),
        email: $("#email").val(),
        addr: $("#addr").val(),
    }
    // (2) JSON으로 변환해서 fetch 요청한다. (통신의 표준이 제이슨이니까)
    let response = await fetch("/api/join",{
        method: "POST",
        body: JSON.stringify(userDto),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    });
    let responseParse = await response.json();
    console.log(responseParse);

    // (3) 회원가입이 잘되면 알림창 띄우고 로그인 페이지로 이동한다.
    if (responseParse.code == 1) {
        alert("회원가입 완료");
        location.href = "/loginForm";
    } else {
        alert("회원가입 실패");
    }
}