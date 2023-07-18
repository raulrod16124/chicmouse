import { useIntl } from "react-intl"
import { FooterContent, FooterText, FooterWrapper, PrivacyPolicyLink } from "./Footer.styles"

export const Footer = () => {
    const intl = useIntl();

    return (
        <FooterWrapper>
            <FooterContent>
                <PrivacyPolicyLink to={"/privacy-policy"}>
                    {intl.formatMessage({id:"privacyPolicy"})}
                </PrivacyPolicyLink>
                <FooterText>&copy; 2023 {intl.formatMessage({id:"allRightsReserved"})}</FooterText>
            </FooterContent>
        </FooterWrapper>
    )
}
