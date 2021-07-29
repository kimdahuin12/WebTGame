
//시간제한 1분 걸어야함
//연달아서 같은 글자 안 되게 해야함
//짝수 글자 팰린드롬..... 다시 
//공백 ..

let stage = 1;  //글자수는 (stage*2+1) --> 홀수만
let inputStr = "";

//팰린드롬인지 아닌지 확인하는 함수
function palindrom(str){
    if(str.length==1) //길이가 1이면 펠린드롬 
        return true;
    for(let i = 1; i < str.length; i++){
        if(str[i-1]===str[i])
        return false;
    }
    // for(let i = 3; i < str.length; i+=2){
    //     if((toString(str[i-3])+toString(str[i-2]))===(toString(str[i])+toString(str[i-1])))
    //         return false;
    // }
    if(str[0]!==str[str.length-1])//첫번째 문자와 마지막 문자가 같지 않으면 펠린드롬 X
        return false;
    else if(str.length===2) //첫번째 문자와 마지막 문자가 같고 길이가 2면 펠린드롬
        return true;
    let strSlice;
    if(str.length===3) strSlice = str[1]
    else strSlice = str.slice(1, -1)
    palindrom(strSlice); //맨 앞, 맨 뒤의 문자를 잘라내고 남은 문자열을 넘겨준다.
    return true;
}
while(true){
    alert(`현재 스테이지 : ${stage}`);

    do{
        inputStr = prompt(`길이가 ${(stage*2+1)}인 펠린드롬 문자를 입력하세요`);
        if(inputStr===null){
            let link = '../gameMenu.jsp'
            window.location.href = link; // 해야함
            window.locaction.replace(link);
            window.open(link);
        }

    }while((stage*2+1) != inputStr.length);

    let res = palindrom(inputStr);
    if(res==true){
        alert('성공!');
        stage++;
    }else {
        alert('실패! ');
    }
}

