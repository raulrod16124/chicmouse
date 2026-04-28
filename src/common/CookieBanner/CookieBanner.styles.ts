import styled from 'styled-components';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {radius} from 'tokens/radius';
import {transitions} from 'tokens/transitions';
import {device} from 'utils';

export const BannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${colors.bgSecondary};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.4);
  padding: ${spacing[4]} ${spacing[6]};
  display: flex;
  align-items: center;
  gap: ${spacing[4]};

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: flex-start;
    padding: ${spacing[4]};
    gap: ${spacing[3]};
  }
`;

export const BannerIcon = styled.div`
  flex-shrink: 0;
  color: ${colors.accentYellow};
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
    display: none;
  }
`;

export const BannerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing[1]};
`;

export const BannerTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${colors.textPrimary};
`;

export const BannerText = styled.p`
  font-size: 0.8rem;
  color: ${colors.textSecondary};
  line-height: 1.5;

  a {
    color: ${colors.accentBlue};
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: opacity ${transitions.fast};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const BannerActions = styled.div`
  display: flex;
  gap: ${spacing[2]};
  flex-shrink: 0;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const AcceptButton = styled.button`
  background-color: ${colors.accentBlue};
  color: #fff;
  border: none;
  border-radius: ${radius.sm};
  padding: ${spacing[2]} ${spacing[4]};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity ${transitions.fast};
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }

  @media ${device.mobileL} {
    flex: 1;
  }
`;

export const RejectButton = styled.button`
  background-color: transparent;
  color: ${colors.textSecondary};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${radius.sm};
  padding: ${spacing[2]} ${spacing[4]};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    border-color ${transitions.fast},
    color ${transitions.fast};
  white-space: nowrap;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    color: ${colors.textPrimary};
  }

  @media ${device.mobileL} {
    flex: 1;
  }
`;
