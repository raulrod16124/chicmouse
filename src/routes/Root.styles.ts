import styled from 'styled-components';
import {colors} from 'tokens/colors';

export const BodyWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${colors.bgPrimary};
  color: ${colors.textPrimary};
`;

export const PageContent = styled.div`
  flex: 1;
  padding-top: 64px;
`;
