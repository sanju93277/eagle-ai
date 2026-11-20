
export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Gemini API key is missing" },
        { status: 500 }
      );
    }

    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Please enter a message" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/interactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          model: "gemini-3.8-flash",
          input: message,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: "Gemini API request failed" },
        { status: response.status }
      );
    }

    const reply = data.steps
      ?.filter((step: any) => step.type === "model_output")
      .flatMap((step: any) => step.content || [])
      .filter((item: any) => item.type === "text")
      .map((item: any) => item.text)
      .join("\n");

    return Response.json({ reply: reply || "No response received" });

  } catch {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
