import React from "react";
import { render,fireEvent, getByTestId } from "@testing-library/react";
import App from './App';
import '@testing-library/jest-dom/extend-expect'


describe('Test App', () => {

    it("renders properly",()=>{
      const {baseElement} = render(<App/>);
      expect(baseElement).toBeInTheDocument();
    })

    it("matches snapshot",()=>{
      const {baseElement}=render(<App/>)
      expect(baseElement).toMatchSnapshot();
    })

});
