import type { Project } from './types';
import { placeholder03 } from './placeholders';
import { withBase } from '../lib/asset';

export const projectsEn: Project[] = [
  {
    slug: 'beeve',
    year: '2025',
    title: 'Beeve',
    role: 'PM & Frontend',
    summary:
      "A fitness-measurement service built on Korea's national fitness public dataset — heart rate and reaction time, measured with nothing but a phone's camera and sensors. Now live on the iOS App Store.",
    description:
      "Ongoing since September 2025, built as PM and frontend engineer: a service that measures " +
      "physical fitness using only a smartphone's camera and sensors, powered by Korea's " +
      "national fitness public dataset. The project won 2nd place at the Korea Sports Promotion " +
      "Foundation's public data competition and has since launched on the iOS App Store. Below are " +
      "three core problems from development and how I solved them.",
    tags: ['Next.js', 'TypeScript', 'MediaPipe', 'Node.js', 'PostgreSQL', 'Docker'],
    images: [
      { src: withBase('1.beeve/beeve1.jpg'), alt: 'Beeve 6-Data radar score screen' },
      { src: withBase('1.beeve/beeve3.jpg'), alt: 'Beeve AI daily schedule screen' },
      { src: withBase('1.beeve/beeve4.jpg'), alt: 'Beeve fitness stats screen' },
      { src: withBase('1.beeve/beeve2.jpg'), alt: 'Beeve outfit log screen' },
    ],
    problems: [
      {
        title: 'Heart rate via rPPG',
        problem:
          "Measuring heart rate from nothing but a mobile browser meant solving for signal noise and " +
          "lighting conditions. Existing rPPG libraries didn't work within mobile browser constraints, " +
          "so I built the pipeline from scratch.",
        solution:
          "The MediaStream API and a torch constraint turn on the flash, and per-frame changes in the " +
          "red-channel pixel average become a blood-flow signal. A 5-point moving average filters noise, " +
          "and peaks are detected using a dynamic threshold (80% of the max) with a minimum interval, " +
          "then inverted into BPM. The 15-second window is split into three sub-intervals, each computed " +
          "independently and averaged for a noise-resistant reading.",
        result: 'Valid-range filtering drops outliers, and the three-interval average keeps readings stable.',
      },
      {
        title: 'Reaction time via accelerometer',
        problem:
          "Measuring reaction time with nothing but a phone's sensors meant handling per-device " +
          "permission models and sensor noise. iOS 13+'s DeviceMotionEvent permission model " +
          "(requestPermission) and the Android branch were the trickiest part.",
        solution:
          "Composite acceleration (√x²+y²+z²) auto-starts a measurement once stability crosses a 90-point " +
          "threshold. A Web Audio API oscillator plays the countdown cue, and performance.now() times the " +
          "gap between the cue and the detected movement. useRef sidesteps a stale-closure bug, and any " +
          "reaction under 100ms is auto-rejected as a false start at the code level.",
        result: 'The best of three valid readings is kept, and false starts are auto-invalidated for reliability.',
      },
      {
        title: 'Pose estimation rendering optimization',
        problem:
          "Calling detectForVideo() on every frame overloaded the CPU/GPU and dropped frames. setInterval " +
          "made it worse, since it runs independently of the browser's render cycle and drifts out of sync.",
        solution:
          "Inference is skipped entirely when the video frame hasn't changed, and delegated to the GPU " +
          "for the frames that do run.",
        result: 'Removing redundant inference brought rendering to a smooth, consistent 60fps.',
        code: {
          label: 'Frame skip + GPU delegation',
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
      },
    ],
    liveUrl: 'https://apps.apple.com/kr/app/beeve/id6759857773',
    repoUrl: '',
  },
  {
    slug: 'myfarm',
    year: '2025',
    title: 'MyFarm+',
    role: 'Frontend',
    summary:
      'A hybrid smart-farm management app built at Genesis Nest — from map marker rendering performance to a token-security architecture overhaul.',
    description:
      'Built at Genesis Nest as a frontend engineer between May and August 2025: a hybrid app for ' +
      'managing smart farms. From map marker rendering performance to cross-platform shared ' +
      'components, here are four core problems from development and how I solved them.',
    tags: ['Next.js', 'TypeScript', 'Shadcn/CVA', 'App Bridge'],
    images: [
      { src: withBase('2.myFarm/myfarm1.png'), alt: 'MyFarm+ login screen' },
      { src: withBase('2.myFarm/myfarm2.png'), alt: 'MyFarm+ phone verification screen' },
      { src: withBase('2.myFarm/myfarm3.png'), alt: 'MyFarm+ password setup screen' },
      { src: withBase('2.myFarm/myfarm4.png'), alt: 'MyFarm+ map-based work list screen' },
    ],
    problems: [
      {
        title: 'Map marker rendering optimization',
        problem:
          'Re-rendering every field marker on the map on each update caused a real performance hit. ' +
          "I looked at detecting only the markers whose data had actually changed, instead of " +
          "re-rendering the whole set.",
        solution:
          'Memoized the marker-rendering function with useCallback so only markers with changed data ' +
          'get updated.',
        result: 'Only changed markers re-render now, eliminating unnecessary renders.',
      },
      {
        title: 'Per-device safe-area handling via App Bridge',
        problem:
          'Notch and home-bar heights vary by device, so the app bar padding broke inconsistently ' +
          'across devices.',
        solution:
          'Used App Bridge to pass the native safe-area values through to the web view and adjust ' +
          'padding dynamically.',
        result: 'UI stayed consistent across every device.',
      },
      {
        title: 'Token security architecture',
        problem:
          'The existing localStorage approach left tokens exposed to theft via XSS. I made the case ' +
          'to the team for adopting a BFF pattern.',
        solution:
          'Used a Next.js Route Handler as the BFF and switched to HttpOnly, Secure, ' +
          'SameSite=strict cookies.',
        result: 'Blocked client-side JS from ever touching the token — zero token-related incidents since launch.',
      },
      {
        title: 'Cross-platform shared components',
        problem:
          'UI diverged between the app and web environments, and duplicate code kept piling up. I ' +
          'looked at a Shadcn UI + CVA foundation for components that work the same regardless of ' +
          'platform.',
        solution: 'Built a 33-component shared library, cutting duplicate code by roughly 40%.',
        result: 'A reusable component library that works across both the app and the web.',
      },
    ],
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
