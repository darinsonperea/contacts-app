import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Image from "../../ui/Image";

describe("Image Component", () => {
  it("Should render the image of the chosen logo", () => {
    render(<Image src="/img/calvo.webp" alt="An image of a bald person" />);

    expect(
      screen.getByAltText("An image of a bald person")
    ).toBeInTheDocument();
  });
});
