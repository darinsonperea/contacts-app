import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import FormContact from "../../ui/FormContact";
import { Provider } from "react-redux";
import store from "../../redux/store";
import * as moduleName from "../../context/ActionsContext";

describe("Form Contact Component", () => {
  const useActionsMock = vi.spyOn(moduleName, "useActions");
  const manageCreateContactsMock = vi.fn();

  beforeEach(() => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    useActionsMock.mockReturnValue({
      manageCreateContact: manageCreateContactsMock,
      manageDeleteContact: vi.fn(),
      manageToggleLike: vi.fn(),
    });

    render(<FormContact />, { wrapper });
  });

  it("Should render all fields with their styles each one", () => {
    const name = screen.getByPlaceholderText("Name");
    const lastName = screen.getByPlaceholderText("Last name");
    const email = screen.getByPlaceholderText("Email");

    expect(name).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it("Should display a value that the users enter", () => {
    const name = screen.getByPlaceholderText("Name") as HTMLInputElement;
    const lastName = screen.getByPlaceholderText(
      "Last name"
    ) as HTMLInputElement;
    const email = screen.getByPlaceholderText("Email") as HTMLInputElement;

    name.value = "Ana";
    lastName.value = "Perez";
    email.value = "ana.perez@gmail.com";

    expect(name).toHaveValue("Ana");
    expect(lastName).toHaveValue("Perez");
    expect(email).toHaveValue("ana.perez@gmail.com");
  });

  it("Should call at least once manageCreateContact", () => {
    const buttonSubmit = screen.getByText("SAVE");
    fireEvent.change(screen.getByPlaceholderText(/Name/), {
      target: { value: "Ana" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Last name/), {
      target: { value: "Perez" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Email/), {
      target: { value: "Ana.perez@gmail.com" },
    });

    fireEvent.click(buttonSubmit);
    expect(manageCreateContactsMock).toHaveBeenCalled();
  });
});
