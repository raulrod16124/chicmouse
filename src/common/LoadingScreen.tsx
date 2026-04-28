import logoAcronym from 'assets/logo.webp';
import {
  LoadingDot,
  LoadingDotsWrapper,
  LoadingLogo,
  LoadingScreenWrapper,
} from './LoadingScreen.styles';

export const LoadingScreen = () => {
  return (
    <LoadingScreenWrapper aria-label="Loading" role="status">
      <LoadingLogo src={logoAcronym} alt="ChicMouse Studio" />
      <LoadingDotsWrapper>
        <LoadingDot />
        <LoadingDot />
        <LoadingDot />
      </LoadingDotsWrapper>
    </LoadingScreenWrapper>
  );
};
