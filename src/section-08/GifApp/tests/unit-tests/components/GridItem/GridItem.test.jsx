import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { GridItem } from "../../../../src/components/GridItem/GridItem";

describe("GridItem", () => {
  const defaultGif = {
    title: "Some title",
    url: "https://some-image.png/",
  };

  test("Should not render correctly with gif default object", () => {
    const gif = {};

    const { container } = render(<GridItem gif={gif} />);

    const h3Element = container.querySelector("h3");
    expect(h3Element.innerHtml).toBeUndefined();
  });

  test("Should not render correctly with gif empty", () => {
    const gif = {
      title: null,
      url: null,
    };

    const { container } = render(<GridItem gif={gif} />);
    const h3Element = container.querySelector("h3");
    expect(h3Element.innerHtml).toBeUndefined();
  });

  test("Should match snaptshot", () => {
    const { container } = render(<GridItem gif={defaultGif} />);
    expect(container).toMatchSnapshot();
  });

  test("Should render an image with url and title", () => {
    render(<GridItem gif={defaultGif} />);

    // const 
    //   src = screen.getByRole("img")?.src,
    //   alt = screen.getByRole("img")?.alt;
    const { src, alt } = screen.getByRole("img");

    expect(src).toEqual(defaultGif.url);
    expect(alt).toEqual(defaultGif.title);
  });
  
  test("Should render a title", ()=>{
    render(<GridItem gif={defaultGif} />);
    expect(screen.getByText(defaultGif.title)).toBeTruthy();
  });
});
