// jquery plugin
$(function() {
    $('.slide_gallery').bxSlider({
        auto: false,
        autoControls: false,
        pagerCustom: '.slider-pager'
    });
});
// 차트 변수 선언
const TEMP_PRICES = [];
let tempChart;

// 차트 초기화
const ctx = document.getElementById('tempChart').getContext('2d');
tempChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: '주간 날시 기온차',
            data: TEMP_PRICES,
            borderWidth: 1,
            fill: true,
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// 랜덤 값 생성
let random_sunnyChange = (Math.random() - 20) * 10;
let random_cloudyChange = (Math.random() - 20) * 8;
let random_rainyChange = (Math.random() - 20) * 6;
let random_windyChange = (Math.random() - 20) * 4;
let random_snowyChange = (Math.random() - 20) * 2;

// 램덤 값 자동 반복 생성
function updateTemp(){
    // 변동 및 변동률 업데이트
    // const currentTemp = parseFloat($(".change").text().repl);
    let sunnyTempChange = Math.random(random_sunnyChange / 10);
    let cloudyTempChange = Math.random(random_cloudyChange / 10);
    let rainyTempChange = Math.random(random_rainyChange / 100);
    let windyTempChange = Math.random(random_windyChange / 100);
    let snowyTempChange = Math.random(random_snowyChange / 10);

    // 온도 배열에 추가
    TEMP_PRICES.push(sunnyTempChange);
    TEMP_PRICES.push(cloudyTempChange);
    TEMP_PRICES.push(rainyTempChange);
    TEMP_PRICES.push(windyTempChange);
    TEMP_PRICES.push(snowyTempChange);

    // 최대 7개까지 유지
    if (TEMP_PRICES.length > 7){
        TEMP_PRICES.shift()	// 첫번째 원소 제거
    }
    // 차트 업데이트
    updateChart();

    // 변동 및 변동률 업데이트
    $('.change_sunnyDay').text(sunnyTempChange.toFixed(1) + '°');
    $('.change_cloudyDay').text(cloudyTempChange.toFixed(1) + '°');
    $('.change_rainyDay').text(rainyTempChange.toFixed(1) + '°');
    $('.change_windyDay').text(windyTempChange.toFixed(1) + '°');
    $('.change_snowyDay').text(snowyTempChange.toFixed(1) + '°');
}

//초기 업데이트
updateTemp();

/* chart start */
/* random timeout */
const MIN_INTERVAL = 1000; // 최소 1초
const MAX_INTERVAL = 3000; // 최대 3초

function weeklyUpdate(){
    const randomInterval = Math.random() * (MAX_INTERVAL - MIN_INTERVAL) + MIN_INTERVAL;
    setTimeout(function (){
        updateTemp();
        weeklyUpdate();
    }, randomInterval);
}
weeklyUpdate();

/* chart temp */
function updateChart(){
    tempChart.data.label = Array.from({length: 7}, (_, i) => '');	// 데이터 레이블 비우기
    tempChart.data.label.push('');
    tempChart.data.datasets[0].data = TEMP_PRICES;
    tempChart.update();
}