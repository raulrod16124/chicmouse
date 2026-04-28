import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {typography} from 'tokens/typography';
import {transitions} from 'tokens/transitions';
import {radius} from 'tokens/radius';

export const ErrorPageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[12]} ${spacing[4]};
`;

export const ErrorPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[6]};
  text-align: center;
  max-width: 480px;
`;

export const RedirectButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${colors.accentBlue};
  color: ${colors.textPrimary};
  font-size: ${typography.body.fontSize};
  font-weight: 600;
  text-decoration: none;
  padding: ${spacing[3]} ${spacing[6]};
  border-radius: ${radius.full};
  transition: opacity ${transitions.fast};
  &:hover {
    opacity: 0.85;
  }
`;

export const ErrorPageImg = styled.img`
  width: 160px;
  height: auto;
`;

export const ErrorPageText = styled.p`
  font-size: ${typography.fontSize['2xl']};
  font-weight: 600;
  color: ${colors.textPrimary};
  @media ${device.mobileL} {
    font-size: ${typography.body.fontSize};
  }
`;
