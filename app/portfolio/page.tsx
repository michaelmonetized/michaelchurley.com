import type { Metadata } from "next";
import Gallery from "@/components/portfolio/gallery";
import { listPieces } from "@/lib/portfolio/pieces";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Work, marks, and interfaces — in the round.",
};

export const dynamic = "force-static";

export default async function PortfolioPage() {
  const pieces = await listPieces();
  return <Gallery pieces={pieces} />;
}
