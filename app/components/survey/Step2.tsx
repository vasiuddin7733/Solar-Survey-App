import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import Image from "next/image";
import { SurveyData } from "@/survey/page";
import { solarOptions } from "./solarOptions";

interface StepProps {
  register: UseFormRegister<SurveyData>;
  errors: FieldErrors<SurveyData>;
}

const Step2: FC<StepProps> = ({ register, errors }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2 relative h-64 md:h-128">
        <Image
          src="/direction.jpg"
          alt="Property illustration"
          fill
          className="object-fit"
        />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">
          Step 2: Ausrichtung des Daches
        </h2>
        <p>Wählen Sie eine oder mehrere Optionen aus:</p>
        <div className="flex flex-col space-y-2 mt-2">
          {solarOptions?.ausrichtung?.map((dir) => (
            <label key={dir} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`roof-${dir}`}
                value={dir}
                {...register("ausrichtung", {
                  validate: (value) =>
                    value.length > 0 ||
                    "Bitte wählen Sie mindestens eine Option aus",
                })}
                className="w-4 h-4"
              />
              <span>{dir}</span>
            </label>
          ))}
        </div>
        {errors.ausrichtung && (
          <p className="text-red-500 mt-1">{errors.ausrichtung.message}</p>
        )}
      </div>
    </div>
  );
};

export default Step2;
