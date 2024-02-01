## 실시간 지하철 혼잡도 차트 개발
- [x] chart 플러그인 다운로드
  [chart.js](https://www.chartjs.org/docs/latest/samples/line/line.html) 참조
- [x] step1 호선별 차트 그리기
  ```function InitTrafficChart() {
    const ctx = document.getElementById('percentageChart').getContext('2d');
    percentageChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 10}, (_, i) => ''),
            datasets: [
                {
                    label: '1호선 혼잡율',
                    borderColor: 'rgb(0,82,164)',
                    borderWidth: 4,
                    fill: false,
                    data: chart_percentageChanges[0]
                } ```
- [x] step2 호선별 그래프 그리기
    
- [x] step3 동적으로 그래프 변화 기능 추가
- [x] 플러그인처러 JS 파일분리 완료

## 1/17 CSS 꾸미기

- [ ] div 생성 
- [ ] 사이즈 맞춰서 내부에 영상재생 만들기
