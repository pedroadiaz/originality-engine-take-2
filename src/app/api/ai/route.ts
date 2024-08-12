import { initialize, sendMessage, streamAssistantResponse, thread } from "../../service/openai.service";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { AssistantStream } from "openai/lib/AssistantStream.mjs";
import { AdResponse } from '../../models/AdResponse';

let oeAssistant;

let adResponse: AdResponse

initialize().then((assistant) => {
    if (assistant) {
      oeAssistant = assistant;
    }
  });

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const prompt = body.prompt;
    const message =  await sendMessage(thread.id, prompt);
    const run = await streamAssistantResponse(thread.id, oeAssistant!.id, message.id);
    adResponse = await streamToPromise(run);
    adResponse.prompt = prompt;
    return NextResponse.json( { response: adResponse} );
}

export const GET = () => {
    return NextResponse.json( { response: adResponse } );
}

const streamToPromise = (run: AssistantStream): Promise<AdResponse> => {
    return new Promise((resolve, reject) => {
      run.on("textDone", (response: OpenAI.Beta.Threads.Messages.Text) => {
        resolve(JSON.parse(response.value));
      });
    });
}