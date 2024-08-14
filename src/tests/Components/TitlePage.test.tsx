import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TitlePage from "../../ui/TitlePage";

describe("Title Page Component", () => {
  it("Should render a title at the top of the page", () => {
    const title = "Favorites";
    const { container } = render(<TitlePage title={title} />);
    const separator = container.querySelector("div");

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(title)).toHaveTextContent(title);
    expect(separator).toBeInTheDocument();
  });
});
