"use client";

import { useSearchParams } from "next/navigation";

const ResultPage = () => {
  const params = useSearchParams();
  const answer = params.get("answer");

  return (
    <div className="text-center space-y-4">
      {answer === "yes" ? (
        <>
          <h1 className="text-2xl font-bold text-green-600">Yes! 🎉</h1>
          <p>
            Ihr Dach eignet sich hervorragend für die Nutzung von Solarenergie.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-red-600">Not ideal 😕</h1>
          <p>
            Es scheint, dass Solarenergie für Ihr Dach derzeit nicht lohnenswert
            ist.
          </p>
        </>
      )}
    </div>
  );
};

export default ResultPage;
