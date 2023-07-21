import { Field, Formik } from "formik"
import { Button } from "common/Button";
import { ObjectSchema } from "yup";
import * as Yup from "yup";
import { FormStatus, IContactForm } from "types";
import { useIntl } from "react-intl";
import { renderFormResponse } from "../utils";
import { useWindowSize } from "hooks/useWindowSize";
import { CustomForm, TextError, TextInput, Textarea } from "./ContactForm.styles";

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

interface IProps {
    status: FormStatus;
    onSubmit: (values: IContactForm) => void;
}

export const ContactForm = ({ status, onSubmit }:IProps) => {
    const intl = useIntl();
    const { smallScreenDetected, windowWidth } = useWindowSize();

    const sentSuccess = intl.formatMessage({id:"messageSent"});
    const sentError = intl.formatMessage({id:"somethingWrong"});

    const mobileSize = windowWidth < 450 ? [100, 30] : [140, 35];

    return (
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
                { status === "ready" ? (
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
                    ) : renderFormResponse(status, sentSuccess, sentError) }
                    <Button
                        disabled={status !== "ready"}
                        type="submit"
                        content={intl.formatMessage({id:"send"})}
                        width={smallScreenDetected ? mobileSize[0] : 150}
                        height={smallScreenDetected ? mobileSize[1] : 35}
                        background={status !== "ready" ? "#82b9b5" : "#089289"}
                        color="#fff"
                        fontSize={15}
                        align="end"
                    />
                
                </CustomForm>
            )}
        </Formik>
    )
}
