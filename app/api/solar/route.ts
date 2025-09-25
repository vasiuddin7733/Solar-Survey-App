import { NextResponse } from "next/server";
import { surveySchema } from "@/lib/validation";

export function POST(req: Request) {
  console.log("📩 Received request at /api/solar");

  try {
    console.log("📝 Request body:", req);

    // Validate input with Zod
    // const parsed = surveySchema.safeParse(body);
    // if (!parsed.success) {
    //   console.error("❌ Validation failed:", parsed.error.flatten());
    //   return NextResponse.json(
    //     { error: parsed.error.flatten() },
    //     { status: 400 }
    //   );
    // }

    // Random Yes/No result
    const answer = Math.random() > 0.5 ? "yes" : "no";

    console.log("✅ Valid input, returning:", answer);
    return NextResponse.json({ answer });
  } catch (err) {
    console.error("⚠️ Error handling request:", err);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
