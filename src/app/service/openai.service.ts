import OpenAI from "openai";

export let openai: OpenAI = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY  as string, dangerouslyAllowBrowser: true});

export let thread: OpenAI.Beta.Threads.Thread;

export const createAssistant = async () : Promise<OpenAI.Beta.Assistants.Assistant> => {
    try {
      let oeAssistant = await findAssistantByName(
        process.env["NEXT_PUBLIC_OPENAI_ASSISTANT_NAME"] as string
      );
  
      if (!oeAssistant) {
        const assistantResponse = await openai.beta.assistants.create({
          instructions: `You are an assistant for a digital ad agency that 
            makes commercial ads. Please list out several overlap ads and a verbose analysis as to what is the 
            overlap. With the data provided, perform to the best of your ability and ask 
            questions if necessary. Your primary objective is to ascertain any ad overlap 
            between the user's idea and existing ads acrossed all industries and provided data. You must provide a 
            score ranking (out of 100) as to how good the user's idea is compared to ad 
            overlap metrics. Point out potential improvement in the idea or alternatives, that would be a good replacement.
            I also want you to provide at least three prompts to generate images using Dall-e 3.0 for storyboarding the ad with the prompts.
            I also need you to generate at least 5 hashtags for the ad idea, ordered by what is trending on social media on top.
            Finally, I want the output to be in JSON format, where it conforms to the following schema:
            {
              "title": "Ad Idea Title",
              "ideaElements": [
                {
                  "mainPoint": "Main Idea Element"
                }
              ],
              "verboseAnalysis": [
                {
                  "name": "Overlap Ad Name",
                  "analysis": "Overlap Ad Analysis",
                  "score": 50
                }
              ],
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
            `,
          name: process.env["NEXT_PUBLIC_OPENAI_ASSISTANT_NAME"] as string,
          description: "Digital Dreamers AI",
          tools: [],
          model: process.env["NEXT_PUBLIC_OPENAI_MODEL"] as string,
          response_format: { "type": "json_object" },
        });
        console.log("Assistant Created:", assistantResponse);
        oeAssistant = assistantResponse;
      }
  
      return oeAssistant;
    } catch (error) {
      console.error("Error creating the assistant:", error);
      throw new Error("Unable to create or retrieve assistant");
    }
  }
  
export const findAssistantByName = async (name: string) => {
    try {
      const response = await openai.beta.assistants.list();
      const assistants = response.data;
  
      const assistant = assistants.find((assistant) => assistant.name === name);
      if (assistant) {

        return assistant;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching assistants:", error);
      throw error;
    }
  }

export const sendMessage = async(threadId: string, content: string): Promise<OpenAI.Beta.Threads.Messages.Message> => {
    const message = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: content,
    });

    return message;
  }


export const createThread = () : Promise<OpenAI.Beta.Threads.Thread> => {
    return openai.beta.threads.create();
}

export const initialize = async () : Promise<OpenAI.Beta.Assistants.Assistant> => {
    thread = await createThread();
    return createAssistant();
}


export const streamAssistantResponse = async(
    threadId: string,
    assistantId: string,
    messageId: string
  ) => {
    const message = await openai.beta.threads.messages.retrieve(threadId, messageId);
    return openai.beta.threads.runs.stream(threadId, {
      assistant_id: assistantId,
    });
  }