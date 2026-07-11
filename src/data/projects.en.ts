import type { Project } from './types';
import { placeholder02, placeholder03 } from './placeholders';

export const projectsEn: Project[] = [
  {
    slug: 'beeve',
    year: '2025',
    title: 'Beeve',
    role: 'PM & Frontend',
    summary:
      "A fitness-measurement service built on Korea's national fitness public dataset — heart rate and reaction time, measured with nothing but a phone's camera and sensors.",
    description:
      "Ongoing since September 2025, built as PM and frontend engineer: a service that measures " +
      "physical fitness using only a smartphone's camera and sensors, powered by Korea's " +
      "national fitness public dataset — no extra hardware required. For heart rate, I designed an " +
      "rPPG pipeline from scratch: the MediaStream API and a torch constraint turn on the flash, and " +
      "changes in the red-channel pixel values become a blood-flow signal, denoised with a moving " +
      "average and split across three sub-intervals for a robust reading. For reaction time, " +
      "DeviceMotionEvent tracks composite acceleration to auto-detect a stable starting position, a " +
      "Web Audio API oscillator plays the countdown cue, and performance.now() times the response — " +
      "any reaction under 100ms is auto-rejected as a false start. Pose estimation was optimized by " +
      "skipping inference when a video frame hasn't changed and delegating to the GPU, bringing " +
      "rendering to a smooth 60fps. The project won 2nd place at the Korea Sports Promotion " +
      "Foundation's public data competition.",
    tags: ['Next.js', 'TypeScript', 'MediaPipe', 'Node.js', 'PostgreSQL', 'Docker'],
    images: [
      { src: '/1.beeve/beeve1.png', alt: 'Beeve 6-Data radar score screen' },
      { src: '/1.beeve/beeve3.png', alt: 'Beeve AI daily schedule screen' },
      { src: '/1.beeve/beeve4.png', alt: 'Beeve fitness stats screen' },
      { src: '/1.beeve/beeve2.png', alt: 'Beeve outfit log screen' },
    ],
    code: {
      label: 'Pose estimation frame-skip optimization',
      language: 'ts',
      code: `// Skip inference if the frame hasn't changed
if (video.currentTime === lastVideoTime) {
  requestAnimationFrame(detect);
  return;
}
// Delegate to GPU for faster inference
PoseLandmarker.createFromOptions({
  baseOptions: {
    delegate: 'GPU', // GPU instead of CPU
  },
  runningMode: 'VIDEO', // optimized for continuous frames
});`,
    },
    liveUrl: '',
    repoUrl: '',
  },
  {
    slug: 'project-two',
    year: '2024',
    title: 'Project Two',
    role: 'Frontend Engineering',
    summary: 'A short one-line summary of what this project is and why it exists.',
    description:
      'Longer case-study text goes here — the problem, your approach, the ' +
      'design decisions you made, and the outcome.',
    tags: ['Next.js', 'Framer Motion'],
    images: [{ src: placeholder02, alt: 'Project Two cover' }],
    liveUrl: '',
    repoUrl: '',
  },
  {
    slug: 'project-three',
    year: '2024',
    title: 'Project Three',
    role: 'Visual Design',
    summary: 'A short one-line summary of what this project is and why it exists.',
    description:
      'Longer case-study text goes here — the problem, your approach, the ' +
      'design decisions you made, and the outcome.',
    tags: ['Branding', 'Illustration'],
    images: [{ src: placeholder03, alt: 'Project Three cover' }],
    liveUrl: '',
    repoUrl: '',
  },
];
