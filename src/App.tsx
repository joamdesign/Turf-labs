import { AnnouncementBar } from './components/site/AnnouncementBar';
import { SiteHeader } from './components/site/SiteHeader';
import { SiteFooter } from './components/site/SiteFooter';
import { Hero } from './components/sections/Hero/Hero';
import { TheProblem } from './components/sections/TheProblem/TheProblem';
import { ChooseSize } from './components/sections/ChooseSize/ChooseSize';
import { Comparison } from './components/sections/Comparison/Comparison';
import { FounderStory } from './components/sections/FounderStory/FounderStory';
import { Testimonials } from './components/sections/Testimonials/Testimonials';
import { Faq } from './components/sections/Faq/Faq';

/**
 * Homepage. Sections are added in numbered order. Each section carries a `data-screenshot`
 * name for scripts/screenshots.mjs; the hero also sets `data-screenshot-from-top` so its
 * capture includes the announcement bar and header, as the reference does.
 */
export default function App() {
  return (
    <>
      <AnnouncementBar />
      {/* Wrapper so the hero's light rays can start behind the (transparent) header rather than at the section edge. */}
      <div className="page-body">
        <div className="page-rays" aria-hidden="true" />
      <SiteHeader />
      <main id="main">
        <Hero />
        <TheProblem />
        <ChooseSize />
        <Comparison />
        <FounderStory />
        <Testimonials />
        <Faq />
      </main>
      </div>
      <SiteFooter />
    </>
  );
}
