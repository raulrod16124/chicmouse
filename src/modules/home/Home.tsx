import {useIntl} from 'react-intl';
import {
  HeroContent,
  HomeContainer,
  HomeImage,
  HomeImageWrapper,
  HomeSubtext,
  HomeTitleAccent,
  HomeTitle,
  HomeWrapper,
} from './Home.styles';
import {useWindowSize} from 'hooks/useWindowSize';
import chicmouseImage from 'assets/chicmouseImage.png';
import {Button} from 'common/Button';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeUp, fadeIn} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';

export const Home = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const {smallScreenDetected} = useWindowSize();
  const reducedMotion = useReducedMotion();

  const heroText = (
    <motion.div
      variants={reducedMotion ? undefined : fadeUp}
      initial="hidden"
      animate="visible">
      <HeroContent>
        <div>
          <HomeTitleAccent />
          <HomeTitle>{intl.formatMessage({id: 'homeTitle'})}</HomeTitle>
        </div>
        <HomeSubtext>{intl.formatMessage({id: 'homeText'})}</HomeSubtext>
        <Button
          content={intl.formatMessage({id: 'seeOurGames'})}
          variant="primary"
          onClick={() => navigate('/applications')}
        />
      </HeroContent>
    </motion.div>
  );

  const heroImage = (
    <motion.div
      variants={reducedMotion ? undefined : fadeIn}
      initial="hidden"
      animate="visible"
      transition={{delay: 0.15}}>
      <HomeImageWrapper>
        <HomeImage src={chicmouseImage} alt="elegant-mouse" />
      </HomeImageWrapper>
    </motion.div>
  );

  return (
    <HomeWrapper data-testid="home-page-id">
      <HomeContainer>
        {smallScreenDetected ? (
          <>
            {heroImage}
            {heroText}
          </>
        ) : (
          <>
            {heroText}
            {heroImage}
          </>
        )}
      </HomeContainer>
    </HomeWrapper>
  );
};
