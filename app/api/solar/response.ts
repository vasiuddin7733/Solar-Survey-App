import { NextResponse } from "next/server";
import { surveySchema } from "@/lib/validation";

export async function POST(req: Request) {
  const data = await req.json();

  // Validate input again on server
  const result = surveySchema.safeParse(data);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // Random Yes/No response
  const answer = Math.random() > 0.5 ? "yes" : "no";

  return NextResponse.json({ answer });
}
