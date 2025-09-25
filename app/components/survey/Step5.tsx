import { FC } from "react";
import Image from "next/image";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { SurveyData } from "@/survey/page";

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

        <label htmlFor="otherSolutions" className="block font-medium mb-1">
          Interessiert an anderen Energielösungen?
        </label>
        <select
          id="otherSolutions"
          {...register("otherSolutions", {
            required: "Please select an option",
          })}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select --</option>
          <option value="yes">Ja</option>
          <option value="no">Nein</option>
          <option value="dontknow">Weis nicht</option>
        </select>
        {errors.otherSolutions && (
          <p className="text-red-500 mt-1">{errors.otherSolutions.message}</p>
        )}

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
