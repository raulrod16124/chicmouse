import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {typography} from 'tokens/typography';
import {transitions} from 'tokens/transitions';
import {radius} from 'tokens/radius';
import {device} from 'utils';

export const ContactSection = styled.section`
  background-color: ${colors.bgPrimary};
  padding: ${spacing[24]} ${spacing[6]};

  @media ${device.tablet} {
    padding: ${spacing[16]} ${spacing[5]};
  }
`;

export const ContactInner = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[12]};
  align-items: center;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    gap: ${spacing[8]};
    text-align: center;
  }
`;

export const ContactHeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
`;

export const ContactHeading = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800;
  color: ${colors.textPrimary};
  line-height: 1.15;
`;

export const ContactSubText = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: ${typography.body.lineHeight};
  color: ${colors.textSecondary};
`;

export const ContactEmail = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[2]};
  font-size: 15px;
  font-weight: 600;
  color: ${colors.accentYellow};
  text-decoration: none;
  transition: opacity ${transitions.fast};

  &:hover {
    opacity: 0.8;
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentYellow};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
`;

export const ContactInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 ${spacing[4]};
  background-color: ${colors.bgSecondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${radius.md};
  color: ${colors.textPrimary};
  font-size: ${typography.body.fontSize};
  font-family: inherit;
  transition: border-color ${transitions.fast};
  box-sizing: border-box;

  &::placeholder {
    color: ${colors.textSecondary};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border-color: ${colors.accentYellow};
  }
`;

export const ContactTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${spacing[3]} ${spacing[4]};
  background-color: ${colors.bgSecondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${radius.md};
  color: ${colors.textPrimary};
  font-size: ${typography.body.fontSize};
  font-family: inherit;
  resize: vertical;
  transition: border-color ${transitions.fast};
  box-sizing: border-box;

  &::placeholder {
    color: ${colors.textSecondary};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border-color: ${colors.accentYellow};
  }
`;

export const ContactSubmit = styled.button`
  align-self: flex-start;
  height: 48px;
  padding: 0 ${spacing[6]};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  background-color: ${colors.accentYellow};
  color: ${colors.bgPrimary};
  transition:
    opacity ${transitions.fast},
    transform ${transitions.fast};

  &:hover:not(:disabled) {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentYellow};
    outline-offset: 3px;
  }

  @media ${device.laptop} {
    align-self: center;
  }
`;

export const ContactFeedback = styled.p<{$isError?: boolean}>`
  font-size: 14px;
  font-weight: 500;
  color: ${({$isError}) => ($isError ? '#ff6b6b' : '#6bcb77')};
`;
