import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { PrivacyPolicyEN } from "./PrivacyPolicyEN";
import { IntlProviderForTests } from "utils/test_utils";

beforeEach(() => {
    render( 
        <IntlProviderForTests>
            <PrivacyPolicyEN /> 
        </IntlProviderForTests>
    );
})

describe("Testing the PrivacyPolicyEN component", () => {
    test("should render the PrivacyPolicyEN component in the document", () => {
        expect(screen.getByTestId("privacy-policy-en-page-id")).toBeInTheDocument()
    })

    test("should find the text 'Privacy Policy' in the document", () => {
        expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    })
    
    test("should find the role heading eight times in the document", () => {
        expect(screen.getAllByRole("heading")).toHaveLength(8)
    })

    test("should find the role list in the document", () => {
        expect(screen.getByRole("list")).toBeInTheDocument()
    })
})