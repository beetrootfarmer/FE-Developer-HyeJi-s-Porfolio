import { Cursor } from './components/Cursor';
import { ScrollProgress } from './components/ScrollProgress';
import { LocaleToggle } from './components/LocaleToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
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
      <Projects />
      <Footer />
    </>
  );
}

export default App;
