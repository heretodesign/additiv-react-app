import React from "react";
import ReactDOM from "react-dom";
import HomePage from "../pages/HomePage";

//  Arrange ==  Basic unit test
test('calls onSubmit with search username when submitted', () => {
  const handleSubmit = jest.fn()
  const div = document.createElement('div')
  ReactDOM.render(<HomePage onSubmit={handleSubmit} />, div)

  //get the field nodes
  const form = div.querySelector('form')
  const {name} = form.elements
  // fill in the field values
  name.value = 'abel senwelo'

// Act
  form.dispatchEvent(new window.Event('submit'))

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    name: name.value ,
  })

  //  Arrange
  //  create a fake object to hold the form field values (formfields=> firstname, lastname, email, address etc)
  //  create a jest.fn for your submit handler
  //  render the login component to a div
  //  Tips => const div = document.createElement('div')

  //  get the field nodes
  //  TIP: const input = div.querySelectorAll('input')
  //  TIP: const form = div.querySelector('form')
  //  fill in the field values

  //  Act
  //  submit the form
  //  Tip: formNode.dispatchEvent(new window.Event('submit'))

  //  Assert
  //   Ensure your submit handler was called properly
})

//  Elaboration & feedback
//  when you've finished with the exercises:
//  1. copy the URL below into your browser and fill out the form
//  2. remove the `.skip` from the test below
//  3. Change submitted from `false to `true`
//  4. And you're all done
