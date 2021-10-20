import { parse } from "../../lib";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("empty symbol assignment", function () {
  it("should parse", function () {
    expect(getParser(`const a = [...]`)()).not.toThrow();
  });
});

describe("empty symbol with other elements", function () {
  it("should parse", function () {
    expect(getParser(`const a = [a, b, ..., d]`)()).not.toThrow();
  });
});

describe("empty symbol ternary", function () {
  it("should parse", function () {
    expect(getParser(`[a ? b : ...]`)()).not.toThrow();
  });
});
