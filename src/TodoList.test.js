import React from "react";
import { render, fireEvent } from '@testing-library/react';
import TodoList from "./TodoList";

// Todo list smoke test 
it('renders without crashing', () => {
    render(<TodoList />)
})

// Todo list snapshot test
it('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot()
})

// test that remove button works 
it('removes the todo when the x is clicked', () => {
    const { getByLabelText, getByText, queryByText } = render(<TodoList />);

    // add a todo
    fireEvent.change(getByLabelText("Todo"), {target: { value: "test todo" } });

    //ensure the todo is added 
    expect(queryByText("X")).toBeInTheDocument();

    // click the remove button
    fireEvent.click(getByText("X"));

    // ensure the todo is removed
    expect(queryByText("X")).not.toBeInTheDocument();
})