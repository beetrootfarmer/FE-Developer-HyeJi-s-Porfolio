import { motion } from 'framer-motion';
import { useLocale } from '../i18n/LocaleContext';
import './Hero.css';

const copy = {
  en: {
    titleLine1: 'HYE JI',
    titleAccent: 'ASKS QUESTIONS',
    tagline: 'Art came from questions. So does good code.',
    sub: 'A fine arts major turned 3-year frontend developer, still asking why — now exploring better answers in code.',
  },
  ko: {
    titleLine1: '혜지는',
    titleAccent: '질문합니다',
    tagline: '작품은 질문에서 나왔다. 좋은 코드도 질문에서 나온다.',
    sub: '순수예술을 전공했고, 지금은 3년차 프론트엔드 개발자입니다. 여전히 왜냐고 묻고, 이제는 코드로 더 나은 답을 탐구합니다.',
  },
} as const;

export function Hero() {
  const { locale } = useLocale();
  const text = copy[locale];

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Design → Frontend
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {text.titleLine1}
          <br />
          <span className="hero-title-accent">{text.titleAccent}</span>
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {text.tagline}
        </motion.p>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {text.sub}
        </motion.p>
      </div>

      <motion.div
        className="hero-figure"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        aria-hidden="true"
      >
        <motion.div
          className="figure-shape figure-circle"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="figure-shape figure-square"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="figure-shape figure-blob"
          animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="figure-face" />
      </motion.div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span>Scroll</span>
        <motion.span
          className="scroll-cue-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
