"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import Step1 from "@/components/survey/Step1";
import Step2 from "@/components/survey/Step2";
import Step3 from "@/components/survey/Step3";
import Step4 from "@/components/survey/Step4";
import Step5 from "@/components/survey/Step5";

export type SurveyData = {
  propertyType: string;
  roofOrientation: string[];
  roofAge: string;
  electricityUsage: string;
  otherSolutions: string;
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
      propertyType: "",
      roofOrientation: [],
      roofAge: "",
      electricityUsage: "",
      otherSolutions: "",
      name: "",
      email: "",
      phone: "",
    },
  });

  const { handleSubmit, register, formState } = methods;

  const onSubmit = async (data: SurveyData) => {
    if (step < 5) {
      setStep(step + 1);
      return;
    }
    setLoading(true);
    const res = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await res.json();
    router.push(`/result?answer=${result.answer}`);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-4xl mx-auto mt-24"
      >
        {step === 1 && <Step1 register={register} errors={formState.errors} />}
        {step === 2 && <Step2 register={register} errors={formState.errors} />}
        {step === 3 && <Step3 register={register} errors={formState.errors} />}
        {step === 4 && <Step4 register={register} errors={formState.errors} />}
        {step === 5 && <Step5 register={register} errors={formState.errors} />}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
            style={{ background: "oklch(90.5% 0.182 98.111)" }}
          >
            {step === 5 ? (loading ? "Submitting..." : "Submit") : "Next"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Survey;
