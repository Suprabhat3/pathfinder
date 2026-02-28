import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Perplexity API uses OpenAI compatible endpoints
const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY || "YOUR_PERPLEXITY_API_KEY_HERE",
  baseURL: "https://api.perplexity.ai",
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

Use your real-time search capabilities to find the most up-to-date and highly recommended YouTube videos, official documentation, and free courses for this specific goal.

Return ONLY a valid JSON object with a single root property called "roadmap" that contains an array of steps. Each step MUST conform to this structure:
{
  "id": 1, 
  "title": "A short, descriptive title",
  "description": "What to study and why it matters.",
  "time": "Estimated time duration",
  "resources": [
    { "name": "Name of resource (e.g. YouTube Video - Channel Name)", "url": "Actual valid URL found from your search" }
  ]
}

Make the roadmap practical, chronological, tailored exactly to their goal, and capped at around 5-8 major milestones/modules. Output raw JSON only. Do not include introductory text.`;

    const response = await perplexity.chat.completions.create({
      model: "sonar", // the fast Perplexity model with search capabilities
      messages: [
        { role: "system", content: "You are a helpful assistant that outputs only valid JSON without markdown formatting." },
        { role: "user", content: prompt }
      ]
    });

    let content = response.choices[0].message.content;
    
    if (!content) {
      throw new Error("No content generated");
    }

    // Clean up potential markdown formatting that Perplexity might return
    content = content.replace(/```json/gi, '').replace(/```/g, '').trim();

    const data = JSON.parse(content);
    return NextResponse.json(data);
    
  } catch (error: any) {
    console.error("Roadmap generation error:", error);
    return NextResponse.json({ error: "Failed to generate roadmap", details: error.message }, { status: 500 });
  }
}

