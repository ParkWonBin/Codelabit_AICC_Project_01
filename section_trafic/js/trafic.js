
// $(String_Selector)  : 요소 찾아서 돌려줌
// $(String_HTML)  : 입력받은 HTML 코드를 지가 새롭게 생성해서 돌려줌.
// $(function) : 페이지 로드 완료됐을 떄 해당 함수 돌리라고 등록해줌
// $(element) : 해당 요소를 jquery 객체로 만들어줌

var trafic_slide_gallery_Xoffset = 0;
var intervalId;
function trafic_Move(){
    trafic_slide_gallery_Xoffset -= 300
    if (trafic_slide_gallery_Xoffset < -2400 ){
        trafic_slide_gallery_Xoffset = 0
    }
    $('#trafic_slide_gallery').animate({'marginLeft':`${trafic_slide_gallery_Xoffset}px`},300)
}

function trafic_back() {
    trafic_slide_gallery_Xoffset += 300
    if (trafic_slide_gallery_Xoffset > 0){
        trafic_slide_gallery_Xoffset = -2400
    }
    $(`#trafic_slide_gallery`).animate({'marginLeft':`${trafic_slide_gallery_Xoffset}px`},300)
}

function trafic_play() {
    // setInterval의 ID를 저장하고 반환
    intervalId = setInterval(trafic_Move, 1000);
}

function trafic_stop() {
    // 저장한 setInterval의 ID를 활용하여 clearInterval 호출
    clearInterval(intervalId);
}