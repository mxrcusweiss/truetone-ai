import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { text } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "Rewrite this text to sound natural and human."
      },
      {
        role: "user",
        content: text
      }
    ],
  });

  return Response.json({
    result: response.choices[0].message.content
  });
}
