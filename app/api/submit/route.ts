import { NextResponse } from "next/server";
import { surveySchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const safeData = surveySchema.safeParse(body);

    console.log("Validated data:", safeData.data);

    const result = { answer: Math.random() > 0.5 ? "yes" : "no" };

    return NextResponse.json(result);
  } catch (err) {
    console.error("Error handling request:", err);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
