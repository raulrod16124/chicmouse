import { 
    ContactContent, 
    ContactImage, 
    ContactTitle, 
    ContactWrapper,
} from "./Contact.styles"
import { useIntl } from "react-intl"
import { FormStatus, IContactForm } from "types";
import { useState } from "react";
import contactTeleoperatorImage from "assets/mouseTeleoperatorImage.png";
import { ContactForm } from "./components/ContactForm";
import { SimpleContact } from "./components/SimpleContact";

const { 
    VITE_EMAIL_URL
 } = import.meta.env;

export const Contact = () => {
    const intl = useIntl();

    const [formStatus, setFormStatus] = useState<FormStatus>("ready");

    const onSubmit = async (values: IContactForm) => {
        setFormStatus("sending");
        const response = await fetch(VITE_EMAIL_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(values),
        });
        const result = await response.json();
        if(result.status){
            setFormStatus("sent");
        } else {
            setFormStatus("error");
        }
    };

    return (
        <ContactWrapper data-testid="contact-page-id">
            <ContactTitle>
                {intl.formatMessage({id:"contactUsText"})}
            </ContactTitle>
            <ContactContent>
                <ContactImage 
                    // className="animate__animated animate__zoomIn animate__delay-0.01s"
                    src={contactTeleoperatorImage} alt="teleoperator-mouse-image" 
                />
                {/* <ContactForm status={formStatus} onSubmit={onSubmit}/> */}
                <SimpleContact />
            </ContactContent>
        </ContactWrapper>
    )
}
