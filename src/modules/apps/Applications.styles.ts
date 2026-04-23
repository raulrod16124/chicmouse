import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';
import {radius, transitions, typography} from 'tokens';

export const AppsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AppsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 1600px;
  min-height: 60vh;
  justify-content: center;
  margin-bottom: 50px;
  @media ${device.tablet} {
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: column;
    padding: 0;
  }
`;

export const AppContent = styled.div<{
  hover: string;
  cursor: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  padding: 16px;
  width: auto;
  min-width: 200px;
  max-width: 500px;
  background-color: ${colors.bgSecondary};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: ${radius.md};
  margin: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  transition:
    transform ${transitions.base},
    box-shadow ${transitions.base};
  cursor: ${props => props.cursor && props.cursor};

  &:hover {
    transform: ${props =>
      props.hover === 'active' ? 'translateY(-4px)' : 'none'};
    box-shadow: ${props =>
      props.hover === 'active'
        ? '0 8px 28px rgba(0, 0, 0, 0.55)'
        : '0 4px 16px rgba(0, 0, 0, 0.4)'};
  }

  @media ${device.tablet} {
    width: auto;
    max-width: fit-content;
    margin: 0 auto 50px auto;
  }
`;

export const AppImage = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 10px;
  margin: auto 0;
`;

export const AppInfoContent = styled.div<{opacity: number}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  opacity: ${props => props.opacity && props.opacity};
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const AppTitle = styled.span`
  font-size: ${typography.h3.fontSize};
  font-weight: ${typography.h3.fontWeight};
  padding: 5px 10px;
  color: ${colors.textPrimary};
  @media ${device.laptop} {
    padding: 5px 0;
    width: 100%;
  }
`;

export const AppWrappercontent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 10px 0;
  @media ${device.laptop} {
    justify-content: flex-start;
    margin: 0;
  }
`;

export const AppTextContent = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 5px -5px;
  padding: 0 10px;
  @media ${device.laptop} {
    margin: 0;
    padding: 0;
  }
`;

export const AppText = styled.p`
  font-size: 12px;
  margin: 0 5px;
  color: ${colors.textSecondary};
  @media ${device.laptop} {
    font-size: 10px;
  }
`;
