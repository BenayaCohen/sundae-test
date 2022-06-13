import { render, screen, fireEvent } from '@testing-library/react';
import SummeryForm from '../SummeryForm';
import userEvent from "@testing-library/user-event"

test('checkbox is unchecked by default', () => {
    render(<SummeryForm />)
    const checkbox = screen.getByRole("checkbox", {
        name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
    const confirmButton = screen.getByRole('button', { name: /confirm order/i, })
    expect(confirmButton).toBeDisabled()
});

test('checkbox disable button on first click and enbales on the second click', () => {
    render(<SummeryForm />)
    const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i, });
    const confirmButton = screen.getByRole('button', { name: /confirm order/i, });

    userEvent.click(checkbox)
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox)
    expect(confirmButton).toBeDisabled();
});

test('popover responds to hover', () => {

})
