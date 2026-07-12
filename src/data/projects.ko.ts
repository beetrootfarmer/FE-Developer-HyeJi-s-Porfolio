import type { Project } from './types';
import { placeholder02, placeholder03 } from './placeholders';

export const projectsKo: Project[] = [
  {
    slug: 'beeve',
    year: '2025',
    title: 'Beeve',
    role: 'PM & Frontend',
    summary:
      '국민체력100 공공데이터를 활용해, 별도 장비 없이 스마트폰 카메라와 센서만으로 체력을 측정하는 서비스.',
    description:
      '2025년 9월부터 진행 중인 프로젝트로, PM 겸 프론트엔드로 참여해 국민체력100 공공데이터를 ' +
      '기반으로 스마트폰 카메라와 센서만으로 체력을 측정하는 서비스를 만들었습니다. 심박수는 ' +
      'MediaStream API와 torch constraint로 플래시를 켠 뒤 적색 채널 픽셀값을 혈류 신호로 활용하는 ' +
      'rPPG 파이프라인을 직접 설계했고, 이동평균 노이즈 필터링과 15초 구간 3분할 평균으로 측정값의 ' +
      '강건성을 확보했습니다. 반응속도는 DeviceMotionEvent로 합성 가속도를 계산해 안정 상태를 자동 ' +
      '감지하고, Web Audio API로 카운트다운 신호음을 재생한 뒤 performance.now() 기준으로 반응 시간을 ' +
      '측정했으며, 100ms 이하의 선행 반응은 코드 레벨에서 자동으로 무효 처리했습니다. MediaPipe 포즈 ' +
      '추정에서는 프레임 변화가 없을 때 추론을 건너뛰고 GPU로 위임하는 방식으로 최적화해 60fps의 자연스러운 ' +
      '렌더링을 달성했습니다. 이 프로젝트로 국민체육진흥공단 공공데이터 경진대회에서 2위를 수상했습니다.',
    tags: ['Next.js', 'TypeScript', 'MediaPipe', 'Node.js', 'PostgreSQL', 'Docker'],
    images: [
      { src: '/1.beeve/beeve1.jpg', alt: 'Beeve 6-Data 레이더 점수 화면' },
      { src: '/1.beeve/beeve3.jpg', alt: 'Beeve AI 일정 관리 화면' },
      { src: '/1.beeve/beeve4.jpg', alt: 'Beeve 체력 통계 화면' },
      { src: '/1.beeve/beeve2.jpg', alt: 'Beeve 옷 기록 화면' },
    ],
    code: {
      label: 'MediaPipe 포즈 추정 프레임 스킵 최적화',
      language: 'ts',
      code: `// 프레임 변화 없으면 추론 skip
if (video.currentTime === lastVideoTime) {
  requestAnimationFrame(detect);
  return;
}
// GPU 위임으로 추론 속도 향상
PoseLandmarker.createFromOptions({
  baseOptions: {
    delegate: 'GPU', // CPU 대신 GPU 추론
  },
  runningMode: 'VIDEO', // 연속 프레임 최적화
});`,
    },
    liveUrl: '',
    repoUrl: '',
  },
  {
    slug: 'project-two',
    year: '2024',
    title: '프로젝트 투',
    role: '프론트엔드 개발',
    summary: '이 프로젝트가 무엇이고 왜 존재하는지에 대한 한 줄 요약.',
    description:
      '여기에 케이스 스터디 본문이 들어갑니다 — 문제 정의, 접근 방식, 디자인 결정과 그 결과까지, ' +
      '방문자에게 설명하듯 작성해주세요.',
    tags: ['Next.js', 'Framer Motion'],
    images: [{ src: placeholder02, alt: '프로젝트 투 커버' }],
    liveUrl: '',
    repoUrl: '',
  },
  {
    slug: 'project-three',
    year: '2024',
    title: '프로젝트 쓰리',
    role: '비주얼 디자인',
    summary: '이 프로젝트가 무엇이고 왜 존재하는지에 대한 한 줄 요약.',
    description:
      '여기에 케이스 스터디 본문이 들어갑니다 — 문제 정의, 접근 방식, 디자인 결정과 그 결과까지.',
    tags: ['브랜딩', '일러스트레이션'],
    images: [{ src: placeholder03, alt: '프로젝트 쓰리 커버' }],
    liveUrl: '',
    repoUrl: '',
  },
];
