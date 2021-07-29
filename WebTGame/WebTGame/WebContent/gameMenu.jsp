<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>WebTGame - Game</title>
<link rel="stylesheet" href="./resources/css/basic.css">
<link rel="stylesheet" href="./resources/css/button.css">
<script type="text/javascript" src="./resources/js/header.js"></script>
</head>
<body>
<%@ include file="header.jsp" %>

<div id="gameContent">
       <input type="button" class="startBtn" id="startBtn1" value="Stop!Game" 
           onClick = "self.location='./gameContent/beTimer.jsp';"/>
        <input type="button" class="startBtn" id="startBtn2" value="startGame2" 
           onClick = "self.location='./gameContent/palindromStg.jsp';"/>
    </div>
    
<%@ include file="footer.jsp" %>
</body>
</html>