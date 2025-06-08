import { render, screen } from "@testing-library/react";
import { Loading } from "../../../../src/components/Loading/Loading";

describe("Loading", () => {
  test("Should render loading message when isLoading is true", () => {
    render(
      <Loading isLoading={true} loadingMessage="Cargando..." />
    );

    expect(screen.getByText("Cargando...")).toBeTruthy();
  });

  test("Should not render anything when isLoading is false", () => {
    render(
      <Loading isLoading={false} loadingMessage="Cargando..." />
    );

    expect(screen.queryByText("Cargando...")).toBeNull();
  });

  test("Should use default loading message when none is provided", () => {
    render(<Loading isLoading={true} />);

    expect(screen.getByText("Loading...")).toBeTruthy();
  });
});