import { describe, expect, it } from "vitest";
import { isPasswordValid } from "./isPasswordValid";

describe("isPasswordValid", () => {
  it("accepts a 10-character administrator password", () => {
    expect(isPasswordValid("Admin12345", false, true)).toBe(true);
  });

  it("rejects an administrator password shorter than 10 characters", () => {
    expect(isPasswordValid("Admin1234", false, true)).toBe(false);
  });

  it("keeps the administrator complexity requirements", () => {
    expect(isPasswordValid("admin12345", false, true)).toBe(false);
    expect(isPasswordValid("ADMIN12345", false, true)).toBe(false);
    expect(isPasswordValid("Administrator", false, true)).toBe(false);
  });
});
