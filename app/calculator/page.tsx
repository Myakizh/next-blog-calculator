"use client";

import { Parser } from "expr-eval";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CalculatorButton = ({
  value,
  onClick,
  variant = "secondary",
  className = "",
}: {
  value: string;
  onClick: (val: string) => void;
  variant?: "secondary" | "info";
  className?: string;
}) => (
  <Button
    onClick={() => onClick(value)}
    variant={variant}
    className={className}
  >
    {value}
  </Button>
);

export function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = useCallback(() => {
    const allowedChars = /^[0-9+\-*/.]+$/;
    if (!allowedChars.test(input)) {
      setResult("Error");
      return;
    }

    try {
      const parser = new Parser();
      const res = parser.evaluate(input);
      setResult(res.toString());
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
      if (allowedKeys.includes(e.key)) setInput((prev) => prev + e.key);
      else if (e.key === "Enter") calculate();
      else if (e.key === "Backspace") setInput((prev) => prev.slice(0, -1));
      else if (e.key.toLowerCase() === "c") clear();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [calculate, clear]);

  const handleButtonClick = (val: string) => {
    if (val === "C") clear();
    else if (val === "=") calculate();
    else setInput((prev) => prev + val);
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
  ];

  return (
    <Card className="max-w-md mx-auto p-4">
      <div className="mb-2 p-2 bg-secondary text-right text-xl min-h-10 rounded">
        {input || "0"}
      </div>
      {result !== null && (
        <div className="mb-4 p-2 bg-primary-info text-right text-xl rounded">
          = {result}
        </div>
      )}
      <div className="grid grid-cols-4 gap-2 mb-2">
        {buttons.map((btn) => (
          <CalculatorButton
            key={btn}
            value={btn}
            onClick={handleButtonClick}
            variant={["/", "*", "-", "+"].includes(btn) ? "info" : "secondary"}
          />
        ))}
      </div>
      <CalculatorButton
        value="="
        onClick={handleButtonClick}
        variant="info"
        className="col-span-4 py-2"
      />
    </Card>
  );
}

export default function CalculatorPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Calculator</h1>
      <Calculator />
    </div>
  );
}
