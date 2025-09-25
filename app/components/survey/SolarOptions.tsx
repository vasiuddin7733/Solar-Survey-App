// SolarOptions.tsx
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface SolarOptionsProps {
  label: string;
  options: string[];
  register?: UseFormRegisterReturn;
  error?: string;
}

const SolarOptions: React.FC<SolarOptionsProps> = ({
  label,
  options,
  register,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <select
        className="w-full border p-2 rounded"
        {...(register ? register : {})}
      >
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
