import { NextResponse } from "next/server";
import { surveySchema } from "@/lib/validation";
import { log } from "console";

export async function POST(req: Request) {
  console.log("Received request at /api/submit");

  try {
    const body = await req.json();

    const parsed = surveySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.format() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    log("Validated data:", data);

    const result = Math.random() > 0.5 ? "yes" : "no";

    return NextResponse.json({ result });
  } catch (err) {
    console.error("Error handling request:", err);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
