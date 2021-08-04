import React from "react";
import { render,fireEvent, getByTestId } from "@testing-library/react";
import Order from './Order';
import '@testing-library/jest-dom/extend-expect'


describe('Test Order', () => {

    it("renders properly",()=>{
      const {baseElement} = render(<Order/>);
      expect(baseElement).toBeInTheDocument();
    })

    it("matches snapshot",()=>{
      const {baseElement}=render(<Order/>)
      expect(baseElement).toMatchSnapshot();
    })

    it("Receives Input text",()=>{
        const testuser = "testuser";
        const conttest = "9479804538";
        const {getByTestId} = render(<Order/>);
        const input1 = getByTestId("user-input");
        expect(input1).toBeInTheDocument();
       
        fireEvent.change(input1,{target:{value:testuser}});
        expect(input1).toHaveValue(testuser);
                
        const input2 = getByTestId("contact-input");
        expect(input2).toBeInTheDocument();
       
        fireEvent.change(input2,{target:{value:conttest}});
        expect(input2).toHaveValue(conttest);

        const buttonSubmit = getByTestId("button-submit");
        expect(buttonSubmit).toBeInTheDocument();

        const buttonReset = getByTestId("button-reset");
        expect(buttonReset).toBeInTheDocument();
    })

});
