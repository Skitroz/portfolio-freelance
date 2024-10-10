import React from "react";

interface SkillProgressProps {
  percentage: number;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ percentage }) => (
  <div className="relative w-24 h-24 mx-auto">
    <svg className="transform rotate-[-90deg]" viewBox="0 0 100 100" width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#4B5563"
        strokeWidth="10"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#1f2937"
        strokeWidth="10"
        strokeDasharray="283"
        strokeDashoffset={`${283 - (percentage / 100) * 283}`}
        strokeLinecap="round"
        className="transition-all duration-500"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
      {percentage}%
    </div>
  </div>
);

export default SkillProgress;