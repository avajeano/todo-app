import React from "react";
import { render } from '@testing-library/react';
import Todo from "./Todo";

// Todo smoke test
it('renders without crashing', () => {
    render(<Todo id="test-id" removeTodo={() => {}}/>)
})

// Todo snapshot test
it('matches snapshot', () => {
    const { asFragment } = render(<Todo id="test-id" removeTodo={() => {}}/>)
    expect(asFragment()).toMatchSnapshot()
})