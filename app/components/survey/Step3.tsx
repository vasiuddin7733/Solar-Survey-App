import { FC } from "react";
import Image from "next/image";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { SurveyData } from "@/survey/page";

interface StepProps {
  register: UseFormRegister<SurveyData>;
  errors: FieldErrors<SurveyData>;
}

const Step3: FC<StepProps> = ({ register, errors }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2 relative h-64 md:h-128">
        <Image
          src="/roof_age.webp"
          alt="Property illustration"
          fill
          className="object-fit"
        />
      </div>

      <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
        <h2 className="text-2xl font-bold">Step 3: Dachalter</h2>
        <label htmlFor="roofAge" className="block font-medium mb-1">
          Dachalter:
        </label>
        <select
          id="roofAge"
          {...register("roofAge", { required: "Please select roof age" })}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select --</option>
          <option value="under5">Unter 5 Jahre</option>
          <option value="5to15">5–15 Jahre</option>
          <option value="over15">Über 15 Jahre</option>
          <option value="over15">Keine Angabe</option>
        </select>
        {errors.roofAge && (
          <p className="text-red-500 mt-1">{errors.roofAge.message}</p>
        )}
      </div>
    </div>
  );
};

export default Step3;
