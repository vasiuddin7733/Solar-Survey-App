"use client";

import { useSearchParams } from "next/navigation";

const ResultPage = () => {
  const params = useSearchParams();
  const answer = params.get("answer");
  console.log("Answer from query params:", answer);

  return (
    <div className="text-center space-y-4">
      {answer === "yes" ? (
        <>
          <h1 className="text-2xl font-bold text-green-600">Yes! 🎉</h1>
          <p>Your roof is a great candidate for solar energy.</p>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-red-600">Not ideal 😕</h1>
          <p>It seems solar might not be worth it for your roof right now.</p>
        </>
      )}
    </div>
  );
};

export default ResultPage;
