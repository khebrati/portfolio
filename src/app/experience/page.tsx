import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience | Erfan Khebrati",
};

export default function ExperiencePage() {
  return (
    <div className="pt-24">
      <Experience />
    </div>
  );
}
