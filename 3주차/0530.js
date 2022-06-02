<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">  <!--한글을 지원하는 대표적인 인코딩 방식 설정 목록-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>grid</title>

    <style>
        
    </style>
</head>

<body>   <!-- p.30 비트 논리 연산자 활용하기-->
    <script>

        var x=5;
        var y=7;
        var result;
        result=(x & y);
        document.write("x & y="+result+"<br>");
        result=(x | y);
        document.write("x | y="+result+"<br>");
        result=(x ^ y);
        document.write("x ^ y="+result+"<br>");
        result=(~x); //부정이면 -값이 붙는다
        document.write("~x="+result+"<br>");
    </script>

<p></p>

<script>

    var x=5; 
    var y=7; 
    var result;
    result=(x > y)? x : y; // x값이 참이면 x출력, 아니면 y출력함
    document.write("큰 값 : " + result + "<br>");
    result=(x > y)? x-y : y-x; // x값 참이면 앞에값 5-7출력, 값을 7-5출력 한다.
    document.write("큰 값-작은 값 : " + result + "<br>");
   </script>

<p></p>

<script>

    var x1=x2=x3=x4=x5=10; 
    var st="Hello "; 
    x1 +=1 ; //11
    document.write("x1 : " + x1 + "<br>");

    x2 -= 2; //8
    document.write("x2 : " + x2 + "<br>");

    x3 *= 3; // 30
    document.write("x3 : " + x3 + "<br>");

    x4 /= 4; // 값을 나눈다
    document.write("x4 : " + x4 + "<br>");

    x5 %= 5 ; // 나누고 나머지 값 표시
    document.write("x5 : " + x5 + "<br>");

    st+="Javascript";
    document.write("st : " + st + "<br>");
   </script>

<p></p>

<script>
    var gender="M"; // 남자(M), 여자(F)
    var age = 21;
    if(gender == "M") {
        if(age>= 19) {
        result= "남자 성인입니다.";
    }
    else {
        result= "남자 미성년자입니다.";
    }
}
else {
    if (age>= 19) {
        result= "여자 성인입니다.";
    }
    else {
        result= "여자 미성년자입니다.";
    }
}
document.write("당신은" +result+ "<p/>");
</script>

<p></p>

 {/* ? <!-- <p>아이디, 비밀번호 입력</p> --> */}
  {/* <!-- <script src="./ejs/script.js"> --> */}


<script>
    
id= prompt('아이디 입력');
if(id=='admin') {
 password=prompt('비밀번호 입력');
 if(password==='123456') {
 location.href="20_login.html"
 }
 else {
 location.href="20_error.html"
 }
}
else {
 location.href="20_error.html"
}

</script>

    
</body>

</html>