import styled from "styled-components";
import { colors } from "tokens/colors";

export const Main = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const DefaultBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${colors.bgPrimary};
`;
