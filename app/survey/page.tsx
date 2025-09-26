"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Step1, Step2, Step3, Step4, Step5, Step6 } from "@/components/survey";

export type SurveyData = {
  immobilienart: string;
  ausrichtung: string[];
  dachalter: string;
  stromverbrauch: string;
  solaranlage: string;
  name?: string;
  email?: string;
  phone?: string;
};

const Survey = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const methods = useForm<SurveyData>({
    defaultValues: {
      immobilienart: "",
      ausrichtung: [],
      dachalter: "",
      stromverbrauch: "",
      solaranlage: "",
      name: "",
      email: "",
      phone: "",
    },
  });

  const { handleSubmit, register, formState } = methods;

  const onSubmit = async (data: SurveyData) => {
    if (step < 6) {
      setStep(step + 1);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/solar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("📩 API Response:", result);

      router.push(`/result?answer=${result.answer}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-yellow-400 to-yellow-500 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-yellow-300 transform -skew-y-3" />
      <div className="relative z-10 max-w-4xl mx-auto py-16">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white shadow-lg rounded-xl p-6"
          >
            {step === 1 && (
              <Step1 register={register} errors={formState.errors} />
            )}
            {step === 2 && (
              <Step2 register={register} errors={formState.errors} />
            )}
            {step === 3 && (
              <Step3 register={register} errors={formState.errors} />
            )}
            {step === 4 && (
              <Step4 register={register} errors={formState.errors} />
            )}
            {step === 5 && (
              <Step5 register={register} errors={formState.errors} />
            )}
            {step === 6 && (
              <Step6 register={register} errors={formState.errors} />
            )}
            <div
              className={`flex mt-6 ${
                step === 1 ? "justify-end" : "justify-between"
              }`}
            >
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  zurück
                </button>
              )}
              <button
                type="submit"
                className="px-4 py-2 text-white rounded-lg shadow"
                style={{ background: "oklch(90.5% 0.182 98.111)" }}
              >
                {step === 6
                  ? loading
                    ? "Einreichen..."
                    : "einreichen"
                  : "weiter"}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Survey;
