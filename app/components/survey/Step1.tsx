import { FC } from "react";
import Image from "next/image";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { SurveyData } from "@/survey/page";
import SolarOptions from "./SolarOptions";
import { solarOptions } from "./solarOptions";

interface StepProps {
  register: UseFormRegister<SurveyData>;
  errors: FieldErrors<SurveyData>;
}

const Step1: FC<StepProps> = ({ register, errors }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2 relative h-64 md:h-128">
        <Image
          src="/roof.jpg"
          alt="Property illustration"
          fill
          className="object-cover"
        />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">* Step 1: Art der Immobilie</h2>
        <SolarOptions
          options={solarOptions.immobilienart}
          register={register("immobilienart", {
            required: "Bitte wählen Sie die Art der Immobilie aus",
          })}
          error={errors.immobilienart?.message?.toString()}
        />
      </div>
    </div>
  );
};

export default Step1;
