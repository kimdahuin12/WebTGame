//시간제한 1분 걸어야함
//연달아서 같은 글자 안 되게 해야함
//짝수 글자 팰린드롬..... 다시 
//공백 ..

let stage = 1;  //글자수는 stage+2
let inputStr = "";

//팰린드롬인지 아닌지 확인하는 함수
function palindrom(str){
    if(str.length<=1)
        return true;
    if(str[0]!==str[str.length-1])
        return false;
    else if(str.length===2)
        return true;
    palindrom(str.slice(1, -1));
    return true;
}
while(true){
    alert(`현재 스테이지 : ${stage}`);

    do{
        inputStr = prompt(`길이가 ${stage+2}인 펠린드롬 문자를 입력하세요`);
        if(inputStr===null){
            let link = './index.html'
            window.location.href = link; // 해야함
            window.locaction.replace(link);
            window.open(link);
        }

    }while(stage+2 != inputStr.length);

    let res = palindrom(inputStr);
    if(res==true){
        alert('성공!');
        stage++;
    }else {
        alert('실패! ');
    }
}