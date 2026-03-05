import React from "react";

interface TerminalProps {
  lines: string[];
}

const Terminal: React.FC<TerminalProps> = ({ lines }) => (
  <div className="bg-black rounded-lg p-6 font-mono text-green-300 min-h-[160px] text-left shadow-inner border border-primary/40">
    <div className="flex flex-col gap-2 text-base leading-[1.5]">
      {lines.map((line, idx) => (
        <div key={idx} className="whitespace-pre">
          {line}
        </div>
      ))}
    </div>
  </div>
);

export default Terminal;