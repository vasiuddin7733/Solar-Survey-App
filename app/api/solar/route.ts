// app/api/solar/route.ts
import { NextResponse } from "next/server";
import { SurveyData } from "@/survey/page"; // <- reuse your type if possible

export async function POST(req: Request) {
  console.log("📩 Received request at /api/solar");

  try {
    // 1. Parse request body
    const body = (await req.json()) as SurveyData;

    // 2. Here you can run validation, DB save, or call external API
    // For now, just return the same form data + a mock result
    const response = {
      ...body,
      answer: Math.random() > 0.5 ? "yes" : "no", // demo extra field
    };

    return NextResponse.json(response);
  } catch (err) {
    console.error("⚠️ Error handling request:", err);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
