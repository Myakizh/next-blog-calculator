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
  const [history, setHistory] = useState<string | null>(null);

  const calculate = useCallback(() => {
    const allowedChars = /^[0-9+\-*/.]+$/;
    if (!allowedChars.test(input)) {
      setInput("Error");
      return;
    }

    try {
      const parser = new Parser();
      const res = parser.evaluate(input);
      setHistory(input);
      setInput(res.toString());
    } catch {
      setInput("Error");
    }
  }, [input]);

  const clear = useCallback(() => {
    setInput("");
    setHistory(null);
  }, []);

  const canAppendChar = (current: string, next: string) => {
    const operators = ["+", "-", "*", "/"];
    const lastChar = current.slice(-1);

    if (operators.includes(lastChar) && operators.includes(next)) return false;
    if (
      current === "0" &&
      operators.includes(next) &&
      next !== "-" &&
      next !== "."
    )
      return false;
    if (next === ".") {
      const lastNumber = current.split(/[\+\-\*\/]/).pop();
      if (lastNumber?.includes(".")) return false;
    }

    return true;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const allowedKeys = "0123456789+-*/.";
      if (allowedKeys.includes(e.key)) {
        setInput((prev) => {
          if (canAppendChar(prev, e.key)) return prev + e.key;
          return prev;
        });
      } else if (e.key === "Enter") calculate();
      else if (e.key === "Backspace") setInput((prev) => prev.slice(0, -1));
      else if (e.key.toLowerCase() === "c") clear();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [calculate, clear]);

  const handleButtonClick = (val: string) => {
    if (val === "C") clear();
    else if (val === "=") calculate();
    else if (!canAppendChar(input, val)) return;
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
    ".",
    "0",
    "C",
    "+",
  ];

  return (
    <Card className="max-w-md mx-auto p-4">
      <div className="mb-4 p-2 bg-secondary text-right rounded min-h-16 flex flex-col justify-center">
        {history !== null && (
          <div className="text-sm text-muted-foreground truncate">
            {history}
          </div>
        )}
        <div className="text-2xl">{input || "0"}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <CalculatorButton
            key={btn}
            value={btn}
            onClick={handleButtonClick}
            variant={["/", "*", "-", "+"].includes(btn) ? "info" : "secondary"}
          />
        ))}
        <CalculatorButton
          value="="
          onClick={handleButtonClick}
          variant="info"
          className="col-span-4"
        />
      </div>
    </Card>
  );
}
