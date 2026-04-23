import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';
import {transitions} from 'tokens';

type TFlag = {
  selected: boolean;
  onClick: (language: string) => void;
};

export const FlagsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

export const Flag = styled.img<TFlag>`
  width: 24px;
  height: 24px;
  margin: 0 8px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid
    ${props => (props.selected ? colors.accentYellow : 'transparent')};
  outline: ${props =>
    props.selected ? `1px solid ${colors.accentYellow}` : 'none'};
  outline-offset: 1px;
  opacity: ${props => (props.selected ? 1 : 0.6)};
  transition:
    opacity ${transitions.fast},
    border-color ${transitions.fast},
    transform ${transitions.fast};

  &:hover {
    opacity: 1;
    transform: ${props => !props.selected && 'scale(1.15)'};
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentYellow};
    outline-offset: 3px;
  }

  @media ${device.laptop} {
    margin: 0 4px;
    width: 20px;
    height: 20px;
  }
`;
