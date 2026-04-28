import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';
import {typography, transitions} from 'tokens';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${colors.bgSecondary};
  border-top: 1px solid ${colors.surface};
  @media ${device.laptop} {
    max-width: 100vw;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 1000px;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 90%;
  }
`;

export const TextLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const TextLink = styled(Link)`
  font-size: ${typography.caption.fontSize};
  color: ${colors.textSecondary};
  text-decoration: none;
  transition: color ${transitions.fast};
  &:hover {
    color: ${colors.textPrimary};
  }
  @media ${device.mobileL} {
    font-size: ${typography.fontSize.xs};
  }
`;

export const FooterText = styled.p`
  font-size: ${typography.caption.fontSize};
  color: ${colors.textSecondary};
  @media ${device.mobileL} {
    font-size: ${typography.fontSize.xs};
  }
`;
