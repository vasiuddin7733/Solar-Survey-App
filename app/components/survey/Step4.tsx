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
        <SolarOptions
          label="Stromverbrauch:"
          options={solarOptions.stromverbrauch}
          register={register("Dachalter", {
            required: "Bitte wählen Sie die Art der Immobilie aus",
          })}
          error={errors.stromverbrauch?.message?.toString()}
        />
      </div>
    </div>
  );
};

export default Step4;
