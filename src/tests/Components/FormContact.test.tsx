import { fireEvent, render, screen } from "@testing-library/react";
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

  it("Should reset the form", () => {
    const setName = vi.fn();
    const setLastName = vi.fn();
    const setEmail = vi.fn();
    const setFavorite = vi.fn();
    const setPreview = vi.fn();
    const resetFile = { current: { value: "some value" } };

    // const spyInstance = vi.spyOn(FormContact, );
    // Simular el click en el botón
    fireEvent.click(screen.getByText("SAVE"));

    // Verificar que las funciones de estado fueron llamadas correctamente
    expect(setName).toHaveBeenCalledWith("");
    expect(setLastName).toHaveBeenCalledWith("");
    expect(setEmail).toHaveBeenCalledWith("");
    expect(setFavorite).toHaveBeenCalledWith(false);
    expect(setPreview).toHaveBeenCalledWith("");
    expect(resetFile.current.value).toBe("");
  });
});
