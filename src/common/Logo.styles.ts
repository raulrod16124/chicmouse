import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {device} from 'utils';
import {transitions} from 'tokens';

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const LogoLink = styled(Link)`
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  margin-top: 15px;
  width: 50px;
  height: 25px;
  transition: transform ${transitions.fast};
  &:hover {
    transform: scale(1.05);
  }
  @media ${device.laptop} {
    &:hover {
      transform: scale(1);
    }
  }
`;
