import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { Home } from "./Home";
import { IntlProviderForTests } from "utils/test_utils";

beforeEach(() => {
    render( 
        <IntlProviderForTests>
            <Home /> 
        </IntlProviderForTests>
    );
})

describe("Testing the Home component", () => {
    test("should render the Home component in the document", () => {
        expect(screen.getByTestId("home-page-id")).toBeInTheDocument()
    })
    
    test("should find the alt text 'elegant-mouse' in the document", () => {
        expect(screen.getByAltText("elegant-mouse")).toBeInTheDocument()
    })
})