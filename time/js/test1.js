let stopBtn = document.getElementById('stopBtn')
let startBtn= document.getElementById('startBtn')
let startTime;
let endTime;
let saveTime;
let sel;

let random = Math.floor(Math.random()*10)+5;//5 ~ 14
alert(`${random}초에 stop버튼을 누르세요`);
startTime = Date.now();    

stopBtn.addEventListener('click', function(){
    endTime = Date.now();
    saveTime =endTime-startTime;
    saveTime =  Math.round(saveTime/1000);
    alert(`${saveTime}초 `);
    if(saveTime==random)
         alert("성공 !");
    else if(saveTime < random)
        alert(`${random-saveTime}초 더 빠르게 누르셨습니다.`);
    else if(saveTime > random)
        alert(`${saveTime-random}초 더 느리게 누르셨습니다.`);
    
    sel = confirm("다시하시겠습니까?");

    if(sel==true){
        var link = './playing.html';
    window.location.href = link;       //웹개발할때 숨쉬듯이 작성할 코드
    window.location.replace(link);     // 이전 페이지로 못돌아감
    window.open(link);  
    }
    else if(sel==false){
        var link = './index.html';
    window.location.href = link;       //웹개발할때 숨쉬듯이 작성할 코드
    window.location.replace(link);     // 이전 페이지로 못돌아감
    window.open(link);  
    }
})

//처음에 랜덤 수를 발생시키기
//그 랜덤수를 randomBtn변수에 넣기
//그 수가 되면 stop클릭하기
//stop누른 시간을 stopbtn변수에 저장
//stopbtn이 randomBtn보다 적으면 
//randomBtn에서 stopbtn을 빼서 이만큼 더 빠르게 눌렀다고
//stopbtn이 randomBtn보다 크면 
//stopbtn에서 randomBtn을 빼서 이만큼 더 느리게 눌렀다고
//둘이 같으면 성공 창 내보내기