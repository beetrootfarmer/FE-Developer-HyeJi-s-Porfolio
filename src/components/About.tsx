import { motion } from 'framer-motion';
import './About.css';

const facts = [
  { label: 'Background', value: 'B.A. in Design' },
  { label: 'Now', value: 'Frontend Developer' },
  { label: 'Tools', value: 'React · TypeScript · Figma' },
  { label: 'Based in', value: 'Seoul, KR' },
];

export function About() {
  return (
    <section className="about section" id="about">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        About
      </motion.p>

      <motion.h2
        className="about-statement"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        I studied design before I ever wrote a line of code — that's still how
        I think. <span className="about-statement-dim">Every interface starts
        as a composition problem, not a technical one.</span>
      </motion.h2>

      <div className="about-facts">
        {facts.map((fact, index) => (
          <motion.div
            className="about-fact"
            key={fact.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <span className="about-fact-label">{fact.label}</span>
            <span className="about-fact-value">{fact.value}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
