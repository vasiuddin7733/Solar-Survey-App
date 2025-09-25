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
          Step 5: Kontaktdaten und weitere Lösungen
        </h2>
        <SolarOptions
          label="Interessiert an anderen Energielösungen?:"
          options={solarOptions.solaranlage}
          register={register("Dachalter", {
            required: "Bitte wählen Sie die Art der Immobilie aus",
          })}
          error={errors.solaranlage?.message?.toString()}
        />

        <div className="mt-4 space-y-2 border-t pt-4">
          <h3 className="font-medium">Kontakt (optional)</h3>
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full border p-2 rounded mt-1"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="E-Mail"
            className="w-full border p-2 rounded mt-1"
          />
          <input
            {...register("phone")}
            type="tel"
            placeholder="Telefon"
            className="w-full border p-2 rounded mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Step5;
