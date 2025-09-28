"use client";

import { useEffect, useState } from "react";

const ResultPage = () => {
  const [answer, setAnswer] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAnswer(params?.get("answer"));
  }, []);

  if (!answer) return <p>Lädt...</p>;

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
