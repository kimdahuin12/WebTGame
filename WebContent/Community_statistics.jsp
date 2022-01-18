<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="resources/css/basic.css">
<title>Web T Game Community</title>
</head>
<body>
	<%@ include file="./header.jsp" %>
	<article class="basic_box">
		<div class="today-visit visit-statistics">오늘 방문자 : 1</div><!-- js에서 따로 해야함. 일단 임시 -->
		<div class="yesterday-visit visit-statistics">어제 방문자 : 10</div>
		<div class="total-visit visit-statistics">총 방문자 : 100</div>
	</article>
	<article class="basic_box square_box1">
		글 글 글<br>
		내용내용내용
	</article>
	<%@ include file="./footer.jsp" %>
</body>
</html>