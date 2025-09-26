import { SurveyData } from "@/survey/page";
import React, { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface StepProps {
  register: UseFormRegister<SurveyData>;
  errors: FieldErrors<SurveyData>;
}

const Step6: FC<StepProps> = ({ register, errors }) => {
  return (
    <div className="mt-4 space-y-4 border-t pt-4">
      <h3 className="font-medium">Kontakt (optional)</h3>

      <div>
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full border p-2 rounded mt-1"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="E-Mail"
          className="w-full border p-2 rounded mt-1"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Telefon"
          className="w-full border p-2 rounded mt-1"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
    </div>
  );
};

export default Step6;
