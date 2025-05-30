import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("08-imp-exp.js", () => {
  test("getHeroeById_WithValidId_ReturnsHeroe", () => {
    const id = 1,
      expected = {
        id: 1,
        name: "Batman",
        owner: "DC",
      };

    const result = getHeroeById(id);
    expect(result).not.toBeNull();
    expect(result).toEqual(expected);
  });

  test("getHeroeById_WithoutId_ReturnsUndefined", () => {
    const result = getHeroeById();
    expect(result).toBeUndefined();
  });

  test("getHeroeById_WithoutInvalidId_ReturnsUndefined", () => {
    const id = 6;

    const result = getHeroeById(id);
    expect(result).toBeUndefined();
  });

  test("getHeroeById_WithoutInvalidIdString_ReturnsUndefined", () => {
    const id = '1';

    const result = getHeroeById(id);
    expect(result).toBeUndefined();
  });

  test("getHeroesByOwner_WithValidOwner_ReturnsHeroe", () => {
    const owner = 'DC',
          expectedLength = 3;

    const result = getHeroesByOwner(owner);
    expect(result).not.toBeNull();
    expect(result).toHaveLength(expectedLength);
  });

  test("getHeroesByOwner_WithoutOwner_ReturnsZeroLength", () => {
    const expectedLength = 0;

    const result = getHeroesByOwner();
    expect(result).toHaveLength(expectedLength);
  });

  test("getHeroesByOwner_WithoutInvalidOwner_ReturnsZeroLength", () => {
    const invalidParameter = 1;
    const expectedLength = 0;

    const result = getHeroesByOwner(invalidParameter);
    expect(result).toHaveLength(expectedLength);
  });

});
