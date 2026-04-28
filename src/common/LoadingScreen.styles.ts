import styled, {keyframes} from 'styled-components';
import {colors} from 'tokens/colors';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
`;

export const LoadingScreenWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${colors.bgPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  z-index: 9999;
`;

export const LoadingLogo = styled.img`
  width: 80px;
  height: 40px;
  object-fit: contain;
`;

export const LoadingDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.accentYellow};
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

export const LoadingDotsWrapper = styled.div`
  display: flex;
  gap: 8px;

  ${LoadingDot}:nth-child(2) {
    animation-delay: 0.2s;
  }
  ${LoadingDot}:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
