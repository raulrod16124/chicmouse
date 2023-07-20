import { Field, Form, Formik } from "formik"
import { ContactContent, ContactImage, ContactTitle, ContactWrapper, CustomForm, ErrorContent, SendingContent, SentContent, Text, TextError, TextInput, Textarea } from "./Contact.styles"
import { useIntl } from "react-intl"
import { Button } from "common/Button";
import * as Yup from "yup";
import { IContactForm } from "types";
import { ObjectSchema } from "yup";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import contactTeleoperatorImage from "assets/mouseTeleoperatorImage.png";
import { useWindowSize } from "hooks/useWindowSize";

const { 
    VITE_EMAIL_URL
 } = import.meta.env;

const ContactFormValidator: ObjectSchema<IContactForm> = Yup.object().shape({
    name: Yup.string().required("nameRequired"),
    email: Yup.string().required("emailRequired"),
    message: Yup.string().required("messageRequired"),
})

const initialValues: IContactForm = {
    name: "",
    email: "",
    message: "",
}

type FormStatus = "ready" | "sending" | "sent" | "error";

export const Contact = () => {
    const intl = useIntl();
    const { smallScreenDetected, windowWidth } = useWindowSize();

    const sentSuccess = intl.formatMessage({id:"messageSent"});
    const sentError = intl.formatMessage({id:"somethingWrong"});

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

    const mobileSize = windowWidth < 450 ? [100, 30] : [140, 35];

    return (
        <ContactWrapper data-testid="contact-page-id">
            <ContactTitle
                className="animate__animated animate__zoomIn animate__delay-0.01s"
            >
                {intl.formatMessage({id:"contactUsText"})}
            </ContactTitle>
            <ContactContent>
                <ContactImage 
                    className="animate__animated animate__zoomIn animate__delay-0.01s"
                    src={contactTeleoperatorImage} alt="teleoperator-mouse-image" 
                />
                <Formik 
                    initialValues={initialValues} 
                    validationSchema={ContactFormValidator} 
                    onSubmit={onSubmit}
                >
                    {({handleSubmit, handleChange, handleBlur, values, errors, touched}) => (
                        <CustomForm
                            className="animate__animated animate__zoomIn animate__delay-0.01s" 
                            onSubmit={handleSubmit}
                        >
                        { formStatus === "ready" ? (
                                <>
                                    <Field name="name">
                                        {() => (
                                            <>
                                                <TextInput 
                                                    name="name" 
                                                    id="name" 
                                                    type="text"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                    placeholder={intl.formatMessage({id:"enterAName"})}
                                                />
                                                {errors.name && touched.name ? (
                                                    <TextError>{intl.formatMessage({id: errors.name})}</TextError>
                                                ) : null}
                                            </>
                                        )}
                                    </Field>
                                    <Field name="email">
                                        {() => (
                                            <>
                                                <TextInput 
                                                    name="email" 
                                                    id="email" 
                                                    type="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                    placeholder={intl.formatMessage({id:"enterAnEmail"})} 
                                                />
                                                {errors.email && touched.email ? (
                                                    <TextError>{intl.formatMessage({id: errors.email})}</TextError>
                                                ) : null}
                                            </>
                                        )}
                                    </Field>
                                    <Field name="email">
                                        {() => (
                                            <>
                                                <Textarea 
                                                    name="message" 
                                                    id="message" 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.message}
                                                    placeholder={intl.formatMessage({id:"enterAMessage"})}
                                                />
                                                {errors.message && touched.message ? (
                                                    <TextError>{intl.formatMessage({id: errors.message})}</TextError>
                                                ) : null}
                                            </>
                                        )}
                                    </Field>
                                </>
                            ) : renderFormResponse(formStatus, sentSuccess, sentError) }

                            <Button
                                disabled={formStatus !== "ready"}
                                type="submit"
                                content={intl.formatMessage({id:"send"})}
                                width={smallScreenDetected ? mobileSize[0] : 150}
                                height={smallScreenDetected ? mobileSize[1] : 35}
                                background={formStatus !== "ready" ? "#82b9b5" : "#089289"}
                                color="#fff"
                                fontSize={15}
                                align="end"
                            />
                        
                        </CustomForm>
                    )}
                </Formik>
            </ContactContent>
        </ContactWrapper>
    )
}

const renderFormResponse = (response:string, successMessage:string, errorMessage:string) => {
    const messages: Record< Exclude<FormStatus, "ready">, JSX.Element> = {
        sending: (
            <SendingContent
                className="animate__animated animate__zoomIn animate__delay-0.01s" 
            >
                <ClipLoader
                    color={"#089289"}
                    loading={true}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </SendingContent>
        ),
        sent: (
            <SentContent
                className="animate__animated animate__zoomIn animate__delay-0.01s" 
            >
                <FontAwesomeIcon icon={faCheckCircle} size={"8x"} color="#089289" />
                <Text>{successMessage}</Text>
            </SentContent>
        ),
        error: (
            <ErrorContent
                className="animate__animated animate__zoomIn animate__delay-0.01s" 
            >
                <FontAwesomeIcon icon={faExclamationCircle} size={"8x"} color="#d23302" />
                <Text>{errorMessage}</Text>
            </ErrorContent>
        ),
    }

    return messages[response];
}
