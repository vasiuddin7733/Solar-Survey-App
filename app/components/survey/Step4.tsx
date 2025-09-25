import { FC } from "react";
import Image from "next/image";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { SurveyData } from "@/survey/page";

interface StepProps {
  register: UseFormRegister<SurveyData>;
  errors: FieldErrors<SurveyData>;
}

const Step4: FC<StepProps> = ({ register, errors }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2 relative h-64 md:h-128">
        <Image
          src="/electricity.webp"
          alt="Property illustration"
          fill
          className="object-fit"
        />
      </div>

      <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
        <h2 className="text-2xl font-bold">Step 4: Stromverbrauch</h2>
        <label htmlFor="electricityUsage" className="block font-medium mb-1">
          Stromverbrauch:
        </label>
        <select
          id="electricityUsage"
          {...register("electricityUsage", {
            required: "Please select electricity usage",
          })}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select --</option>
          <option value="under3000">Unter 3.000 kWh</option>
          <option value="3000to5000">3.000–5.000 kWh</option>
          <option value="over5000">Over 5,000 kWh</option>
          <option value="keineAngabewn">keine Angabe</option>
        </select>
        {errors.electricityUsage && (
          <p className="text-red-500 mt-1">{errors.electricityUsage.message}</p>
        )}
      </div>
    </div>
  );
};

export default Step4;
