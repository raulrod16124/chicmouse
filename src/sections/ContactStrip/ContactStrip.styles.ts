import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {typography} from 'tokens/typography';
import {transitions} from 'tokens/transitions';
import {radius} from 'tokens/radius';
import {device} from 'utils';

export const ContactSection = styled.section`
  background-color: ${colors.bgSecondary};
  padding: ${spacing[30]} ${spacing[6]};
`;

export const ContactInner = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[20]};
  align-items: start;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    gap: ${spacing[12]};
  }
`;

/* ── Left: heading block ──────────────────────────────── */

export const ContactHeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};
  position: sticky;
  top: 96px;

  @media ${device.laptop} {
    position: static;
  }
`;

export const ContactEyebrow = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${colors.accentYellow};
  text-transform: uppercase;
`;

export const ContactHeading = styled.h2`
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.textPrimary};
  line-height: 1.15;
`;

export const ContactTagline = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 600;
  color: ${colors.textPrimary};
  line-height: 1.3;
`;

export const ContactSubText = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: 1.8;
  color: ${colors.textSecondary};
`;

export const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
  margin-top: ${spacing[2]};
`;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  color: ${colors.textSecondary};
  font-size: 14px;
`;

export const ContactInfoIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${radius.md};
  background-color: rgba(58, 134, 255, 0.12);
  color: ${colors.accentBlue};
  flex-shrink: 0;
`;

export const ContactEmail = styled.a`
  font-size: 14px;
  font-weight: 500;
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

/* ── Right: form ──────────────────────────────────────── */

export const ContactFormCard = styled.div`
  background-color: ${colors.surface};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: ${radius.lg};
  padding: ${spacing[8]};

  @media ${device.mobileL} {
    padding: ${spacing[6]};
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
`;

export const ContactFieldGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[4]};

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

export const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};
  font-size: 13px;
  font-weight: 500;
  color: ${colors.textSecondary};
`;

const inputBase = `
  width: 100%;
  background-color: ${colors.bgSecondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${radius.md};
  color: ${colors.textPrimary};
  font-size: ${typography.body.fontSize};
  font-family: inherit;
  transition: border-color ${transitions.fast}, box-shadow ${transitions.fast};
  box-sizing: border-box;

  &::placeholder {
    color: ${colors.textSecondary};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: ${colors.accentBlue};
    box-shadow: 0 0 0 3px rgba(58, 134, 255, 0.15);
  }
`;

export const ContactInput = styled.input`
  ${inputBase}
  height: 52px;
  padding: 0 ${spacing[4]};
`;

export const ContactTextarea = styled.textarea`
  ${inputBase}
  min-height: 160px;
  padding: ${spacing[3]} ${spacing[4]};
  resize: vertical;
`;

export const ContactSubmit = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: ${spacing[2]};
  height: 52px;
  padding: 0 ${spacing[8]};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  background-color: ${colors.accentBlue};
  color: #fff;
  transition:
    filter ${transitions.fast},
    transform ${transitions.fast};

  &:hover:not(:disabled) {
    filter: brightness(1.12);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentBlue};
    outline-offset: 3px;
  }

  @media ${device.laptop} {
    align-self: stretch;
    justify-content: center;
  }
`;

export const ContactFeedback = styled.p<{$isError?: boolean}>`
  font-size: 14px;
  font-weight: 500;
  padding: ${spacing[3]} ${spacing[4]};
  border-radius: ${radius.md};
  background-color: ${({$isError}) =>
    $isError ? 'rgba(255, 107, 107, 0.1)' : 'rgba(107, 203, 119, 0.1)'};
  color: ${({$isError}) => ($isError ? '#ff6b6b' : '#6bcb77')};
  border: 1px solid
    ${({$isError}) =>
      $isError ? 'rgba(255,107,107,0.25)' : 'rgba(107,203,119,0.25)'};
`;
