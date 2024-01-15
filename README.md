# AICC_Project_01
주제 : 날씨 교통 테마 웹페이지 제작하기
인원 : 박원빈, 김인수, 이지우, 김은지

### STEP1 : 레이아웃 구성. 담당 영역 분할
- 협업 시 작업 영역과 책임 분리
- Git을 통한 실시간 업무 공유
- 통합 과정에서 개발자간 충돌 방지를 위한 요령

### STEP2 : 기능 구현 및 디자인 확정
- 기능 구현 및 빠른 결과물 완성
- 개발된 페이지에서 신규 기능 추가 기존 기능 고도화

### STEP3 : JS-JQUERY로 빈 HTML에 항목 생성하도록
- 완성된 HTML 리팩토링. DOM/JQuery로 HTML 생성하도록 변환
- 브라우저 보안정책을 준수하여 JS로 분리된 HTML요소 통합
- JQuery의 Select / effect / event 전체적인 복기


### 1일차
date : 2021.1.12.(금)
주요업무 : 
- 주제선정 : 날씨 & 대중 교통
- 업무분담 : 
  - 요소 별로 분업하여 개발 후 통합
  - 요소 별로 폴더 생성. 담당자별로 폴더 내부만 편집
  - 변수명 규칙을 통해 통합 후 출돌을 방지
- 기능명세 : 
  - 교통
    - 지하철 노선도 : 
      - [x] 이미지 리소스 확보 (1/12)
      - [x] 애니메이션 슬라이드 겔러리 (1/12)
      - [ ] [오른쪽|왼쪽|자동]으로 노선도 이동
    - 지하철 길찾기(외부링크) : 
      - [x] 네이버 지하철 URL 페턴 분석 (1/15)
      - [x] 각 조원들이 자주 사용하는 지하철역 조사 
      - [ ] 출발역, 도착역, 경유역 설정하면 외부링크를 통해 길 찾아주도록
  - 날씨
    - 요일별 날씨 : 
      - [x] 이미지 리소스 확보 (1/12)
      - [ ] 이미지 업데이트 버튼 개발
      - [ ] 요일/오전오후 별로 이미지 업데이트
  - 기타
    - [x] 통합 레이아웃 구성 (1/12)
    - [ ] BGM on/off
    - [ ] 외부 링크 열기(JS/JQuery로 HTML생성)
    - [ ] 랜덤 날씨 동영상(유튜브) 끌어와서 틀기