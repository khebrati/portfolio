import type { Metadata } from "next";
import Thoughts from "@/components/sections/Thoughts";

export const metadata: Metadata = {
  title: "Thoughts | Erfan Khebrati",
};

export default function ThoughtsPage() {
  return (
    <div className="pt-24">
      <Thoughts />
    </div>
  );
}
