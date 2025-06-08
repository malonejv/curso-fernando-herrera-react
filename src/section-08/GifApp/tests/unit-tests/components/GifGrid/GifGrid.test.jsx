import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../../../src/components/GifGrid/GifGrid";
import { useFetchGifs } from "../../../../src/hooks/useFetchGifs";

jest.mock("../../../../src/hooks/useFetchGifs");

describe("GifGrid", () => {
  test("Should render loading initially", () => {
    useFetchGifs.mockReturnValue([[], true]);
    
    render(<GifGrid category="test" onRemove={() => {}} />);

    expect(screen.getByText("test")).toBeTruthy();
    expect(screen.getByText("Cargando...")).toBeTruthy();
  });

  test("Should render gifs after loading", () => {
    const mockGifs = [
      { id: "1", title: "Gif 1", url: "http://example.com/gif1.gif" },
      { id: "2", title: "Gif 2", url: "http://example.com/gif2.gif" },
    ];
    useFetchGifs.mockReturnValue([mockGifs, false]);

    render(<GifGrid category="test" onRemove={() => {}} />);

    expect(screen.getByText("test")).toBeTruthy();
    expect(screen.queryByText("Cargando...")).toBeNull();
    expect(screen.getByText("Gif 1")).toBeTruthy();
    expect(screen.getByText("Gif 2")).toBeTruthy();
  });
});
