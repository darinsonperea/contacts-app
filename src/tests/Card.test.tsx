import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Card from "../ui/Card";
import { ContactsTypes } from "../utils/types";

describe("Card Component", () => {
  it("Should render a card with contact information", () => {
    const contact: ContactsTypes = {
      id: "dd4725af-0869-4e1f-8726-0a4b4e702b3b",
      email: "george.bluth@reqres.in",
      name: "George",
      lastName: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      favorite: false,
    };

    render(<Card contact={contact} />);

    const fullNameParagraph = screen.getByText("George Bluth");
    const emailParagraph = screen.getByText("george.bluth@reqres.in");
    const imageAvatar = screen.getByAltText("Photo of George Bluth");

    expect(fullNameParagraph).toBeInTheDocument();
    expect(emailParagraph).toBeInTheDocument();
    expect(imageAvatar).toBeInTheDocument();
    expect(fullNameParagraph).toHaveTextContent("George Bluth");
    expect(emailParagraph).toHaveTextContent("george.bluth@reqres.in");
  });
});
