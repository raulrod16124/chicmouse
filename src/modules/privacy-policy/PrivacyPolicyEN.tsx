import { 
    PrivacyPolicyContent, 
    PrivacyPolicyWrapper, 
    Text, 
    TextList, 
    TextSubtitle, 
    TextTitle 
} from './PrivacyPolicy.styles';

export const PrivacyPolicyEN = () => {
  return (
    <PrivacyPolicyWrapper>
        <PrivacyPolicyContent>
            <TextTitle>Privacy Policy</TextTitle>
            <Text>
                The chicmouse.com website is owned by chicmouse, which is a data controller of 
                your personal data. We have adopted this Privacy Policy, which determines how 
                we process information collected by chicmouse.com, which also provides the reasons 
                why we must collect certain personal data about you. Therefore, you should read 
                this Privacy Policy before using the chicmouse.com website. We take care of your 
                personal data and we are committed to guaranteeing its confidentiality and security.
            </Text>
            <TextSubtitle>Personal information we collect:</TextSubtitle>
            <Text>
                When you visit chicmouse.com, we automatically collect certain information about 
                your device, including information about your web browser, IP address, time zone, 
                and some of the cookies installed on your device. In addition, as you browse, we 
                collect information about the individual web pages or products you view, which 
                websites or search terms referred you to the web, and how you interact. We refer 
                to this automatically collected information as "Device Information." In addition, 
                we may collect the personal data you provide to us (including, but not limited to, 
                first name, last name, address, payment information, etc.) during registration in 
                order to fulfill the agreement.
            </Text>
            <TextSubtitle>Why do we process your data?</TextSubtitle>
            <Text>
                Our highest priority is the security of customer data, and as such we may process 
                only minimal user data, only to the extent absolutely necessary to maintain the 
                website. The information collected automatically is used only to identify potential 
                cases of abuse and to establish statistical information about the use of the website. 
                This statistical information is not aggregated in such a way as to identify any 
                particular user of the system. You can visit the website without telling us who 
                you are or revealing any information by which someone can identify you as a specific 
                person. However, if you wish to use some of the features of the website, or wish 
                to receive our newsletter or provide other details by filling out a form, you may 
                provide us with personal data, such as your email, first name, last name, city of 
                residence, organization and number of phone. You can choose not to provide your 
                personal data, but you may not be able to take advantage of some of the features 
                of the Website. For example, you will not be able to receive our newsletter or 
                contact us directly from the website. Users who are not sure what information is 
                required can contact us at chicmouse.group@gmail.com.
            </Text>
            <TextSubtitle>Your rights:</TextSubtitle>
            <Text>
                If you are a European resident, you have the following rights related to your 
                personal data:
            </Text>
            <TextList margin='25px 0'>
                <Text>The right to be informed.</Text>
                <Text>The right of access.</Text>
                <Text>The right to rectification.</Text>
                <Text>The right to delete.</Text>
                <Text>The right to restrict processing.</Text>
                <Text>The right to data portability.</Text>
                <Text>The right to object.</Text>
                <Text>
                    Rights in relation to automated decision-making and profiling.
                </Text>
            </TextList>
            <Text>
                If you wish to exercise this right, please contact us through the contact 
                information below. In addition, if you are a European resident, we note that 
                we are processing your information to fulfill contracts we might have with you 
                (for example, if you place an order through the web), or otherwise to pursue our 
                legitimate business interests listed above. Also, please note that your information 
                may be transferred outside of Europe, including to Canada and the United States.
            </Text>
            <TextSubtitle>Links to other websites:</TextSubtitle>
            <Text>
                Our website may contain links to other websites that are not owned or controlled 
                by us. Please be aware that we are not responsible for such websites or the privacy 
                practices of third parties. We recommend that you be aware when you leave our 
                website and read the privacy statements of each website that may collect personal 
                information.
            </Text>
            <TextSubtitle>Security of the information:</TextSubtitle>
            <Text>
                We secure the information you provide on computer servers in a controlled and 
                secure environment, protected from unauthorized access, use or disclosure. We 
                maintain reasonable administrative, technical and physical security measures to 
                protect against unauthorized access, use, modification and disclosure of personal 
                data under its control and custody. However, data transmission over the Internet 
                or wireless networks cannot be guaranteed.
            </Text>
            <TextSubtitle>Legal disclosure:</TextSubtitle>
            <Text>
                We will disclose any information we collect, use, or receive if required or permitted 
                by law, such as to comply with a subpoena or similar legal process, and when we 
                believe in good faith that disclosure is necessary to protect our rights, protect 
                your safety or the safety of others, investigate fraud, or respond to a government 
                request.
            </Text>
            <TextSubtitle>Contact information:</TextSubtitle>
            <Text margin='0 0 100px 0 '>
                If you wish to contact us to understand more about this Policy or wish to communicate 
                with us regarding any matter regarding individual rights and your personal information, 
                you may email us at chicmouse.group@gmail.com
            </Text>
        </PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  )
}
