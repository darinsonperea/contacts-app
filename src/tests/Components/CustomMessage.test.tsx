import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomMessage from "../../ui/CustomMessage";

describe("Custom Message Component", () => {
  it("Should render a message with the passed value", () => {
    const greetings = "Greetings!!";

    render(<CustomMessage message={greetings} />);

    expect(screen.getByText(greetings)).toBeInTheDocument();
    expect(screen.getByText(greetings)).toHaveTextContent(greetings);
  });
});
