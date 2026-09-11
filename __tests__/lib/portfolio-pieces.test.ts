import { describe, expect, test } from "@jest/globals";
import { listPieces, parseKind } from "@/lib/portfolio/pieces";

describe("portfolio catalog", () => {
  test("is a static list of motion files under /work", () => {
    const pieces = listPieces();
    expect(pieces.length).toBeGreaterThan(0);
    expect(pieces.some((p) => p.category === "marks")).toBe(true);
    for (const piece of pieces) {
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
    const terre = pieces.find((p) => p.id === "web-delaterrestore");
    expect(terre?.title).toBe("de la Terre");
    expect(terre?.href).toBe("https://www.delaterrestore.com");
    expect(terre?.category).toBe("sites");
    const terreMark = pieces.find((p) => p.id === "art-delaterre");
    expect(terreMark?.title).toBe("de la Terre");
    expect(terreMark?.category).toBe("marks");
    expect(pieces.filter((p) => p.id.startsWith("web-getatme")).map((p) => p.id)).toEqual([
      "web-getatme",
    ]);
    expect(pieces.filter((p) => p.title === "Hurley US" && p.category === "marks")).toHaveLength(1);
    expect(pieces.some((p) => p.id === "web-hustlepay" || p.id === "web-hustlechat")).toBe(false);
  });

  test("parseKind only accepts catalog filters", () => {
    expect(parseKind(undefined)).toBe("all");
    expect(parseKind("sites")).toBe("sites");
    expect(parseKind("nope")).toBe("all");
  });
});
