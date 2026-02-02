import React from "react";
import { useAuth } from "../../context/auth/useAuth";



const Level = ({


  value,
  max = 1000,
  size = 46,
  strokeWidth = 5,
  color = "text-green-500",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const user = useAuth();
  const progress = Math.min(Math.max(user?.totalExperience, 0), max);
  const offset = circumference - (progress / max) * circumference;
console.log(user.totalExperience);
  return (
    <div
      className="relative flex items-center justify-center mb-2"
      style={{ width: size, height: size }}
    >
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`${color} transition-all duration-300`}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <span className="absolute font-bold left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">{user?.totalExperience }</span>
    </div>
  );
};

export default Level;
