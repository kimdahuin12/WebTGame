<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Palindrom Stage</title>
        <link rel="stylesheet" href="../resources/css/basic.css">
		<link rel="stylesheet" href="../resources/css/button.css">
    </head>
   
<body>

<!-- 끝 X 다음에 -->

	<%@ include file="./gameHeader.jsp" %>
	<section classs="basic_box">
	    <h2>펠린드롬 글자 만들기 규칙</h2>
	    <ol>
	        <li>
	            앞으로 읽어도, 뒤로 읽어도 같아야 한다.
	        </li>
	        <li>
	            바로 앞 뒤 문자가 같은 문자이면 안된다.
	        </li>
	        <li>
	            같은 문자가 2개 이상 있으면 안 된다.
	        </li>
	    </ol>
    </section>
   
    <%@ include file="../footer.jsp" %>
</body>
<script type="text/javascript" src="../resources/js/palindromStg.js"></script>
</html>