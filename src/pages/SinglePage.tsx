import {Hero} from 'sections/Hero/Hero';
import {FeaturedGame} from 'sections/FeaturedGame/FeaturedGame';
import {StudioStatement} from 'sections/StudioStatement/StudioStatement';
import {TeamGlimpse} from 'sections/TeamGlimpse/TeamGlimpse';
import {ContactStrip} from 'sections/ContactStrip/ContactStrip';
import {Footer} from 'common/Footer';

export const SinglePage = () => (
  <>
    <Hero />
    <FeaturedGame />
    <StudioStatement />
    <TeamGlimpse />
    <ContactStrip />
    <Footer />
  </>
);
