// jquery plugin
$(function () {
    //초기 업데이트
    CreateWeatherChart()
    weeklyUpdate();
});

// 차트 변수 선언
let weaterChartData = [];
let tempChart;

const MIN_INTERVAL = 500;
const MAX_INTERVAL = 2000;

const weatherChartData = {
    '맑음': [14, 24, 'src/brightness.png'],
    '흐림': [10, 13, 'src/sun.png'],
    '비': [5, 8, "src/rain.png"],
    '눈': [-5, 0, "src/snow.png"],
    '바람': [0, 20, "src/wind.png"]
}


function getRandomWeather() {
    return weatherChartData[Object.keys(weatherChartData)[Math.floor(getRandomInterval(0, 5))]]
}

function getRandomInterval(min, max) {
    return Math.random() * (max - min) + min;
}

function weeklyUpdate() {
    const randomInterval = getRandomInterval(MIN_INTERVAL, MAX_INTERVAL)
    setTimeout(function () {
        updateTempByRendom();
        weeklyUpdate();
    }, randomInterval);
}

// 차트 초기화
function CreateWeatherChart() {
    let weatherChart = $('#weatherChart')
    let gallery_wrap = $(`<div id='gallery_wrap' ><div class="slide_gallery"></div></div>`)
    let weatherChart_sec = $(`<div id='weatherChart_sec' ><canvas id="tempChart"></canvas></div>`)

    weatherChart.append(gallery_wrap)
    weatherChart.append(weatherChart_sec)

    // table 생성
    let table = $(`<table class="weatherChart_table"></table>`)
    let tr2 = $(`<tr></tr>`)
    let tr3 = $(`<tr></tr>`)
    gallery_wrap.append(table)
    table.append($(`<tr><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th><th>일</th></tr>`))
    table.append(tr2)
    table.append(tr3)

    for (let i = 0; i < 7; i++) {
        const [minTemp, maxTemp, ImgSrc] = getRandomWeather();

        let randTemp = getRandomInterval(minTemp, maxTemp).toFixed(1);
        weaterChartData.push(randTemp);
        tr2.append($(`<td><img src="${ImgSrc}"></td>`))
        tr3.append($(`<td>${randTemp}°</td>`))
    }

    // 차트 생성
    let ctx = document.getElementById('tempChart').getContext('2d');
    tempChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: '주간 날시 기온차',
                data: weaterChartData,
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
}

function updateTempByRendom() {
    weaterChartData = []
    for (let i = 1; i < 8; i++) {
        const [minTemp, maxTemp, ImgSrc] = getRandomWeather();

        let randTemp = getRandomInterval(minTemp, maxTemp).toFixed(1);
        ;
        weaterChartData.push(randTemp);

        // 그림 바꿔치기
        $(`#gallery_wrap tr:nth-child(2) td:nth-child(${i}) img`).attr('src', ImgSrc)

        // 날씨 바꿔치기
        $(`#gallery_wrap tr:nth-child(3) td:nth-child(${i})`).text(randTemp)
    }

    tempChart.data.datasets[0].data = weaterChartData;
    tempChart.update();
}