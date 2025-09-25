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
        <SolarOptions
          label="Dachalter:"
          options={solarOptions.dachalter}
          register={register("Dachalter", {
            required: "Bitte wählen Sie die Art der Immobilie aus",
          })}
          error={errors.Dachalter?.message?.toString()}
        />
      </div>
    </div>
  );
};

export default Step3;
