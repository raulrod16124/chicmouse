import {AppPages} from 'utils';
import {
  AppContent,
  AppImage,
  AppWrappercontent,
  AppInfoContent,
  AppTextContent,
  AppTitle,
  AppsList,
  AppsWrapper,
  AppText,
} from './Applications.styles';
import {AppInfo} from 'types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {useIntl} from 'react-intl';
import {useWindowSize} from 'hooks/useWindowSize';
import ClipLoader from 'react-spinners/ClipLoader';
import {Button} from 'common/Button';
import {useNavigate} from 'react-router-dom';
import {colors} from 'tokens/colors';
import {motion} from 'framer-motion';
import {staggerContainer, cardEntrance} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';

export const Applications = () => {
  const intl = useIntl();

  const {smallScreenDetected} = useWindowSize();
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();

  const renderApp = ({name, icon, stars, downloadsNumber}: AppInfo) => {
    const appReady = name !== 'notReady';
    const notReadyText = intl.formatMessage({id: 'comingSoon'});
    const nameText = !appReady ? notReadyText : name;
    const hoverCondition = appReady && !smallScreenDetected;
    const hoverResult = hoverCondition ? 'active' : ' inactive';

    const appName = nameText.charAt(0).toUpperCase() + nameText.slice(1);

    return (
      <motion.li
        key={name}
        variants={reducedMotion ? undefined : cardEntrance}
        style={{listStyle: 'none'}}>
        <AppContent
          hover={hoverResult}
          cursor={smallScreenDetected ? 'pointer' : 'default'}
          onClick={() =>
            smallScreenDetected &&
            name !== 'notReady' &&
            navigate(`/applications/${name.toLowerCase()}`)
          }>
          {appReady && <AppImage src={icon} alt={`${name}-icon`} />}

          <AppInfoContent opacity={name === 'notReady' ? 0.5 : 1}>
            <AppTitle>{appName}</AppTitle>
            <AppTextContent>
              <AppText>{intl.formatMessage({id: 'mobileApp'})}</AppText>
            </AppTextContent>
            <AppWrappercontent>
              <AppTextContent>
                <AppText>{stars}</AppText>
                <FontAwesomeIcon
                  icon={faStar}
                  size={'2xs'}
                  color={colors.accentYellow}
                />
              </AppTextContent>
              {!smallScreenDetected && (
                <Button
                  content={intl.formatMessage({id: 'seeMore'})}
                  variant="primary"
                  disabled={name === 'notReady'}
                  width={100}
                  align="flex-end"
                  fontSize={14}
                  onClick={() =>
                    navigate(`/applications/${name.toLowerCase()}`)
                  }
                />
              )}
            </AppWrappercontent>
          </AppInfoContent>
        </AppContent>
      </motion.li>
    );
  };

  return (
    <AppsWrapper>
      <motion.ul
        variants={reducedMotion ? undefined : staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px',
          width: '1600px',
          minHeight: '60vh',
          justifyContent: 'center',
          marginBottom: '50px',
        }}>
        {AppPages.map((app: AppInfo) => renderApp(app))}
      </motion.ul>
    </AppsWrapper>
  );
};
