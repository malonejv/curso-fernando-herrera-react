import { render, screen, fireEvent } from "@testing-library/react";
import { GridHeader } from "../../../../src/components/GridHeader/GridHeader";

describe("GridHeader", () => {
  test("Should render header with category and remove button", () => {
    const mockCategory = "Test Category";
    const mockOnRemove = jest.fn();

    render(
      <GridHeader category={mockCategory} onRemove={mockOnRemove} />
    );

    expect(screen.getByText(mockCategory)).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
  });

  test("Should call onRemove when remove button is clicked", () => {
    const mockCategory = "Test Category";
    const mockOnRemove = jest.fn();

    render(
      <GridHeader category={mockCategory} onRemove={mockOnRemove} />
    );

    fireEvent.click(screen.getByRole("button"));

    expect(mockOnRemove).toHaveBeenCalled();
  });
});