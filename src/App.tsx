import { Cursor } from './components/Cursor';
import { ScrollProgress } from './components/ScrollProgress';
import { LocaleToggle } from './components/LocaleToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <LocaleToggle />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
