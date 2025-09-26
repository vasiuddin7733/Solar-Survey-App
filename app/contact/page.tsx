"use client";

import React from "react";
import { useForm } from "react-hook-form";

type ContactData = {
  name?: string;
  email?: string;
  phone?: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactData>();

  const onSubmit = (data: ContactData) => {
    console.log("Kontaktformular Daten:", data);
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-yellow-400 to-yellow-500 overflow-hidden min-h-screen">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-yellow-300 transform -skew-y-3" />

      <div className="relative z-10 max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6">Kontaktieren Sie uns</h1>
        <p className="mb-10">
          Haben Sie Fragen zu Photovoltaik, Fördermitteln oder unserem
          Solar-Survey? Füllen Sie das Formular aus und unser Team meldet sich
          bei Ihnen.
        </p>

        {isSubmitSuccessful && (
          <p className="text-green-700 font-medium mb-6">
            ✅Vielen Dank! Wir haben Ihre Anfrage erhalten.
          </p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-6 rounded-2xl shadow-lg"
        >
          <div>
            <input
              {...register("name", {
                validate: (value) =>
                  value === "" ||
                  (typeof value === "string" && value.length >= 2) ||
                  "Name muss mind. 2 Zeichen haben",
              })}
              placeholder="Name (optional)"
              className="w-full border p-3 rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email", {
                validate: (value) =>
                  value === "" ||
                  (typeof value === "string" && /^\S+@\S+\.\S+$/.test(value)) ||
                  "Bitte eine gültige E-Mail eingeben",
              })}
              type="email"
              placeholder="E-Mail (optional)"
              className="w-full border p-3 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("phone", {
                validate: (value) =>
                  value === "" ||
                  (typeof value === "string" &&
                    /^\+?[0-9\s-]{7,15}$/.test(value)) ||
                  "Bitte eine gültige Telefonnummer eingeben",
              })}
              type="tel"
              placeholder="Telefon (optional)"
              className="w-full border p-3 rounded-lg"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("message", {
                required: "Bitte geben Sie eine Nachricht ein",
                minLength: {
                  value: 10,
                  message: "Die Nachricht muss mind. 10 Zeichen enthalten",
                },
              })}
              placeholder="Ihre Nachricht"
              rows={5}
              className="w-full border p-3 rounded-lg"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
