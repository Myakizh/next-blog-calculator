import type { Metadata } from "next";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Calculator",
  description: "Simple calculator page",
};

export default function CalculatorPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Calculator</h1>
      <Calculator />
    </div>
  );
}
