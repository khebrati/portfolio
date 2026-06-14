import type { Metadata } from "next";
import Tools from "@/components/sections/Tools";

export const metadata: Metadata = {
  title: "Tools | Erfan Khebrati",
};

export default function ToolsPage() {
  return (
    <div className="pt-24">
      <Tools />
    </div>
  );
}
