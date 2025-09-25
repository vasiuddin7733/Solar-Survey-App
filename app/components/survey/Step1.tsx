import { FC } from "react";
import Image from "next/image";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { SurveyData } from "@/survey/page";

interface StepProps {
  register: UseFormRegister<SurveyData>;
  errors: FieldErrors<SurveyData>;
}

const Step1: FC<StepProps> = ({ register, errors }) => {
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
        <h2 className="text-2xl font-bold mb-4">Step 1: Art der Immobilie</h2>
        <label htmlFor="propertyType" className="block">
          Art der Immobilie:
        </label>
        <select
          id="propertyType"
          {...register("propertyType", {
            required: "Bitte wählen Sie die Art der Immobilie aus",
          })}
          className="w-full border p-2 rounded mt-2"
        >
          <option value="">-- Select --</option>
          <option value="single">Einfamilienhaus</option>
          <option value="multi">Mehrfamilienhaus</option>
          <option value="commercial">Gewerbeimmobilie</option>
        </select>
        {errors.propertyType && (
          <p className="text-red-500 mt-1">{errors.propertyType.message}</p>
        )}
      </div>
    </div>
  );
};

export default Step1;
