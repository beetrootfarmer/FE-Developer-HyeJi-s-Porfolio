# Beeve, 국민체력100 데이터 기반 체력측정 서비스 개발

기간 : 2025.09 ~ 진행중

역할 : PM & Frontend

기술스택 : Typescript, Next.js, Tailwind css, Media Pipe, Node.js, Radis, Flutter, Postgresql, Docker

수상 : 🥈 국민체육진흥공단 공공데이터 경진대회 2위

1. rPPG 기반 심박수 측정
- 발견 : 모바일 브라우저로 심박수를 측정하기 위해 신호 노이즈와 조명 문제 해결이 필요
- 고민 : 기존 rPPG 라이브러리 검토했으나 모바일 브라우저 환경 제약으로 직접 구현 선택MediaStream API + torch constraint로 플래시 점등 후 적색 채널 픽셀값 변화를 혈류 신호로 활용하는 파이프라인 설계
- 구현 : 프레임별 R채널 평균값 추출 → 5점 이동평균 노이즈 필터링
→ 동적 임계값(최댓값 80%) + 최소 간격 기반 피크 감지 → BPM 역산
15초 구간을 3분할해 구간별 BPM 독립 계산 후 평균으로 노이즈 강건성 확보
- 결과 : BPM 유효 범위 필터링으로 outlier 제거, 3구간 평균으로 안정적 측정값 확보
1. 가속도계 기반 반응속도 측정
- 발견 : 반응속도 측정에 별도 장비 없이 스마트폰 센서만 활용하기 위해 기기별 권한 모델과 센서 노이즈 처리가 필요
- 고민 : DeviceMotionEvent API로 Y축 가속도 급변을 감지하는 방식 설계. iOS 13+ 권한 모델(requestPermission)과 Android 분기 처리 필요성 확인
- 구현 : 합성 가속도(√x²+y²+z²)로 안정성 90점 이상일 때 측정 자동 시작
Web Audio API Oscillator로 카운트다운 신호음 구현
performance.now() 기준 신호~움직임 감지 시간차로 반응속도 확정
useRef로 클로저 문제 해결
100ms 이하 선행 반응 코드 레벨 차단
- 결과 : 3회 측정 유효 최솟값 채택, 선행 반응 자동 무효 처리로 측정 신뢰도 확보
1. MediaPipe 포즈 추정 렌더링 최적화
- 발견 : detectForVideo()를 매 프레임 호출 시 CPU/GPU 부하로 프레임 드롭 발생
- 고민 : setInterval은 브라우저 렌더링 사이클과  무관하게 실행되어 타이밍 어긋남 인지
- 구현 :

```
 // 프레임 변화 없으면 추론 skip   
if (video.currentTime === lastVideoTime) {     
        requestAnimationFrame(detect);     
        return;   
    }   
// GPU 위임으로 추론 속도 향상   
PoseLandmarker.createFromOptions({
  baseOptions: {
    delegate: 'GPU'     // CPU 대신 GPU 추론
  },
  runningMode: 'VIDEO'  // 연속 프레임 최적화
})
```

- 결과 : 중복 추론 제거 및 60fps 자연스러운 렌더링 달성