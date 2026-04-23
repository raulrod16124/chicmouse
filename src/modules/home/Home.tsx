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

export const Home = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const {smallScreenDetected} = useWindowSize();

  const heroText = (
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
  );

  const heroImage = (
    <HomeImageWrapper>
      <HomeImage src={chicmouseImage} alt="elegant-mouse" />
    </HomeImageWrapper>
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
