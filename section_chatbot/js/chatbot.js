const chatbotConversation = {
    "첫대사" : "안녕하세요 쳇봇입니다. 1,2,3 선택하쇼",
    data : {
        "1" : "1번입니다.",
        "2" : "2번입니다.",
        "3" : "3번입니다."
    }
}

//html 열자마자 bot이 첫마디 하게 하기
// $(함수) 를 넣으면 HTML 열린 뒤에 해다 함수가 실행됨.
// 여러 실행문을 실행하고 싶으면 $(function(){ 실행문 }) 이렇게 넣으면 됨.
// 그럼 해당 실행문이 묶여서 익명함수(이름없는 함수) 가 생성되고.
// 익명함수가 $()안에 들어가니까 HTML 열리고 나서 해당 내용 수행됨.
$(function(){
    appendToChatLog('Bot: ' + chatbotConversation['첫대사']);
})
function appendToChatLog(message) {
    var chatLog = document.getElementById('chat-log');
    chatLog.innerHTML += '<p>' + message + '</p><br>';
}
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    appendToChatLog('User: ' + userInput);

    // 대본에서 해당 선택치가 있는지 확인하기


    // 페이지 주소를 포함한 응답 생성
    var botResponse = generateBotResponse(userInput);
    appendToChatLog('Bot: ' + botResponse);

    // 채팅 입력창 초기화
    document.getElementById('user-input').value = '';
}



function generateBotResponse(userInput) {
    // 여기에서 페이지 주소를 포함한 응답을 생성
    // 사용자 입력에 따라 적절한 응답 및 페이지 주소를 생성합니다.
    var currentPage = window.location.href;
    return '안녕하세요. 무엇을 도와드릴까요? :) ' + userInput + ' ' + currentPage;
}