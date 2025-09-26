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

const Step5: FC<StepProps> = ({ register, errors }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2 relative h-64 md:h-128">
        <Image
          src="/energy.jpg"
          alt="Property illustration"
          fill
          className="object-fit"
        />
      </div>

      <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
        <h2 className="text-2xl font-bold mb-4">
          * Step 5: Kontaktdaten und weitere Lösungen
        </h2>
        <SolarOptions
          options={solarOptions.solaranlage}
          register={register("solaranlage", {
            required: "Bitte wählen Sie eine Option aus.",
          })}
          error={errors.solaranlage?.message?.toString()}
        />
      </div>
    </div>
  );
};

export default Step5;
