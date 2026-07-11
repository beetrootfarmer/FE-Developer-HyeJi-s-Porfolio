import { motion } from 'framer-motion';
import './Footer.css';

const links = [
  { label: 'Email', href: 'mailto:hello@example.com' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
];

export function Footer() {
  return (
    <footer className="footer section" id="contact">
      <motion.h2
        className="footer-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        Let's make
        <br />
        something.
      </motion.h2>

      <div className="footer-links">
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" data-cursor-hover>
            {link.label}
          </a>
        ))}
      </div>

      <p className="footer-note">© {new Date().getFullYear()} HyeJi. Built with React, Vite & Framer Motion.</p>
    </footer>
  );
}
