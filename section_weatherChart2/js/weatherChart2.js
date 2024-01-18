// jquery plugin
$(function () {
    //초기 업데이트
    createWeatherChart()
    updateTempByRendom()
    weeklyUpdate();
});

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

function updateTempByRendom() {
    weaterChartData = []
    for (let i = 1; i < 8; i++) {
        const [minTemp, maxTemp, ImgSrc] = getRandomWeather();

        let randTemp = getRandomInterval(minTemp, maxTemp).toFixed(1);
        weaterChartData.push(randTemp);

        // 이미지 잡기
        $(`#wcTitle > div:nth-child(${i}) > img`).attr('src', ImgSrc)

        // 기온 잡기
        $(`#wcTitle > div:nth-child(${i}) > div.wcTemp`).text(randTemp)

    }
    tempChart.data.datasets[0].data = weaterChartData;
    tempChart.update();
}
function createWeatherChart() {
    let weatherChart = $(`#weatherChart`)
    let wcTitle = $('<div id="wcTitle"></div>')
    let wcChart = $(`<div id="wcChart"><canvas id="tempChart"></canvas></div>`)

    weatherChart.append(wcTitle)
    wcTitle.append($(`<div class="wcDate"><div class="wcDDD">월</div><img class="wcWIcon"/><div class="wcTemp"></div></div>`))
    wcTitle.append($(`<div class="wcDate"><div class="wcDDD">화</div><img class="wcWIcon"/><div class="wcTemp"></div></div>`))
    wcTitle.append($(`<div class="wcDate"><div class="wcDDD">수</div><img class="wcWIcon"/><div class="wcTemp"></div></div>`))
    wcTitle.append($(`<div class="wcDate"><div class="wcDDD">목</div><img class="wcWIcon"/><div class="wcTemp"></div></div>`))
    wcTitle.append($(`<div class="wcDate"><div class="wcDDD">금</div><img class="wcWIcon"/><div class="wcTemp"></div></div>`))
    wcTitle.append($(`<div class="wcDate"><div class="wcDDD">토</div><img class="wcWIcon"/><div class="wcTemp"></div></div>`))
    wcTitle.append($(`<div class="wcDate"><div class="wcDDD">일</div><img class="wcWIcon"/><div class="wcTemp"></div></div>`))
    weatherChart.append(wcChart)

    ctx = document.getElementById('tempChart').getContext('2d');
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