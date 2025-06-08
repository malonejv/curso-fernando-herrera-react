import { Assertion } from "../../../src/common/Assertion";

describe("Assertion", () => {
    describe("StringAssertion", () => {
        test("IsNotNullOrEmpty should not throw for non-empty string", () => {
            expect(() => Assertion.This("hello").IsNotNullOrEmpty()).not.toThrow();
        });

        test("IsNotNullOrEmpty should throw for empty string", () => {
            expect(() => Assertion.This("").IsNotNullOrEmpty("msg")).toThrow("msg");
        });

        test("IsNotNullOrEmpty should throw for string with only spaces", () => {
            expect(() => Assertion.This("   ").IsNotNullOrEmpty()).toThrow();
        });

        test("IsString should not throw for string", () => {
            expect(() => Assertion.This("test").IsString()).not.toThrow();
        });

        test("IsEmail should not throw for valid email", () => {
            expect(() => Assertion.This("test@mail.com").IsEmail()).not.toThrow();
        });

        test("IsEmail should throw for invalid email", () => {
            expect(() => Assertion.This("not-an-email").IsEmail("bad email")).toThrow("bad email");
        });

        test("IsUrl should not throw for valid url", () => {
            expect(() => Assertion.This("https://google.com").IsUrl()).not.toThrow();
        });

        test("IsUrl should throw for invalid url", () => {
            expect(() => Assertion.This("notaurl").IsUrl("bad url")).toThrow("bad url");
        });
    });

    describe("NumberAssertion", () => {
        test("IsNumber should not throw for number", () => {
            expect(() => Assertion.This(5).IsNumber()).not.toThrow();
        });

        test("IsNumber should throw for NaN", () => {
            expect(() => Assertion.This(NaN).IsNumber("not num")).toThrow("not num");
        });

        test("IsGreaterThanZero should not throw for positive", () => {
            expect(() => Assertion.This(1).IsGreaterThanZero()).not.toThrow();
        });

        test("IsGreaterThanZero should throw for zero or negative", () => {
            expect(() => Assertion.This(0).IsGreaterThanZero("gtz")).toThrow("gtz");
            expect(() => Assertion.This(-1).IsGreaterThanZero()).toThrow();
        });

        test("IsInRange should not throw for value in range", () => {
            expect(() => Assertion.This(5).IsInRange(1, 10)).not.toThrow();
        });

        test("IsInRange should throw for value out of range", () => {
            expect(() => Assertion.This(0).IsInRange(1, 10, "out")).toThrow("out");
            expect(() => Assertion.This(11).IsInRange(1, 10)).toThrow();
        });

        test("IsInteger should not throw for integer", () => {
            expect(() => Assertion.This(2).IsInteger()).not.toThrow();
        });

        test("IsInteger should throw for float", () => {
            expect(() => Assertion.This(2.5).IsInteger("not int")).toThrow("not int");
        });

        test("IsPositive should not throw for positive", () => {
            expect(() => Assertion.This(1).IsPositive()).not.toThrow();
        });

        test("IsPositive should throw for negative", () => {
            expect(() => Assertion.This(-1).IsPositive("neg")).toThrow("neg");
        });

        test("IsNegative should not throw for negative", () => {
            expect(() => Assertion.This(-1).IsNegative()).not.toThrow();
        });

        test("IsNegative should throw for positive", () => {
            expect(() => Assertion.This(1).IsNegative("pos")).toThrow("pos");
        });

        test("IsNaN should throw for number", () => {
            expect(() => Assertion.This(1).IsNaN("must be NaN")).toThrow("must be NaN");
        });

        test("IsNaN should not throw for NaN", () => {
            expect(() => Assertion.This(NaN).IsNaN()).not.toThrow();
        });
    });

    describe("ArrayAssertion", () => {
        test("IsNotEmpty should not throw for non-empty array", () => {
            expect(() => Assertion.This([1]).IsNotEmpty()).not.toThrow();
        });

        test("IsNotEmpty should throw for empty array", () => {
            expect(() => Assertion.This([]).IsNotEmpty("empty")).toThrow("empty");
        });

        test("Contains should not throw if value is present", () => {
            expect(() => Assertion.This([1, 2, 3]).Contains(2)).not.toThrow();
        });

        test("Contains should throw if value is not present", () => {
            expect(() => Assertion.This([1, 2, 3]).Contains(4, "missing")).toThrow("missing");
        });

        test("DoesNotContain should not throw if value is not present", () => {
            expect(() => Assertion.This([1, 2, 3]).DoesNotContain(4)).not.toThrow();
        });

        test("DoesNotContain should throw if value is present", () => {
            expect(() => Assertion.This([1, 2, 3]).DoesNotContain(2, "present")).toThrow("present");
        });

        test("HasLength should not throw for correct length", () => {
            expect(() => Assertion.This([1, 2]).HasLength(2)).not.toThrow();
        });

        test("HasLength should throw for incorrect length", () => {
            expect(() => Assertion.This([1, 2]).HasLength(3, "bad len")).toThrow("bad len");
        });
    });

    describe("ObjectAssertion", () => {
        test("IsNotEmpty should not throw for non-empty object", () => {
            expect(() => Assertion.This({ a: 1 }).IsNotEmpty()).not.toThrow();
        });

        test("IsNotEmpty should throw for empty object", () => {
            expect(() => Assertion.This({}).IsNotEmpty("empty obj")).toThrow("empty obj");
        });
    });

    describe("Unsupported type", () => {
        test("Should throw for unsupported type", () => {
            expect(() => Assertion.This(undefined)).toThrow("Unsupported type for assertion");
            expect(() => Assertion.This(null)).toThrow("Unsupported type for assertion");
            expect(() => Assertion.This(() => {})).toThrow("Unsupported type for assertion");
        });
    });
});