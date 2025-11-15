"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

export default function CalculatorPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = useCallback(() => {
    try {
      const result = Function(`"use strict"; return (${input})`)();
      setResult(result.toString());
    } catch {
      setResult("Error");
    }
  }, [input]);

  const clear = useCallback(() => {
    setInput("");
    setResult(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const allowedKeys = "0123456789+-*/.";
      if (allowedKeys.includes(e.key)) {
        setInput((prev) => prev + e.key);
      } else if (e.key === "Enter") {
        calculate();
      } else if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key.toLowerCase() === "c") {
        clear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [calculate, clear]);

  const handleButtonClick = (value: string) => {
    if (value === "C") clear();
    else if (value === "=") calculate();
    else setInput((prev) => prev + value);
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "C",
    "+",
    "=",
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <div className="mb-4 p-2 bg-gray-100 text-right text-xl font-mono min-h-10">
        {input || "0"}
      </div>
      {result !== null && (
        <div className="mb-4 p-2 bg-gray-200 text-right text-xl font-mono">
          = {result}
        </div>
      )}
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <Button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className="py-2"
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
}
