import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {transitions} from 'tokens/transitions';
import {radius} from 'tokens/radius';

/* ── Page wrapper ──────────────────────────────────────── */

export const PrivacyPolicyWrapper = styled.div`
  background-color: ${colors.bgPrimary};
  min-height: 100vh;
`;

/* ── Hero ──────────────────────────────────────────────── */

export const PolicyHero = styled.div`
  background: linear-gradient(135deg, ${colors.bgSecondary} 0%, ${colors.surface} 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: ${spacing[12]} ${spacing[6]} ${spacing[8]};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${spacing[4]};

  @media ${device.mobileL} {
    padding: ${spacing[8]} ${spacing[4]};
  }
`;

export const PolicyHeroIconWrapper = styled.div`
  width: 72px;
  height: 72px;
  background: rgba(58, 134, 255, 0.12);
  border: 1px solid rgba(58, 134, 255, 0.3);
  border-radius: ${radius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.accentBlue};
`;

export const PolicyHeroEyebrow = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.accentYellow};
  background: rgba(255, 200, 87, 0.1);
  border: 1px solid rgba(255, 200, 87, 0.25);
  border-radius: ${radius.full};
  padding: 5px ${spacing[3]};
`;

export const PolicyHeroTitle = styled.h1`
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800;
  color: ${colors.textPrimary};
  line-height: 1.15;
`;

export const PolicyHeroMeta = styled.p`
  font-size: 13px;
  color: ${colors.textSecondary};
  opacity: 0.7;
`;

/* ── Content area ──────────────────────────────────────── */

export const PrivacyPolicyContent = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: ${spacing[8]} ${spacing[6]} ${spacing[16]};
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.mobileL} {
    padding: ${spacing[6]} ${spacing[4]} ${spacing[12]};
    gap: ${spacing[4]};
  }
`;

export const PolicyIntro = styled.div`
  background: rgba(58, 134, 255, 0.05);
  border: 1px solid rgba(58, 134, 255, 0.12);
  border-radius: ${radius.md};
  padding: ${spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

export const PolicySection = styled.div`
  background: ${colors.bgSecondary};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: ${radius.lg};
  padding: ${spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};

  @media ${device.mobileL} {
    padding: ${spacing[6]} ${spacing[4]};
  }
`;

export const PolicySectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  padding-bottom: ${spacing[4]};
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: ${spacing[2]};
`;

export const PolicySectionIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(58, 134, 255, 0.1);
  border: 1px solid rgba(58, 134, 255, 0.2);
  border-radius: ${radius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.accentBlue};
  flex-shrink: 0;
`;

/* ── Typography ────────────────────────────────────────── */

export const TextTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 800;
  color: ${colors.textPrimary};
  margin-bottom: ${spacing[6]};
`;

export const TextSubtitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${colors.accentBlue};
  line-height: 1.3;
`;

export const TextSecondarySubtitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.accentYellow};
  margin-top: ${spacing[2]};
`;

export const TextTertiarySubtitle = styled.h5`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  padding-left: ${spacing[3]};
  border-left: 2px solid rgba(58, 134, 255, 0.4);
  margin-top: ${spacing[2]};
`;

export const Text = styled.p<{margin?: string}>`
  color: ${colors.textSecondary};
  margin: ${props => props.margin && props.margin};
  font-size: 15px;
  line-height: 1.75;

  & a {
    color: ${colors.accentBlue};
    text-decoration: none;
    transition: color ${transitions.fast};
    &:hover {
      color: ${colors.textPrimary};
    }
  }
`;

export const TextList = styled.ul<{margin?: string}>`
  margin: ${props => props.margin && props.margin};
  padding-left: ${spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]};

  & li {
    color: ${colors.textSecondary};
    font-size: 15px;
    line-height: 1.75;
  }
`;
