import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';
import {typography, transitions} from 'tokens';

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${colors.bgSecondary};
  border-top: 1px solid ${colors.surface};
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 1000px;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 90%;
  }
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: auto;
    padding: 16px 0;
  }
`;

export const TextLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 40%;
  @media ${device.tablet} {
    width: auto;
  }
`;

export const TextLink = styled(Link)`
  font-size: ${typography.caption.fontSize};
  color: ${colors.textSecondary};
  text-decoration: none;
  transition: color ${transitions.fast};
  &:hover {
    color: ${colors.textPrimary};
  }
`;

export const FooterText = styled.p`
  font-size: ${typography.caption.fontSize};
  color: ${colors.textSecondary};
`;
