"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";

export interface ProjectPreset {
  title: string;
  technologies: string;
  description: string;
  bullets: string[];
  linkedin: string;
}

export async function generateProjectContent(
  title: string,
  technologies: string,
  description: string
): Promise<ProjectPreset> {
  if (!description || !description.trim()) {
    throw new Error("Description is required for generation.");
  }

  try {
    const response = await generateObject({
      model: google("gemini-2.5-flash"),
      schema: z.object({
        title: z.string().describe("Professional project name based on inputs"),
        technologies: z.string().describe("Comma separated list of technologies used"),
        description: z.string().describe("Cleaned draft description"),
        bullets: z.array(z.string()).min(3).max(3).describe("3 professional resume bullet points following STAR method (Situation, Task, Action, Result) with strong action verbs and quantified achievements"),
        linkedin: z.string().describe("Engaging professional LinkedIn post project update with bullet points and hashtags"),
      }),
      prompt: `You are an expert resume writer. Given the following draft details for a software project:
- Name: ${title || "Unnamed Project"}
- Technologies: ${technologies || "Unspecified"}
- Draft Description: ${description}

Generate:
1. A professional, punchy project title.
2. Comma-separated technology keywords.
3. 3 high-impact resume achievement bullet points. Each bullet point MUST follow the STAR method, starting with a strong active verb, stating the action taken, and emphasizing a quantified result or metric (e.g. 'yielding a 24% reduction in load time' or 'capturing 5k+ active users').
4. A professional, exciting LinkedIn post introducing this project, its tech stack, and key metrics.`,
    });

    return response.object;
  } catch (error) {
    console.error("Error generating content via Gemini API:", error);
    throw new Error("Failed to generate content. Please ensure GOOGLE_GENERATIVE_AI_API_KEY is configured.");
  }
}
