"use client";

import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import Image from "next/image";
import { SurveyData } from "@/survey/page";

interface StepProps {
  register: UseFormRegister<SurveyData>;
  errors: FieldErrors<SurveyData>;
}

const Step2: FC<StepProps> = ({ register, errors }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2 relative h-64 md:h-128">
        <Image
          src="/roof1.jpg"
          alt="Property illustration"
          fill
          className="object-cover"
        />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Step 2: Roof Orientation</h2>
        <p>Select one or more:</p>
        <div className="flex flex-col space-y-2 mt-2">
          {["South", "West", "East", "North"].map((dir) => (
            <label key={dir} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`roof-${dir}`}
                value={dir}
                {...register("roofOrientation")}
                className="w-4 h-4"
              />
              <span>{dir}</span>
            </label>
          ))}
        </div>
        {errors.roofOrientation && (
          <p className="text-red-500 mt-1">{errors.roofOrientation.message}</p>
        )}
      </div>
    </div>
  );
};

export default Step2;
