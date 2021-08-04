import React from "react";
import { render,fireEvent, getByTestId } from "@testing-library/react";
import Feedback from './Feedback';
import '@testing-library/jest-dom/extend-expect'


describe('Test Feedback', () => {

    it("renders properly",()=>{
      const {baseElement} = render(<Feedback/>);
      expect(baseElement).toBeInTheDocument();
    })

    it("matches snapshot",()=>{
      const {baseElement}=render(<Feedback/>)
      expect(baseElement).toMatchSnapshot();
    })

    it("Receives Input text",()=>{
        const testuser = "testuser";
        const {getByTestId} = render(<Feedback/>);
        const input1 = getByTestId("user-input");
        expect(input1).toBeInTheDocument();
       
       
        fireEvent.change(input1,{target:{value:testuser}});
        expect(input1).toHaveValue(testuser);
                
        const buttonSubmit = getByTestId("input-submit");
        expect(buttonSubmit).toBeInTheDocument();

        const buttonReset = getByTestId("input-reset");
        expect(buttonReset).toBeInTheDocument();
    })

});
