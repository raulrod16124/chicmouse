import {useIntl} from 'react-intl';
import {Users, Compass, Cpu} from 'lucide-react';
import {fadeUp, staggerContainer, cardEntrance} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';
import {
  StudioSection,
  StudioInner,
  SectionEyebrow,
  SectionAccent,
  StudioHeadline,
  StudioColumns,
  StudioColumn,
  StudioColumnText,
  PillarGrid,
  PillarCard,
  PillarIconWrapper,
  PillarTitle,
  PillarBody,
} from './StudioStatement.styles';

const PILLARS = [
  {icon: Users, titleKey: 'pillar1Title', bodyKey: 'pillar1Body'},
  {icon: Compass, titleKey: 'pillar2Title', bodyKey: 'pillar2Body'},
  {icon: Cpu, titleKey: 'pillar3Title', bodyKey: 'pillar3Body'},
] as const;

export const StudioStatement = () => {
  const intl = useIntl();
  const reducedMotion = useReducedMotion();

  const headlineAnim = reducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: {once: true, margin: '-60px'},
      };

  const columnsAnim = reducedMotion
    ? {}
    : {
        variants: staggerContainer,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: {once: true, margin: '-60px'},
      };

  const pillarsAnim = reducedMotion
    ? {}
    : {
        variants: staggerContainer,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: {once: true, margin: '-40px'},
      };

  const headline = intl.formatMessage({id: 'studioHeadline'});
  // Split "Small team. Obsessive quality." — accent the part after the first period
  const dotIndex = headline.indexOf('.');
  const firstPart =
    dotIndex !== -1 ? headline.slice(0, dotIndex + 1) : headline;
  const secondPart = dotIndex !== -1 ? headline.slice(dotIndex + 1) : '';

  return (
    <StudioSection id="studio">
      <StudioInner>
        <SectionEyebrow>
          {intl.formatMessage({id: 'studioEyebrow'})}
        </SectionEyebrow>

        <StudioHeadline {...headlineAnim}>
          {firstPart}
          {secondPart && <SectionAccent>{secondPart}</SectionAccent>}
        </StudioHeadline>

        <StudioColumns {...columnsAnim}>
          <StudioColumn>
            <StudioColumnText>
              {intl.formatMessage({id: 'studioTextLeft'})}
            </StudioColumnText>
          </StudioColumn>
          <StudioColumn>
            <StudioColumnText>
              {intl.formatMessage({id: 'studioTextRight'})}
            </StudioColumnText>
          </StudioColumn>
        </StudioColumns>

        <PillarGrid {...pillarsAnim}>
          {PILLARS.map(({icon: Icon, titleKey, bodyKey}) => (
            <PillarCard
              key={titleKey}
              {...(reducedMotion ? {} : {variants: cardEntrance})}>
              <PillarIconWrapper>
                <Icon size={22} />
              </PillarIconWrapper>
              <PillarTitle>{intl.formatMessage({id: titleKey})}</PillarTitle>
              <PillarBody>{intl.formatMessage({id: bodyKey})}</PillarBody>
            </PillarCard>
          ))}
        </PillarGrid>
      </StudioInner>
    </StudioSection>
  );
};
