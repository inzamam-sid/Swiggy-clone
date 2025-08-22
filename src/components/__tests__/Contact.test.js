import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"


test("Should load contact us component", () =>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    //  const heading = screen.getByRole("heading", { name: "Contact US Page" });
    expect(heading).toBeInTheDocument();
});



test("Should load button inside contact component", () =>{
    render(<Contact/>);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});

test("Should load input name inside contact component", () =>{
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
});