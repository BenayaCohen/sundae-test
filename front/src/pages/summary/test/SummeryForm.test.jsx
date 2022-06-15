import {
    render,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import SummeryForm from "../SummeryForm";
import userEvent from "@testing-library/user-event";

test("checkbox is unchecked by default", () => {
    render(<SummeryForm />);
    const checkbox = screen.getByRole("checkbox", {
        name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
    const confirmButton = screen.getByRole("button", { name: /confirm order/i });
    expect(confirmButton).toBeDisabled();
});

test("checkbox disable button on first click and enbales on the second click", () => {
    render(<SummeryForm />);
    const checkbox = screen.getByRole("checkbox", {
        name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", { name: /confirm order/i });

    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
    const nullPopover = screen.queryByText(
        "no ice cream well actualy be deliverd"
    );

    expect(nullPopover).not.toBeInTheDocument();

    const termAndCondition = screen.queryByText("terms and condition");

    userEvent.hover(termAndCondition);

    const popover = screen.queryByText("no ice cream well actualy be deliverd");
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termAndCondition);
    await waitForElementToBeRemoved(() =>
        screen.queryByText("no ice cream well actualy be deliverd")
    );
});
