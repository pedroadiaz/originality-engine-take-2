import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from "next/server";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env["NEXT_PUBLIC_GEMINI_API_KEY"]!);

const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" },
    systemInstruction: `You are an assistant for a digital ad agency that 
            makes commercial ads. Please list out several overlap ads and a verbose analysis as to what is the 
            overlap. Your primary objective is to ascertain any ad overlap 
            between the user's idea and existing ads across all industries and provided data. You must provide a 
            score ranking (out of 100) as to how good the user's idea is compared to ad 
            overlap metrics. Point out potential improvement in the idea or alternatives, that would be a good replacement.
            I also want you to provide at least three prompts to generate images for storyboarding the ad with the prompts.
            I also need you to generate at least 5 hashtags for the ad idea, ordered by what is trending on social media on top.
            Finally, I want the output to be in JSON format, where it conforms to the following schema:
            {
              "title": "Ad Idea Title",
              "potentialImprovements": [
                {
                  "mainPoint": "Potential Improvement Main Point",
                  "minorPoints": ["Potential Improvement Minor Point 1", "Potential Improvement Minor Point 2"]
                }
              ],
              "suggestedIdeas": [
                {
                  "mainPoint": "Suggested Idea Main Point",
                  "minorPoints": ["Suggested Idea Minor Point 1", "Suggested Idea Minor Point 2"]
                }
              ],
              "overallScore": 50,
              "hashtags": ["Hashtag 1", "Hashtag 2", "Hashtag 3", "Hashtag 4", "Hashtag 5"],
              "imagePrompts": [
                {
                  "storyboardSort: 1,
                  "prompt": "Prompt 1"
                },
                {
                  "storyboardSort: 2,
                  "prompt": "Prompt 2"
                }
              ]
            }
            `
});

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const prompt = body.prompt;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return NextResponse.json( { response: JSON.parse(result.response.text())} );
}