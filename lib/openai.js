import { OpenAI } from "openai"; // Add this line at the top of your file

export function getAIReply(text) {
  const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "user",
        content: `${text},find me a real poem write it in arabic and do spaces between lines and write only the peom and devide by Chest and sacrum, with mentioning the original poetry writer, and do not ever write in english.`,
      },
    ],
  });

  return completion.then((result) => result.choices[0].message);
}
