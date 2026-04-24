import {useIntl} from 'react-intl';
import {fadeUp, staggerContainer} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';
import {
  StudioSection,
  StudioInner,
  SectionEyebrow,
  StudioHeadline,
  StudioColumns,
  StudioColumn,
  StudioColumnText,
} from './StudioStatement.styles';

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

  return (
    <StudioSection id="studio">
      <StudioInner>
        <SectionEyebrow>
          {intl.formatMessage({id: 'studioEyebrow'})}
        </SectionEyebrow>

        <StudioHeadline {...headlineAnim}>
          {intl.formatMessage({id: 'studioHeadline'})}
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
      </StudioInner>
    </StudioSection>
  );
};
