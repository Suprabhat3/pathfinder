import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "YOUR_OPENAI_API_KEY_HERE",
});

export const maxDuration = 60; 

export async function POST(req: Request) {
  try {
    const { goal, level, timeline } = await req.json();

    if (!goal) {
      return NextResponse.json({ error: "Goal is required" }, { status: 400 });
    }

    const prompt = `You are an expert curriculum designer and career coach. Create a step-by-step roadmap for a user whose learning goal is: "${goal}".
Their current skill level is: "${level || "Beginner"}".
They have the following time commitment: "${timeline || "As needed"}".

Return ONLY a valid JSON object with a single root property called "roadmap" that contains an array of steps. Each step MUST conform to this structure:
{
  "id": 1, 
  "title": "A short, descriptive title for the step/module",
  "description": "A concise, motivating explanation of what to study, why it matters, and high-level concepts.",
  "time": "Estimated time duration for this step (e.g., 'Day 1-3' or 'Week 1-2')",
  "resources": [
    { "name": "Name of the resource (e.g., MDN Web Docs)", "url": "A valid, real URL to a free, high-quality resource like YouTube, freeCodeCamp, documentation, etc. Use '#' if absolutely no link is available." }
  ]
}

Make the roadmap practical, chronological, tailored exactly to their goal, and capped at around 5-8 major milestones/modules for maximum focus and achievable progress. Do not use markdown wrappers (\`\`\`json) or extra text.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });

    const content = response.choices[0].message.content;
    
    if (!content) {
      throw new Error("No content generated");
    }

    const data = JSON.parse(content);
    return NextResponse.json(data);
    
  } catch (error: any) {
    console.error("Roadmap generation error:", error);
    return NextResponse.json({ error: "Failed to generate roadmap", details: error.message }, { status: 500 });
  }
}
