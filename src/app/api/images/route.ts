import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const openai: OpenAI = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY  as string, dangerouslyAllowBrowser: true});

export const GET = async (req: NextRequest) => {
    return NextResponse.json({
        message: "Hello Images"
    });
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const prompt = body.prompt;
    const imageSize = body.size || "1792x1024";
    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: imageSize,
          });
        const image_url = response.data[0].url;
        return NextResponse.json({
            image: image_url
        });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }

}