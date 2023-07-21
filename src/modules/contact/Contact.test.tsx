import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { Contact } from "./Contact";
import { IntlProviderForTests } from "utils/test_utils";

beforeEach(() => {
    render( 
        <IntlProviderForTests>
            <Contact /> 
        </IntlProviderForTests>
    );
})

describe("Testing the Contact component", () => {
    test("should render the Contact component in the document", () => {
        expect(screen.getByTestId("contact-page-id")).toBeInTheDocument()
    })

    test("should find the text 'Can we help you with something?, tell us.' in the document", () => {
        expect(screen.getByText("Can we help you with something?, tell us.")).toBeInTheDocument()
    })

    // test("should find the role textbox three times in the document", () => {
    //     expect(screen.getAllByRole("textbox")).toHaveLength(3)
    // })

    // test("should find the role img in the document", () => {
    //     expect(screen.getByRole("img")).toBeInTheDocument()
    // })

    // test("should find the role button in the document", () => {
    //     expect(screen.getByRole("button")).toBeInTheDocument()
    // })

    // test("should find the alt text 'Send' in the document", () => {
    //     expect(screen.getByText("Send")).toBeInTheDocument()
    // })
})

// describe("Testing the Contact form use", () => {
//     test("should get the value change in the input name", () => {
//         fireEvent.change(screen.getAllByRole("textbox")[0], { target: { value: "john" } });
//         const inputName = screen.getAllByRole("textbox")[0];
//         // @ts-ignore
//         expect(inputName.value).toEqual("john");
//     })
//     test("should get the value change in the input email", () => {
//         fireEvent.change(screen.getAllByRole("textbox")[1], { target: { value: "john@email.com" } });
//         const inputEmail = screen.getAllByRole("textbox")[1];
//         // @ts-ignore
//         expect(inputEmail.value).toEqual("john@email.com");
//     })
//     test("should get the value change in the input message", () => {
//         fireEvent.change(
//             screen.getAllByRole("textbox")[2], { 
//                 target: { value: "This is a message from john" } 
//             });
//         const inputMessage = screen.getAllByRole("textbox")[2];
//         // @ts-ignore
//         expect(inputMessage.value).toEqual("This is a message from john");
//     })
// })