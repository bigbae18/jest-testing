const { expect, test } = require("@jest/globals");
const fizzBuzz = require("..");

test("Si el numero es divisible por 3 retorna Fizz", () => {
    // Given (Lo que llega en el test)

    let number = 3;

    // When (Acción que hacer);

    let result = fizzBuzz(number);

    expect(result).toBe("Fizz");
})
test("Si el numero es divisible por 5 retorna Buzz", () => {
    let number = 5

    let result = fizzBuzz(number);

    expect(result).toBe("Buzz");
})
test("Si el numero es divisible por 3 y por 5 retorna FizzBuzz", () => {
    let number = 15;

    let result = fizzBuzz(number);

    expect(result).toBe("FizzBuzz");
})
test("Si el numero no es divisible por 3 ni por 5 retorna el numero", () => {
    let number = 7;

    let result = fizzBuzz(number);

    expect(result).toBe(number);
})