import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Hero} from 'sections/Hero/Hero';
import {FeaturedGame} from 'sections/FeaturedGame/FeaturedGame';
import {StudioStatement} from 'sections/StudioStatement/StudioStatement';
import {ContactStrip} from 'sections/ContactStrip/ContactStrip';
import {Footer} from 'common/Footer';

export const SinglePage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as {scrollTo?: string} | null)?.scrollTo;
    if (!scrollTo) return;
    const timeout = setTimeout(() => {
      document.getElementById(scrollTo)?.scrollIntoView({behavior: 'smooth'});
    }, 80);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <FeaturedGame />
      <StudioStatement />
      <ContactStrip />
      <Footer />
    </>
  );
};
