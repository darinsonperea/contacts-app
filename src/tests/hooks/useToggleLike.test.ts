import { act, renderHook } from "@testing-library/react";
import { useToggleLike } from "../../services/hooks/useToggleLike";

describe("useToggleLike Custom Hook", () => {
  it("Should send a request to the db and change a field", () => {
    const { result } = renderHook(() => useToggleLike());

    act(() => {
      result.current.setToggle({
        id: "cda66d1d-0b3c-4d87-9989-2a93147b5d47",
        favorite: false,
      });
    });

    expect(result.current.isToggling).toBe(true);
    expect(result.current.error).toBe("");
  });
});
