import { describe, expect, it } from "@jest/globals";
import eloCalculator from "../components/Elo/EloCalculator";

describe("Elo", () => {
  it("Player at 1200 elo vs 1200 elo should get [1216, 1184]", () => {
    var elo = eloCalculator([1200, 1200]);
    expect(elo).toEqual([1216, 1184]);
  });

  it("Player at 1200 elo vs 1200 elo vs 1000 elo vs 800 elo should get [1226, 1195, 993, 786]", () => {
    var elo = eloCalculator([1200, 1200, 1000, 800]).map((x) => Math.round(x));
    expect(elo).toEqual([1226, 1195, 993, 786]);
  });

  it("Player at 1200 elo vs 1200 elo and 64 for the first player should get [1232, 1168]", () => {
    var elo = eloCalculator([1200, 1200], 64);
    expect(elo).toEqual([1232, 1168]);
  });
});
