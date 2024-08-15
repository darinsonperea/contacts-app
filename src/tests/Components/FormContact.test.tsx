import { render, screen } from "@testing-library/react";
import FormContact from "../../ui/FormContact";
import { Provider } from "react-redux";
import store from "../../redux/store";
import ActionsProvider from "../../context/ActionsContext";

describe("Form Contact Component", () => {
  beforeEach(() => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    render(
      <ActionsProvider>
        <FormContact />
      </ActionsProvider>,
      { wrapper }
    );
  });

  it("Should render all fields with their styles each one", () => {
    const name = screen.getByPlaceholderText("Name");
    const lastName = screen.getByPlaceholderText("Last name");
    const email = screen.getByPlaceholderText("Email");

    expect(name).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it("Should display a value that the users enter", () => {});
});
