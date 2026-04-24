import {useIntl} from 'react-intl';
import {cardEntrance} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';
import {colors} from 'tokens/colors';
import mouseCharacter1 from 'assets/mouseCharacter_1.webp';
import mouseCharacter2 from 'assets/mouseCharacter_2.webp';
import {
  TeamSection,
  TeamInner,
  SectionEyebrow,
  TeamGrid,
  TeamCard,
  TeamCardHeader,
  TeamAvatar,
  TeamMemberName,
  TeamMemberRole,
  TeamMemberBio,
  TeamCharacterImg,
} from './TeamGlimpse.styles';

interface ITeamMember {
  initials: string;
  nameKey: string;
  roleKey: string;
  bioKey: string;
  accent: string;
  characterImg: string;
  delay: number;
}

const TEAM_MEMBERS: ITeamMember[] = [
  {
    initials: 'TP',
    nameKey: 'tpName',
    roleKey: 'tpRole',
    bioKey: 'tpBio',
    accent: colors.accentYellow,
    characterImg: mouseCharacter1,
    delay: 0,
  },
  {
    initials: 'TD',
    nameKey: 'tdName',
    roleKey: 'tdRole',
    bioKey: 'tdBio',
    accent: colors.accentBlue,
    characterImg: mouseCharacter2,
    delay: 0.1,
  },
];

export const TeamGlimpse = () => {
  const intl = useIntl();
  const reducedMotion = useReducedMotion();

  return (
    <TeamSection id="team">
      <TeamInner>
        <SectionEyebrow>
          {intl.formatMessage({id: 'teamEyebrow'})}
        </SectionEyebrow>

        <TeamGrid>
          {TEAM_MEMBERS.map(member => (
            <TeamCard
              key={member.initials}
              $accent={member.accent}
              {...(reducedMotion
                ? {}
                : {
                    variants: cardEntrance,
                    initial: 'hidden' as const,
                    whileInView: 'visible' as const,
                    viewport: {once: true, margin: '-60px'},
                    transition: {delay: member.delay},
                  })}>
              <TeamCardHeader>
                <TeamAvatar $accent={member.accent}>
                  {member.initials}
                </TeamAvatar>
                <div>
                  <TeamMemberName>
                    {intl.formatMessage({id: member.nameKey})}
                  </TeamMemberName>
                  <TeamMemberRole>
                    {intl.formatMessage({id: member.roleKey})}
                  </TeamMemberRole>
                </div>
              </TeamCardHeader>

              <TeamMemberBio>
                {intl.formatMessage({id: member.bioKey})}
              </TeamMemberBio>

              <TeamCharacterImg
                src={member.characterImg}
                alt={intl.formatMessage({id: member.nameKey})}
                loading="lazy"
                width={200}
                height={200}
              />
            </TeamCard>
          ))}
        </TeamGrid>
      </TeamInner>
    </TeamSection>
  );
};
