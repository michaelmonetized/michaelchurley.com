import { describe, expect, test } from "@jest/globals";
import { listPieces, parseKind } from "@/lib/portfolio/pieces";

describe("portfolio catalog", () => {
  test("is a static list of motion files under /work", () => {
    const pieces = listPieces();
    expect(pieces.length).toBeGreaterThan(0);
    for (const piece of pieces) {
      expect(piece.file.endsWith(".mp4")).toBe(true);
      expect(piece.src).toBe(`/work/${piece.file}`);
      expect(piece.title.length).toBeGreaterThan(0);
    }
  });

  test("maps known live URLs and titles", () => {
    const pieces = listPieces();
    const macks = pieces.find((p) => p.id === "web-macksbbqshack");
    expect(macks?.title).toBe("Mack's BBQ Shack");
    expect(macks?.href).toBe("https://www.macksbbqshack.com");
    expect(macks?.category).toBe("sites");
  });

  test("parseKind only accepts catalog filters", () => {
    expect(parseKind(undefined)).toBe("all");
    expect(parseKind("sites")).toBe("sites");
    expect(parseKind("nope")).toBe("all");
  });
});
