import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface SolarOptionsProps {
  options: string[];
  register?: UseFormRegisterReturn;
  error?: string;
}

const SolarOptions: React.FC<SolarOptionsProps> = ({
  options,
  register,
  error,
}) => {
  return (
    <div className="mb-4">
      <select
        className="w-full border p-2 rounded"
        {...(register ? register : {})}
        defaultValue=""
      >
        <option value="">-- Select --</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default SolarOptions;
