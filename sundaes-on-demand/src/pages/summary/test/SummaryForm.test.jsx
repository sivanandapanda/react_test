import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("check initial state", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm Order" });
  expect(button).toBeDisabled();

  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  expect(checkbox).not.toBeChecked();
});

test("on checkbox selection button is enabled and uncheck disables the button", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm Order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
