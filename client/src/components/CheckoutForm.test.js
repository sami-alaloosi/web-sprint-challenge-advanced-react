import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

test("render the checkout component without errors", ()=>{
     render(<CheckoutForm />)
    });
test("shows the header of the page", ()=>{
      // render form 
      render(<CheckoutForm />)
      // look for header of the page 
      expect(screen.getByText(/checkout form/i))
});
test("fill out all fields and submit the form and make sure it works", ()=>{
    // render form 
  render(<CheckoutForm />)  
  // select inputs 
  const name = screen.getByLabelText(/First Name:/i);
  const lastname = screen.getByLabelText(/Last Name:/i);
  const address = screen.getByLabelText(/Address:/i);
  const city = screen.getByLabelText(/City:/i);
  const state = screen.getByLabelText(/State:/i);
  const zip = screen.getByLabelText(/Zip:/i);
  const submitBtn = screen.getByRole('button', { name: /Checkout/i });
  // fill out the form
  fireEvent.change(name, { target: { value: 'sami' } })
  fireEvent.change(lastname, { target: { value: 'aloosi'} })
  fireEvent.change(address, { target: { value: '123 11th ave se' } })
  fireEvent.change(city, { target: { value: 'kent' } })
  fireEvent.change(state, { target: { value: 'Washington' } })
  fireEvent.change(zip, { target: { value: '98031' } })
  fireEvent.click(submitBtn);
  // check if form is submitted and is succesful 
  expect(screen.getByText(/You have ordered some plants!/i)).toBeInTheDocument();
});