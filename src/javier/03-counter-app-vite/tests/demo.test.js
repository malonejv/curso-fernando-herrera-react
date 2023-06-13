describe("Pruebas de ejemplo", () => {
  test("Esta prueba no debe fallar", () => {
    //Arrange
    const message1 = "Hola 1";

    //Act
    const message2 = message1.trim();

    //Assert
    expect(message1).toBe(message2);
  });
});
