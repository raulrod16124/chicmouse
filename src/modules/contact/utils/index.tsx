import { ClipLoader } from "react-spinners";
import { ErrorContent, SendingContent, SentContent, Text } from "../Contact.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FormStatus } from "types";

export const renderFormResponse = (response:string, successMessage:string, errorMessage:string) => {
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